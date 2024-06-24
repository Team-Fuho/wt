import type { GenericParameter, TResponse } from "./types/wagtail"

type OrdinalType = boolean | string | number
type SerializableType = Date | URL | OrdinalType
type GenericType = SerializableType | Record<string, SerializableType>

export type ModelData<T extends string[]> = Record<T[number], GenericType>

/**
 * @description query options
 */
export interface Context {
    host: string
    lang: string
}

export type Hook<Y, T> = { transform: SerdeTrait<Y, string>; fields: T[] }[]

type GenericResponse = {
    error?: string
}
type GenericItemResponse<ExpandedSchema> = TResponse & ExpandedSchema
type GenericListResponse<ExpandedSchema> = {
    meta: {
        total_count: number
    }
    items: GenericItemResponse<ExpandedSchema>[]
}

type GenericResponseValues<T> =
    GenericItemResponse<T>[keyof GenericItemResponse<T>]

export class Model<T> {
    readonly ctx: Context
    readonly kind: string
    private readonly hook: Hook<
        GenericResponseValues<T>,
        keyof GenericItemResponse<T>
    >
    constructor(
        kind: `${string}.${string}`,
        ctx: Context,
        hook: Hook<GenericResponseValues<T>, keyof GenericItemResponse<T>> = [],
    ) {
        this.ctx = ctx
        this.kind = kind
        this.hook = hook
    }

    requestBuilder(
        ctx: Context,
        options: GenericParameter,
        id?: number,
    ): Request {
        const params = new URLSearchParams(
            Object.assign(
                {
                    type: this.kind,
                    format: "json",
                },
                Object.keys(options).reduce(
                    (p, k) =>
                        Object.assign({}, p, {
                            [k]: options[k].toString(),
                        }),
                    {},
                ),
            ),
        )
        const url = new URL(ctx.host)
        url.pathname = `/api/v2/pages${(id && `/${id}`) || ""}`
        url.search = params.toString()

        const request = new Request(url)
        return request
    }

    private async fetch<T>(
        ctx: Context,
        options: GenericParameter,
        id?: number,
        init?: RequestInit,
    ) {
        return await new Promise<GenericResponse & T>((ok, err) =>
            fetch(
                this.requestBuilder(ctx, options, id),
                Object.assign(
                    {
                        headers: {
                            "User-Agent": "BoilerplateClient",
                        },
                    } as RequestInit,
                    init,
                ),
            )
                .then((ok) => ok.json())
                .then((j: GenericResponse) => {
                    if (j.error) {
                        err(new Error(`WagtailQueryError: ${j.error}`))
                        return
                    }
                    // @ts-ignore
                    ok(j)
                }),
        )
    }

    private hookTransform() {
        // const y = { ...r }

        // for (const h of this.hook) {
        //     for (const f of h.fields) {
        //         // @ts-ignore
        //         y[f] = h.transform.from(r[f])
        //     }
        // }

        // return y
        if (!this) {
            throw "WagtailClient: this Model is undefined?"
        }
        return (r: GenericItemResponse<T>) =>
            this.hook.reduce(
                (x, h) =>
                    Object.assign(
                        x,
                        h.fields.map((f) => ({
                            // @ts-ignore
                            [f]: h.transform.from(r[f]),
                        })),
                    ),
                r as GenericItemResponse<T>,
            )
    }

    /**
     * @description to return many stuff, ofc
     */
    async query(
        ctx: Context,
        options: GenericParameter,
        init?: RequestInit,
    ): Promise<GenericResponse & GenericListResponse<T>> {
        const query = this.fetch<GenericListResponse<T>>(
            ctx,
            options,
            undefined,
            init,
        )
        if (this.hook.length === 0) return query
        return query.then((r) => ({
            ...r,
            items: r.items.map(this.hookTransform()),
        }))
    }

    /**
     * @description to return one stuff
     */
    async queryOne(
        ctx: Context,
        options: GenericParameter & {
            /**
             * @deprecated Everything by default
             */
            fields?: string
        },
        id: number,
        init?: RequestInit,
    ): Promise<GenericResponse & GenericItemResponse<T>> {
        const query = this.fetch<GenericItemResponse<T>>(ctx, options, id, init)
        if (this.hook.length === 0) return query
        return query.then((r) => this.hookTransform()(r))
    }
}

import * as Models from "./models"
import type { SerdeTrait } from "./serde"
export { Models }

import { GenericParameter, TResponse } from './types/wagtail'

const LANGUAGES = ['vi', 'en'] as const

type OrdinalType = boolean | string | number
type SerializableType = Date | URL | OrdinalType
type GenericType = SerializableType | Record<string, SerializableType>

export type ModelData<T extends string[]> = Record<T[number], GenericType>

/**
 * @description query options
 */
export interface Context {
    host: string
    lang: (typeof LANGUAGES)[number]
}

export type Hook<T> = { transform: SerdeTrait<any, string>; fields: T[] }[]

export class Model<T> {
    readonly ctx: Context
    readonly kind: string
    private readonly hook: Hook<keyof T>
    constructor(
        kind: `${string}.${string}`,
        ctx: Context,
        hook: Hook<keyof T> = []
    ) {
        this.ctx = ctx
        this.kind = kind
        this.hook = hook
    }

    requestBuilder(options: GenericParameter, id?: number): Request {
        const params = new URLSearchParams(
            Object.assign(
                {
                    type: this.kind,
                    format: 'json',
                },
                Object.keys(options).reduce(
                    (p, k) =>
                        Object.assign({}, p, {
                            [k]: options[k].toString(),
                        }),
                    {}
                )
            )
        )
        const url = new URL(this.ctx.host)
        url.pathname = '/api/v2/pages' + ((id && '/' + id) || '')
        url.search = params.toString()

        const request = new Request(url)
        return request
    }

    /**
     * @description to return stuff, ofc
     */
    async query(options: GenericParameter, id?: number, init?: RequestInit) {
        return fetch(this.requestBuilder(options, id), Object.assign({}, init))
            .then(
                (ok) =>
                    ok.json() as Promise<{
                        meta: {
                            total_count: Number
                        }
                        items: (TResponse & T)[]
                    }>
            )
            .then((ok) => {
                this.hook.map((hook) => {
                    hook.fields.map(
                        (field) =>
                            // @ts-ignore
                            (ok[field] = hook.transform.from(ok[field]))
                    )
                    return ok
                })
            })
    }
}

import * as Models from './models'
import { SerdeTrait } from './serde'
export { Models }

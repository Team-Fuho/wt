const LANGUAGES = ["vi", "en"] as const

type OrdinalType = boolean | string | number
type SerializableType = Date | URL | OrdinalType
type GenericType = SerializableType | Record<string, SerializableType>

export type ModelData<T extends string[]> = Record<T[number], GenericType>

/**
 * @description query options
 */
export class Context {
    host: string
    lang: (typeof LANGUAGES)[number] = "vi"
}

type GenericQueryOptions = {
    offset?: number
    limit?: number
    search?: string
    search_operator?: "and" | "or"
    locale?: Context["lang"]
    slug?: string
}

type ManualQueryOptions<
    T extends string,
    U extends Record<T, Record<string, string>>,
> = {
    fields?: (T | `${T}(${U[T][string]})`)[]
}

type QueryOptions<
    K extends string,
    U extends Record<K, Record<string, string>>,
> = GenericQueryOptions & ManualQueryOptions<K, U>

export class Model<K extends string[], T extends ModelData<K>> {
    readonly ctx: Context
    readonly kind: string
    constructor(ctx: Context, kind: `${string}.${string}`) {
        this.ctx = ctx
        this.kind = kind
    }

    requestBuilder(options: QueryOptions<K[number], T>): URL {
        const params = new URLSearchParams(
            Object.assign(
                {},
                {
                    type: this.kind,
                    ...Object.keys(options).reduce(
                        (p, k) =>
                            Object.assign({}, p, {
                                [k]:
                                    k === "fields"
                                        ? options.fields.join(",")
                                        : options[k].toString(),
                            }),
                        {},
                    ),
                },
            ),
        )
        const url = new URL(this.ctx.host)
        url.pathname = "/api/v2/pages"
        url.search = params.toString()
        return url
    }

    async query(options: QueryOptions<K[number], T>): Promise<T[]> {
        return fetch(this.requestBuilder(options)).then((ok) => ok.json())
    }
}

import { BlogPage } from "./models.legacy"
export { BlogPage }

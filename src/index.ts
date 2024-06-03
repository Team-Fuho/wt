import { GenericParameter, TResponse } from "./types/wagtail";

const LANGUAGES = ["vi", "en"] as const;

type OrdinalType = boolean | string | number
type SerializableType = Date | URL | OrdinalType
type GenericType = SerializableType | Record<string, SerializableType>

export type ModelData<T extends string[]> = Record<
    T[number],
    GenericType
>;

/**
 * @description query options
 */
export interface Context {
    host: string;
    lang: (typeof LANGUAGES)[number];
}

export class Model<T> {
    readonly ctx: Context;
    readonly kind: string;
    constructor(kind: `${string}.${string}`, ctx: Context) {
        this.ctx = ctx;
        this.kind = kind;
    }

    requestBuilder(options: GenericParameter, id?: number): Request {
        const params = new URLSearchParams(
            Object.assign(
                {},
                {
                    type: this.kind,
                    ...Object.keys(options).reduce(
                        (p, k) =>
                            Object.assign({}, p, {
                                [k]: options[k].toString(),
                            }),
                        {},
                    ),
                },
            ),
        );
        const url = new URL(this.ctx.host);
        url.pathname = "/api/v2/pages" + ((id && "/" + id) || "");
        url.search = params.toString();

        const request = new Request(url)
        return request;
    }

    /**
     * @todo generic return type
     */
    async query(options: GenericParameter, id?: number): Promise<(TResponse & T)[]> {
        return fetch(this.requestBuilder(options, id)).then((ok) => ok.json());
    }
}

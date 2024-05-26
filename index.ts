const LANGUAGES = ["vi", "en"] as const;

export type ModelData<T extends string[]> = Record<
	T[number],
	boolean | string | number | Date
>;

/**
 * @description query options
 */
export class Context {
	host: string;
	lang: (typeof LANGUAGES)[number] = "vi";
}

type GenericQueryOptions = {
	offset?: number;
	limit?: number;
	search?: string;
	search_operator?: "and" | "or";
	locale?: Context["lang"];
	slug?: string;
};

type ManualQueryOptions<T extends string[]> = {
	fields?: (T[number] | `${T[number]}(${string})`)[];
};

type QueryOptions<K extends string[]> = GenericQueryOptions &
	ManualQueryOptions<K>;

export class Model<K extends string[], T extends ModelData<K>> {
	readonly ctx: Context;
	readonly kind: string;
	constructor(ctx: Context, kind: `${string}.${string}`) {
		this.ctx = ctx;
		this.kind = kind;
	}

	requestBuilder(options: QueryOptions<K>): URL {
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
		);
		const url = new URL(this.ctx.host);
		url.pathname = "/api/v2/pages";
		url.search = params.toString();
		return url;
	}

	async query(options: QueryOptions<K>): Promise<T[]> {
		return fetch(this.requestBuilder(options)).then((ok) => ok.json());
	}
}

import { TObject, TNumber, TString, TUnwrapper, TArray } from "./tschema";

export function GenericWagtailParameter<F extends TArray<TString>>(fields: F) {
    return new TObject({
        offset: new TNumber(),
        limit: new TNumber(),
        search: new TString(),
        search_operator: new TString(),
        locale: new TString(),
        slug: new TString(),
        fields
    })
}

type TGenericWagtailParameter<T extends TArray<TString>> = TUnwrapper<ReturnType<typeof GenericWagtailParameter<T>>>

export class Configuration {
    host = "http://127.0.0.1:8080"
}

export class BaseModel<S extends TArray<TString>> {
    schema: S
    config: Configuration
    constructor(schema: S, config: Configuration) {
        this.schema = schema
        this.config = config
    }
}

export class ModelQuery<T extends TArray<TString>> {
    model: BaseModel<T>
    locale: ["vi", 'en'][number]
    private readonly cachedType: TGenericWagtailParameter<ModelQuery<T>['model']['schema']>
    constructor(model: BaseModel<T>, locale: ModelQuery<T>['locale'] = 'vi') {
        this.model = model
        this.locale = locale
    }

    private flattenStupidType(obj: ModelQuery<T>['cachedType']): Record<string, string> {
        const result: Record<string, string> = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                // @ts-ignore: L
                result[key] = typeof obj[key] === 'string' ? obj[key] : String(obj[key]);
            }
        }
        return result;
    }

    constructURL(params: ModelQuery<T>['cachedType']): URL {
        const url = new URL(this.model.config.host)
        url.pathname = "/api/v2/pages?" + new URLSearchParams(this.flattenStupidType(params))
        return url
    }
}


// export type DefaultWagtailParameterType<F extends TObject<Record<string, TString>>> = TUnwrapper<ReturnType<typeof GenericWagtailParameter<F>>>
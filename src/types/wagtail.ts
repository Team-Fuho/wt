import type { Context } from ".."

export type GenericParameter = {
    offset?: number
    limit?: number
    search?: string
    search_operator?: "and" | "or"
    locale?: Context["lang"]
    slug?: string
    fields?: string
}

export type GenericResponse = {
    id: number
    meta: {
        type: string
        detail_url: string
        html_url: string
        slug: string
        first_published_at: Date | null
        locale: Context["lang"]
    }
    title: string
}

export type GenericResponseExtended = {
    meta?: {
        seo_title: string
        search_description: string
        alias_of: string | null
        parent: GenericResponse
    }
}

export type TResponse = GenericResponse & GenericResponseExtended

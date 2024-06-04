import { Context, Model } from ".";

export function BlogPage(ctx: Context) {
    return new Model<{
        intro: string,
        body: string,
        thumbnail_set: Record<string, string>
    }>("blog.BlogPage", ctx)
}

export function GalleryPicture(ctx: Context) {
    return new Model<{
        cap: string,
        image: string
    }>("gallery.Picture", ctx)
}
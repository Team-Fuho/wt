import { type Context, Model } from "."
import { DateSerde as DateSerdeBase } from "./serde"

export class DateSerde extends DateSerdeBase {
    constructor() {
        super((d) =>
            d.toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }),
        )
    }
}

type RenditionMeta = {
    url: string
    res: [number, number]
}

type RenditionSet = {
    "default/full": RenditionMeta
    [k: `${string}/${string}` | string]: RenditionMeta | undefined
}

export function BlogPage(ctx: Context) {
    return new Model<{
        intro: string
        body: string
        blog_date: Date
        thumbnail_set: RenditionSet
    }>("blog.BlogPage", ctx, [
        {
            transform: new DateSerde(),
            fields: ["blog_date"],
        },
    ])
}

export function GalleryPicture(ctx: Context) {
    return new Model<{
        cap: string
        image: string
        image_date: Date
        image_set: RenditionSet
    }>("gallery.Picture", ctx, [
        {
            transform: new DateSerde(),
            fields: ["image_date"],
        },
    ])
}

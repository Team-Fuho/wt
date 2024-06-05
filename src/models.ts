import { Context, Model } from ".";
import { DateSerde as DateSerdeBase } from "./serde";

export class DateSerde extends DateSerdeBase {
    constructor() {
        super((d) => d.toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }))
    }
}

export function BlogPage(ctx: Context) {
    return new Model<{
        intro: string,
        body: string,
        blog_date: Date,
        thumbnail_set: Record<string, string>
    }>("blog.BlogPage", ctx, [{
        transform: new DateSerde(),
        fields: ["blog_date"]
    }])
}

export function GalleryPicture(ctx: Context) {
    return new Model<{
        cap: string,
        image: string,
        image_date: Date,
        image_set: Record<string, string>
    }>("gallery.Picture", ctx, [{
        transform: new DateSerde(),
        fields: ["image_date"]
    }])
}
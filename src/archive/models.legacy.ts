import { Model, Context } from "./index.legacy";

const blogPageFields = ["intro", "body", "thumbnail_set"];

export const BlogPage = (ctx: Context) =>
	new Model<
		typeof blogPageFields,
		{
			intro: string;
			body: string;
			thumbnail_set: Record<(`featured/${"large" | "medium"}`) | (`media/${"facebook" | "x"}`), string>
		}
	>(ctx, "blog.BlogPage");

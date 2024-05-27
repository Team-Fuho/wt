import { Model, Context } from "..";

const blogPageFields = ["date", "thumb", "intro", "body"];

export const BlogPage = (ctx: Context) =>
	new Model<
		typeof blogPageFields,
		{
			date: Date;
			thumb: string;
			intro: string;
			body: string;
		}
	>(ctx, "blog.BlogPage");

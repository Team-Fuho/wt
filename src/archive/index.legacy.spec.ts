// Test suite
import { expect, test } from "vitest";

// Test data
import { Context, Model } from "./index.legacy";
// Default model
import { BlogPage } from "./index.legacy";

const PoorlyConstructedContext = class Ctx extends Context {
	host = "http://localhost";
	lang = "vi" as const;
}

test("model query built expected request", () =>
	expect(
		new Model<
			["ksm"],
			{
				ksm: string;
			}
		>(
			new PoorlyConstructedContext(),
			"test.Kasumi",
		)
			.requestBuilder({
				limit: 1,
			})
			.toString(),
	).toBe(
		`http://localhost/api/v2/pages?${new URLSearchParams({
			type: "test.Kasumi",
			limit: "1",
		}).toString()}`,
	));

test("core model (BlogPage) built expected request", () => expect(BlogPage(new PoorlyConstructedContext()).requestBuilder({
	fields: [
		"thumbnail"
	]
})))
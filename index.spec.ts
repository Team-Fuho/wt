// Test suite
import { expect, test } from "vitest";

// Test data
import { Context, Model } from "./";

test("model query built expected reqeust", () =>
	expect(
		new Model<
			["ksm"],
			{
				ksm: string;
			}
		>(
			new (class Ctx extends Context {
				host = "http://localhost";
				lang = "vi" as const;
			})(),
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

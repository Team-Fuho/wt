// Test suite
import { expect, test } from "vitest";

// Test data
import { Model } from "."

function ConstructModel() {
    return new Model<{
        thumbnail_set?: Record<string, string>
    }>("blog.BlogPage", {
        host: "http://localhost:8000",
        lang: "vi"
    })
}

// aint this straight out stupid?
test("URL Deserialization", () => expect(ConstructModel().requestBuilder({
    offset: 1,
    limit: 1,
}).url).eq("http://localhost:8000/api/v2/pages?type=blog.BlogPage&format=json&offset=1&limit=1"))
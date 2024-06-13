// Test suite
import { expect, test } from "vitest"

// Test data
import { URLSerde } from "./serde"

// aint this straight out stupid?
test("URL Deserialization", () =>
    expect(new URLSerde().from("https://727.gg/api/wysi").toString()).eq(
        "https://727.gg/api/wysi",
    ))

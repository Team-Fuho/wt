// Test suite
import { expect, test } from "vitest";

// Test data
import { BaseModel, Configuration, GenericWagtailParameter, ModelQuery } from "./cms.legacy"
import { TArray, TObject, TString } from "./tschema";

// aint this straight out stupid? (2)

test("Construct schema???", () => expect(GenericWagtailParameter(new TArray(new TString()))))

test("Construct url???", () => expect(new ModelQuery(new BaseModel(new TArray(new TString()), new (class Config extends Configuration {
    host = "http://0.0.0.0"
})())).constructURL({
    // limit: ""
})))

// test("Construct model", () => expect(new ModelQuery(new BaseModel)))

import { describe, expect, it } from "vitest";
import { parse } from "../parse";
describe("parse", () => {
  it("parse deme", () => {
    let s = "()";
    expect(parse(s)).toBe(true);
    s = "()[]{}";
    expect(parse(s)).toBe(true);
    s = "(]";
    expect(parse(s)).toBe(false);
  });
});

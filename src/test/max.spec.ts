import { describe, expect, it } from "vitest";
import { getMax } from "../maxStr";
describe("max", () => {
  it("init", () => {
    let str = "abcabcbb";
    expect(getMax(str)).toBe(3);
    str = "bbbbb";
    expect(getMax(str)).toBe(1);

    str = "pwwkew";
    expect(getMax(str)).toBe(3);
    str = "";
    expect(getMax(str)).toBe(0);
  });
});

import { describe, expect, it } from "bun:test";
import { extractHostname } from "./util";

describe("extractHostname", () => {
  it.each([
    ["https://example.com", "example.com"],
    ["http://example.com", "example.com"],

    ["https://example.com/hoge", "example.com"],
    ["http://example.com/hoge", "example.com"],

    ["https://example.com/hoge/fuga", "example.com"],
    ["http://example.com/hoge/fuga", "example.com"],
  ])("extractHostname(%j) should return %j", (url, expected) => {
    expect(extractHostname(url)).toBe(expected);
  });
});

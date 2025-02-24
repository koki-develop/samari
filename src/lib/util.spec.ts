import { describe, expect, it } from "bun:test";
import { clsx, extractHostname } from "./util";

describe("clsx", () => {
  it.each([
    [["foo", "bar", "baz"], "foo bar baz"],
    [["foo", true && "bar", "baz"], "foo bar baz"],
    [["foo", false && "bar", "baz"], "foo baz"],
  ])("clsx(%j) should return %j", (classes, expected) => {
    expect(clsx(...classes)).toBe(expected);
  });
});

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

import { describe, expect, it } from "bun:test";
import { clsx, extractHostname, groupBy } from "./util";

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

describe("groupBy", () => {
  it("should group by the key", () => {
    const data = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "John" },
      { id: 4, name: "Jane" },
    ];

    const grouped = groupBy(data, (item) => item.name);
    expect(grouped).toEqual({
      John: [
        { id: 1, name: "John" },
        { id: 3, name: "John" },
      ],
      Jane: [
        { id: 2, name: "Jane" },
        { id: 4, name: "Jane" },
      ],
    });
  });
});

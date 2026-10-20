import { describe, it, expect } from "vitest";
import { interpret } from "./interpret";
import { getChapterByTheme } from "./chapters";

describe("getChapterByTheme", () => {
  it("每个主题都有对应章节", () => {
    const chapter = getChapterByTheme("contention");
    expect(chapter).toBeDefined();
    expect(chapter!.chapter).toBeGreaterThan(0);
    expect(chapter!.text.length).toBeGreaterThan(0);
    expect(chapter!.translation.length).toBeGreaterThan(0);
    expect(chapter!.keywords.length).toBeGreaterThan(0);
  });
});

describe("interpret", () => {
  const result = interpret("同事抢了我的功劳，我很生气");

  it("共情开头：复述用户处境", () => {
    expect(result.empathy.length).toBeGreaterThan(10);
  });

  it("引用原文且是道德经章节", () => {
    expect(result.quote.text).toContain("莫能与之争");
    expect(result.quote.chapter).toBe(22);
  });

  it("给出白话解释", () => {
    expect(result.paraphrase).toContain("争");
  });

  it("给出重新看待问题的视角", () => {
    expect(result.perspective.length).toBeGreaterThan(20);
  });

  it("给出可落地的放下建议", () => {
    expect(result.practice.length).toBeGreaterThan(5);
  });

  it("对任意输入都不抛异常", () => {
    expect(() => interpret("")).not.toThrow();
    expect(() => interpret("哈哈")).not.toThrow();
  });
});

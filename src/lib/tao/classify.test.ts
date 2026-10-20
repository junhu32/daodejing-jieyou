import { describe, it, expect } from "vitest";
import { classifyProblem, THEMES } from "./classify";

describe("classifyProblem", () => {
  it("识别『争/得失』类问题", () => {
    expect(classifyProblem("同事抢了我的功劳，我很生气")).toBe("contention");
    expect(classifyProblem("凭什么升职的是他不是我")).toBe("contention");
  });

  it("识别『焦虑/功名』类问题", () => {
    expect(classifyProblem("快三十了还一事无成，每天很焦虑")).toBe("anxiety");
    expect(classifyProblem("孩子成绩不好，我愁得睡不着觉")).toBe("anxiety");
  });

  it("识别『欲望/不知足』类问题", () => {
    expect(classifyProblem("别人都有房有车，就我没有，心里不平衡")).toBe("desire");
  });

  it("识别『挫败/柔弱』类问题", () => {
    expect(classifyProblem("努力了那么久还是失败了，觉得自己太软弱")).toBe("softness");
    expect(classifyProblem("被裁员了，感觉天塌了")).toBe("softness");
  });

  it("识别『祸福/变故』类问题", () => {
    expect(classifyProblem("公司倒闭了，这是好事还是坏事")).toBe("fortune");
    expect(classifyProblem("失恋了，感觉失去了全世界")).toBe("fortune");
  });

  it("无法识别时回落到默认主题", () => {
    expect(classifyProblem("今天天气不错")).toBeDefined();
    expect(THEMES.map((t) => t.id)).toContain(classifyProblem("今天天气不错"));
  });
});

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

  it("识别『孤独疏离』类问题", () => {
    expect(classifyProblem("搬到新城市后总觉得格格不入，没人懂我在想什么")).toBe("loneliness");
    expect(classifyProblem("一个人吃饭一个人睡觉，感觉自己没有归属感")).toBe("loneliness");
  });

  it("识别『怨恨难平』类问题", () => {
    expect(classifyProblem("虽然嘴上说没事了，但心里一直耿耿于怀，想不通")).toBe("resentment");
    expect(classifyProblem("这件事已经过去很久了，可我还是咽不下这口气")).toBe("resentment");
  });

  it("识别『自我怀疑/怕不完美』类问题", () => {
    expect(classifyProblem("这次项目做得不够好，我怕被发现自己其实不行")).toBe("imperfection");
    expect(classifyProblem("总觉得自己配不上现在的位置，像个冒充者")).toBe("imperfection");
  });

  it("识别『透支硬撑』类问题", () => {
    expect(classifyProblem("最近一直在加班，身体已经吃不消了但还在硬撑")).toBe("overwork");
    expect(classifyProblem("连续熬了好几个通宵，感觉自己在透支健康")).toBe("overwork");
  });

  it("无法识别时回落到默认主题", () => {
    expect(classifyProblem("今天天气不错")).toBeDefined();
    expect(THEMES.map((t) => t.id)).toContain(classifyProblem("今天天气不错"));
  });
});

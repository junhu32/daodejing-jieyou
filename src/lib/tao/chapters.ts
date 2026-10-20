export interface Chapter {
  chapter: number;
  title: string;
  text: string;
  translation: string;
  keywords: string[];
}

/** 道德经思想库：每个主题对应一章（节选），含触发关键词 */
export const CHAPTERS: Record<string, Chapter> = {
  contention: {
    chapter: 22,
    title: "夫唯不争",
    text: "夫唯不争，故天下莫能与之争。",
    translation:
      "正因为不与人争，所以天下没有人能与他争。",
    keywords: ["抢", "争", "功劳", "凭什么", "凭什么他", "不公平", "竞争", "算计", "排挤"],
  },
  anxiety: {
    chapter: 16,
    title: "致虚守静",
    text: "致虚极，守静笃。万物并作，吾以观复。",
    translation:
      "让内心达到极度的虚静，坚守深沉的宁静。万物纷繁生长，我可以观察它们循环往复的规律。",
    keywords: ["焦虑", "睡不着", "愁", "压力大", "紧张", "烦躁", "静不下心", "慌"],
  },
  desire: {
    chapter: 44,
    title: "知足知止",
    text: "知足不辱，知止不殆，可以长久。",
    translation:
      "知道满足就不会受屈辱，知道适可而止就不会遇危险，这样才可以长久。",
    keywords: ["羡慕", "别人都有", "想要", "得不到", "攀比", "买不起", "不甘心", "心里不平衡"],
  },
  softness: {
    chapter: 78,
    title: "柔弱胜刚强",
    text: "天下莫柔弱于水，而攻坚强者莫之能胜。",
    translation:
      "天下没有比水更柔弱的东西，但攻克坚强之物的却没有能胜过它的。",
    keywords: ["失败", "软弱", "裁员", "失业", "撑不住", "扛不住", "被打败", "认输", "无力"],
  },
  fortune: {
    chapter: 58,
    title: "祸福相倚",
    text: "祸兮福之所倚，福兮祸之所伏。",
    translation:
      "灾祸啊，幸福倚靠在它旁边；幸福啊，灾祸埋伏在它之中。",
    keywords: ["失恋", "分手", "离婚", "倒闭", "破财", "变故", "裁员", "失去", "完了", "绝望"],
  },
  control: {
    chapter: 29,
    title: "为者败之",
    text: "为者败之，执者失之。是以圣人无为，故无败；无执，故无失。",
    translation:
      "强行干预就会失败，死死抓握就会失去。所以圣人不妄为，就不会失败；不执着，就不会失去。",
    keywords: ["控制", "管不住", "停不下来", "逼", "强求", "放不下", "执念", "必须"],
  },
  comparison: {
    chapter: 2,
    title: "天下皆知美",
    text: "天下皆知美之为美，斯恶已；皆知善之为善，斯不善已。",
    translation:
      "天下人都知道什么是美，丑的观念也就产生了；都知道什么是善，不善的观念也就产生了。美丑善恶，都是相对而言。",
    keywords: ["自卑", "不如别人", "看不起", "评价", "丢脸", "丢人", "比不上"],
  },
};

export const DEFAULT_THEME = "anxiety";

export function getChapterByTheme(theme: string): Chapter | undefined {
  return CHAPTERS[theme] ?? CHAPTERS[DEFAULT_THEME];
}

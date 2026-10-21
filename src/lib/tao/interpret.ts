import { classifyProblem } from "./classify";
import { getChapterByTheme, type Chapter } from "./chapters";

export interface Interpretation {
  theme: string;
  quote: { chapter: number; title: string; text: string };
  empathy: string;
  paraphrase: string;
  perspective: string;
  practice: string;
}

/** 按主题生成「重新看待」的视角与「放下」练习 */
const PERSPECTIVES: Record<string, { perspective: string; practice: string }> = {
  contention: {
    perspective:
      "你所以痛苦，是因为把『名』与『利』当作了自己。功劳被抢，失去的是别人眼中的标签，不是你做事的分毫。争的人要一直赢才安心，不争的人已经站在输赢之外——他不是输了，是不再需要那个裁判。",
    practice: "今天起，做一件事不问『这算谁的』，只问『这事值不值得做』。",
  },
  anxiety: {
    perspective:
      "焦虑来自心被未来占满了。把心里的杯子倒空一些，事情并不会因此变坏，反而看得更清：让你慌的那个结果，多数还没发生，已发生的多数没那么糟。静不是逃避，是让万物各归其位。",
    practice: "此刻放下手机，静坐三分钟，只数自己的呼吸，什么都不解决。",
  },
  desire: {
    perspective:
      "你以为缺的是房子、车子，其实缺的是『够』的标准。标准在别人手里，你永远缺；标准回到自己手里，此刻你已经拥有得比需要的多。知足不是认命，是不再把快乐抵押给未得到的东西。",
    practice: "今晚写下三件你已经拥有、却很久没正眼看过的东西。",
  },
  softness: {
    perspective:
      "水最柔弱，却穿石、载舟、灭火。你此刻的『撑不住』，不是终点，是正在变成水的过程。刚强的东西先折断，柔韧的东西留在最后。允许自己暂时低下去，低处才有汇聚成河的可能。",
    practice: "允许自己今天只做一件事，做完就休息，不为『还应该』自责。",
  },
  fortune: {
    perspective:
      "此刻你叫它灾祸，是因为只看到了眼前这一段。福与祸像同一条绳的两股，绞在一起向前。失去了一个依靠，也卸下了一个枷锁——只是绳结还没走到让你看见的那一面。",
    practice: "写下这件『坏事』里，一件你因此不用再做、或因此学会的事。",
  },
  control: {
    perspective:
      "越用力抓，沙子漏得越快。你能控制的，从来只有自己的态度和手里的这一下；结果属于风。把『必须如此』换成『尽力就好』，不是不努力，是把力气用在对的地方。",
    practice: "挑一件你正在死磕的事，今天故意只做七分力，观察天会不会塌。",
  },
  comparison: {
    perspective:
      "美与丑、成与败，都是比较出来的影子。总有人在你前面，也总有人在你后面。你不是不够好，是站错了尺子。把尺子换成昨天的自己，路立刻就宽了。",
    practice: "今天不评价任何一个人，包括你自己。",
  },
  loneliness: {
    perspective:
      "众人熙熙往前凑，是因为他们还需要那场热闹来确认自己存在。你独自淡泊，不是被落下了，是已经不必靠别人的目光才能站稳。像婴儿一样未孩，不是幼稚，是还没被人群的标准驯化。",
    practice: "今天花十分钟做一件只有你自己知道、不需要任何人认可的小事。",
  },
  resentment: {
    perspective:
      "你以为把怨恨想通、原谅了，它就该消失，可老子早说了：和解之后，余怨仍在，这很正常。不必逼自己立刻『放下』，余怨本身不是失败，是伤口还在长肉的证据。",
    practice: "写下这件事里让你最咽不下的那一句话，写完就折起来，不用现在就原谅。",
  },
  imperfection: {
    perspective:
      "大成若缺——真正圆满的东西，看起来都带着点缺口，因为它还在被使用、还在流动，没有被供起来定格成标本。你此刻觉得自己有缺陷，可能恰恰是你还活着、还在起作用的样子。",
    practice: "今天故意留一件事只做到八成，看看天会不会塌，顺手记下结果。",
  },
  overwork: {
    perspective:
      "端着满满一杯水往前走，迟早要洒。你此刻的硬撑，不是意志力不够，是容器已经盈了。停下不是放弃，是让自己能再装下一轮。磨得太尖的刀最先卷刃，钝一点的反而用得久。",
    practice: "今天提早十五分钟结束手上的事，把这段时间完整地还给休息，不留愧疚。",
  },
};

export function interpret(input: string): Interpretation {
  const theme = classifyProblem(input);
  const chapter = getChapterByTheme(theme)!;
  const extra = PERSPECTIVES[theme] ?? PERSPECTIVES.anxiety;
  const brief = input.trim().slice(0, 40);

  return {
    theme,
    quote: {
      chapter: chapter.chapter,
      title: chapter.title,
      text: chapter.text,
    },
    empathy: `你说：「${brief}${input.trim().length > 40 ? "……" : ""}」。这份感受是真的，先不必急着推开它。`,
    paraphrase: `《道德经》第 ${chapter.chapter} 章说：「${chapter.text}」——${chapter.translation}`,
    perspective: extra.perspective,
    practice: extra.practice,
  };
}

export type { Chapter };

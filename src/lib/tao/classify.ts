import { CHAPTERS, DEFAULT_THEME } from "./chapters";

export interface Theme {
  id: string;
  label: string;
}

export const THEMES: Theme[] = [
  { id: "contention", label: "争与得失" },
  { id: "anxiety", label: "焦虑不安" },
  { id: "desire", label: "欲望不满" },
  { id: "softness", label: "挫败软弱" },
  { id: "fortune", label: "祸福变故" },
  { id: "control", label: "执着强求" },
  { id: "comparison", label: "比较自卑" },
];

/** 关键词打分分类：命中最多的主题胜出，平局时先定义者优先 */
export function classifyProblem(input: string): string {
  const text = input.trim();
  if (!text) return DEFAULT_THEME;

  let best = DEFAULT_THEME;
  let bestScore = 0;

  for (const [theme, chapter] of Object.entries(CHAPTERS)) {
    let score = 0;
    for (const kw of chapter.keywords) {
      if (text.includes(kw)) score += kw.length >= 2 ? 2 : 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = theme;
    }
  }
  return best;
}

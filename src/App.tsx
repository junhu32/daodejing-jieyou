import { useState } from "react";
import { interpret, type Interpretation } from "@/lib/tao/interpret";
import { THEMES } from "@/lib/tao/classify";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<Interpretation | null>(null);

  const submit = () => {
    if (!input.trim()) return;
    setResult(interpret(input));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const themeLabel = THEMES.find((t) => t.id === result?.theme)?.label;

  return (
    <div className="min-h-100dvh bg-[#f5f0e4] text-[#1c1a17] font-serif">
      <main className="mx-auto max-w-md px-6 py-10">
        {/* 标题 */}
        <header className="mb-10 text-center">
          <p className="mb-3 text-xs tracking-[0.5em] text-[#8a8375]">道 德 经 · 解 忧</p>
          <h1 className="text-3xl font-bold tracking-wide">把烦恼说给「道」听</h1>
          <div className="mx-auto mt-4 h-px w-16 bg-[#9b3f23]" />
          <p className="mt-4 text-sm leading-relaxed text-[#6b6455]">
            写下一件困扰你的事，<br />用两千五百年的智慧，重新看它一眼。
          </p>
        </header>

        {/* 输入 */}
        <section>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={4}
            placeholder="例如：同事抢了我的功劳，我很生气……"
            className="w-full resize-none rounded-md border border-[#d8d0bd] bg-[#fbf8ef] p-4 text-base leading-relaxed placeholder:text-[#b0a890] focus:border-[#9b3f23] focus:outline-none"
          />
          <button
            onClick={submit}
            disabled={!input.trim()}
            className="mt-4 w-full rounded-md bg-[#1c1a17] py-3.5 text-base tracking-[0.3em] text-[#f5f0e4] transition-opacity hover:opacity-85 disabled:opacity-30"
          >
            求 解
          </button>
        </section>

        {/* 解读结果 */}
        {result && (
          <section className="mt-12 space-y-8">
            {themeLabel && (
              <p className="text-center text-xs tracking-[0.4em] text-[#8a8375]">
                此 事 关 于 · {themeLabel}
              </p>
            )}

            <blockquote className="border-l-2 border-[#9b3f23] pl-4">
              <p className="text-lg leading-loose">「{result.quote.text}」</p>
              <footer className="mt-2 text-xs text-[#8a8375]">
                ——《道德经》第 {result.quote.chapter} 章 · {result.quote.title}
              </footer>
            </blockquote>

            <div className="space-y-6 text-[15px] leading-[1.9]">
              <p>{result.empathy}</p>
              <p>{result.paraphrase}</p>
              <p className="text-[#3d3a33]">{result.perspective}</p>
            </div>

            <div className="rounded-md bg-[#ede6d2] p-5">
              <p className="mb-2 text-xs tracking-[0.3em] text-[#9b3f23]">今 日 一 试</p>
              <p className="text-[15px] leading-relaxed">{result.practice}</p>
            </div>

            <button
              onClick={() => { setResult(null); setInput(""); }}
              className="w-full rounded-md border border-[#c9c0a8] py-3 text-sm tracking-[0.3em] text-[#6b6455] transition-colors hover:bg-[#ede6d2]"
            >
              再 问 一 件 事
            </button>
          </section>
        )}

        <footer className="mt-16 text-center text-[11px] leading-relaxed text-[#a89f8a]">
          内容为《道德经》思想的启发性解读，不构成心理咨询。
          <br />
          若长期处于痛苦中，请寻求专业心理帮助。
        </footer>
      </main>
    </div>
  );
}

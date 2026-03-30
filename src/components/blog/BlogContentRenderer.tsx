import type { BlogContentBlock } from "@/data/posts";

interface BlogContentRendererProps {
  blocks: BlogContentBlock[];
}

function CheckIcon() {
  return (
    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-unti-blue">
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-none stroke-current stroke-[2.2]">
        <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
      </svg>
    </span>
  );
}

export function BlogContentRenderer({ blocks }: BlogContentRendererProps) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        if (block.type === "heading" && block.level === 2) {
          return (
            <h2 key={`${block.type}-${index}`} className="pt-4 text-3xl font-semibold tracking-tight text-zinc-900">
              {block.content}
            </h2>
          );
        }

        if (block.type === "heading" && block.level === 3) {
          return (
            <h3 key={`${block.type}-${index}`} className="pt-2 text-2xl font-semibold tracking-tight text-zinc-900">
              {block.content}
            </h3>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p key={`${block.type}-${index}`} className="text-[1.05rem] leading-relaxed text-zinc-700 md:text-[1.1rem]">
              {block.content}
            </p>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={`${block.type}-${index}`}
              className="rounded-[28px] border-l-4 border-unti-blue bg-slate-50/70 px-6 py-6"
            >
              <p className="text-xl leading-relaxed text-zinc-800">{block.content}</p>
              {block.caption ? (
                <footer className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
                  {block.caption}
                </footer>
              ) : null}
            </blockquote>
          );
        }

        if (block.type === "checklist") {
          return (
            <ul key={`${block.type}-${index}`} className="space-y-4">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-4 rounded-[24px] border border-zinc-100 bg-white px-5 py-4">
                  <CheckIcon />
                  <span className="text-[1rem] leading-relaxed text-zinc-700">{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        return null;
      })}
    </div>
  );
}

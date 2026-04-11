type CodeBlockProps = {
  code: string;
  language?: string;
  filename?: string;
};

export function CodeBlock({ code, language = "python", filename }: CodeBlockProps) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-code-bg shadow-2xl">
      {/* Window chrome */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        {filename && (
          <span className="text-xs text-white/40 font-mono">{filename}</span>
        )}
        <span className="text-xs text-white/30 font-mono">{language}</span>
      </div>
      {/* Code content */}
      <pre className="p-5 overflow-x-auto">
        <code className="text-sm font-mono leading-relaxed text-white/90">
          {code}
        </code>
      </pre>
    </div>
  );
}

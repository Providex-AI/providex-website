import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-16 grid-pattern">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/blog"
              className="text-white/40 hover:text-white/70 text-sm mb-6 inline-flex items-center gap-1 transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Back to blog
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="brand">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-white/40">
              <span>{post.author}</span>
              <span>&middot;</span>
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <SectionWrapper className="bg-white">
        <article className="max-w-3xl mx-auto prose prose-lg prose-slate prose-headings:font-bold prose-headings:tracking-tight prose-a:text-brand prose-a:no-underline hover:prose-a:underline prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none prose-strong:text-text-primary prose-li:text-text-muted prose-p:text-text-muted prose-p:leading-relaxed">
          {/* Render MDX content as HTML-like paragraphs */}
          {post.content.split("\n\n").map((block, i) => {
            const trimmed = block.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith("## ")) {
              return (
                <h2 key={i} className="text-2xl font-bold text-text-primary mt-12 mb-4">
                  {trimmed.replace("## ", "")}
                </h2>
              );
            }

            if (trimmed.startsWith("### ")) {
              return (
                <h3 key={i} className="text-xl font-bold text-text-primary mt-8 mb-3">
                  {trimmed.replace("### ", "")}
                </h3>
              );
            }

            if (trimmed.startsWith("---")) {
              return <hr key={i} className="my-12 border-border" />;
            }

            if (trimmed.startsWith("- **") || trimmed.startsWith("1. **")) {
              const items = trimmed.split("\n").filter(Boolean);
              const isOrdered = trimmed.startsWith("1.");
              const ListTag = isOrdered ? "ol" : "ul";
              return (
                <ListTag key={i} className={`space-y-2 my-4 ${isOrdered ? "list-decimal" : "list-disc"} pl-6`}>
                  {items.map((item, j) => {
                    const cleaned = item.replace(/^[-\d.]+\s*/, "");
                    return (
                      <li key={j} className="text-text-muted leading-relaxed">
                        <span dangerouslySetInnerHTML={{
                          __html: cleaned
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-primary">$1</strong>')
                            .replace(/\*(.*?)\*/g, "<em>$1</em>")
                            .replace(/`(.*?)`/g, '<code class="bg-surface px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
                        }} />
                      </li>
                    );
                  })}
                </ListTag>
              );
            }

            // Regular paragraph
            return (
              <p
                key={i}
                className="text-text-muted leading-relaxed my-4"
                dangerouslySetInnerHTML={{
                  __html: trimmed
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-primary">$1</strong>')
                    .replace(/\*(.*?)\*/g, "<em>$1</em>")
                    .replace(/`(.*?)`/g, '<code class="bg-surface px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
                    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-brand hover:underline">$1</a>'),
                }}
              />
            );
          })}
        </article>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-16 pt-12 border-t border-border text-center">
          <h3 className="text-xl font-bold mb-3">
            Want to close the accountability gap?
          </h3>
          <p className="text-text-muted mb-6">
            Join our design partner program and get early access to Providex.
          </p>
          <Button href="/design-partners">Get Early Access</Button>
        </div>
      </SectionWrapper>
    </>
  );
}

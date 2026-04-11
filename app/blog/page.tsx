import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI agent governance, compliance, provenance logging, and the accountability gap.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-20 grid-pattern">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="brand" className="mb-4">Blog</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Insights on AI agent governance
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              Thinking about accountability, compliance, and the governance
              infrastructure AI agents need.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <SectionWrapper>
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-text-muted">No posts yet. Check back soon.</p>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <Card className="transition-shadow group-hover:shadow-lg">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold text-text-primary mb-2 group-hover:text-brand transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-text-muted">
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
                </Card>
              </Link>
            ))}
          </div>
        )}
      </SectionWrapper>
    </>
  );
}

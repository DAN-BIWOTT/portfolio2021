import { notFound } from "next/navigation";

import { getBlogArticles } from "@/app/writing/writing-utils";
import { formatDate } from "@/lib/utils";

import CustomMDX from "@/components/custom-mdx";
import { Badge } from "@/components/ui/badge";
import DateComponent from "@/components/ui/date-component";

import "@/app/github-code.css";

export async function generateStaticParams() {
  const articles = getBlogArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: any) {
  const article = getBlogArticles().find(
    (article) => article.slug === params.slug,
  );

  if (!article) return { title: "Dan Kibiwott | Blog" };

  return {
    title: `Dan Kibiwott | Blog - ${article.blogMetadata.title}`,
    description: article.blogMetadata.summary,
  };
}

export default function ArticlePage({ params }: any) {
  const article = getBlogArticles().find(
    (article) => article.slug === params.slug,
  );

  if (!article) {
    notFound();
  }

  return (
    <>
      <div className="p-4 -mx-5 pb-8">
        <div className="prose mb-2 dark:prose-invert">
          <h1>{article.blogMetadata.title}</h1>
        </div>
        <div className="mb-2 flex items-center gap-2">
          <DateComponent date={article.blogMetadata.publishedAt} />
          {article.blogMetadata.published !== "yes" && <Badge>Draft</Badge>}
        </div>

        <article className="prose max-w-none dark:prose-invert">
          <CustomMDX source={article.content} />
        </article>

        {article.blogMetadata.publishedAt !==
          article.blogMetadata.lastModified && (
          <p className="prose mt-2">
            This article was last modified on{" "}
            {formatDate(article.blogMetadata.lastModified)}.
          </p>
        )}
      </div>
    </>
  );
}

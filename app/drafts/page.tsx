import { ArticleLink } from "@/components/article-link";

import { getBlogArticles } from "@/app/writing/writing-utils";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Dan Kibiwott | Blog",
};

export default function WritingDraftsPage() {
  return (
    <div>
      <h1 className="mb-4 mt-3 text-xl font-semibold sm:text-2xl lg:hidden">
        Writing (Drafts)
      </h1>

      <div className="flex flex-col gap-1">
        <DraftArticlesList />
      </div>
    </div>
  );
}

function DraftArticlesList() {
  const allArticles = getBlogArticles();

  return (
    <div className="flex flex-col gap-1">
      {allArticles
        .sort((a, b) => {
          if (
            new Date(a.blogMetadata.publishedAt) >
            new Date(b.blogMetadata.publishedAt)
          ) {
            return -1;
          } else {
            return 1;
          }
        })
        .map((post) =>
          post.blogMetadata.published === "no" ? (
            <ArticleLink
              key={post.slug}
              title={post.blogMetadata.title}
              href={`/writing/${post.slug}`}
              formattedDate={formatDate(post.blogMetadata.publishedAt, false)}
              contentPreview={post.blogMetadata.preview}
              published={post.blogMetadata.published === "no"}
            />
          ) : null,
        )}
    </div>
  );
}

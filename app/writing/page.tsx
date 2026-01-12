import { ArticleLink } from "@/components/article-link";

import { getBlogArticles } from "@/app/writing/writing-utils";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Dan Kibiwott | Blog",
};

export default function WritingPage() {
  return (
    <div>
      <h1 className="mb-4 mt-3 text-xl font-semibold sm:text-2xl lg:hidden">
        Writing
      </h1>

      <div className="flex flex-col gap-1">
        <AllArticlesList />
      </div>
    </div>
  );
}

function AllArticlesList() {
  const allArticles = getBlogArticles();

  return (
    <div className="flex flex-col gap-1">
    <ArticleLink
        title="Machine Learning for Imaging"
        href="https://dan-biwott.github.io/pages/ML-imaging.html"
        formattedDate={"2023 - 2024"}
        contentPreview={
          "An evaluation of classical machine learning, feature extraction, and deep learning methods for binary image classification (Raccoon vs Rifle) using a curated OpenImages dataset."
        }
        published={true}
        targetBlank
      />
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
          post.blogMetadata.published === "yes" ? (
            <ArticleLink
              key={post.slug}
              title={post.blogMetadata.title}
              href={`/writing/${post.slug}`}
              formattedDate={formatDate(post.blogMetadata.publishedAt, false)}
              contentPreview={post.blogMetadata.preview}
              published={post.blogMetadata.published === "yes"}
            />
          ) : null,
        )}
    </div>
  );
}

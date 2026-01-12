import fs from "fs";
import path from "path";

type BlogMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  preview: string;
  published: string;
  lastModified: string;
  featured: string;
  image?: string;
};

function parseFrontMatter(rawFileContent: string) {
  const frontMatterRegex = /---\s*([\s\S]*?)\s*---/;

  const frontMatterMatchFound = frontMatterRegex.exec(rawFileContent);
  if (!frontMatterMatchFound) {
    // If no front matter, treat whole file as content
    return { content: rawFileContent.trim(), blogMetadata: {} as BlogMetadata };
  }

  const frontMatterBlock = frontMatterMatchFound[1];
  const frontMatterLines = frontMatterBlock.trim().split("\n");

  const content = rawFileContent.replace(frontMatterRegex, "").trim();

  const blogMetadata: Partial<BlogMetadata> = {};
  frontMatterLines.forEach((line) => {
    const [key, ...valuesArr] = line.split(": ");
    let value = valuesArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1");
    blogMetadata[key.trim() as keyof BlogMetadata] = value;
  });

  return { content, blogMetadata: blogMetadata as BlogMetadata };
}

/** Only allow MDX reads inside this directory */
const ARTICLES_DIR = path.join(process.cwd(), "app", "writing", "_articles");

function getMDXFiles() {
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => path.extname(file) === ".mdx");
}

function readArticleFile(fileName: string) {
  // Only allow reading direct children like "post.mdx"
  if (!/^[a-zA-Z0-9._-]+\.mdx$/.test(fileName)) {
    throw new Error("Invalid MDX filename");
  }

  const fullPath = path.join(ARTICLES_DIR, fileName);

  // Extra safety: ensure we stayed inside ARTICLES_DIR
  const base = path.resolve(ARTICLES_DIR) + path.sep;
  const resolved = path.resolve(fullPath);
  if (!resolved.startsWith(base)) {
    throw new Error("Invalid path traversal attempt");
  }

  return fs.readFileSync(resolved, "utf-8");
}

function getMDXData() {
  const mdxFiles = getMDXFiles();

  return mdxFiles.map((file) => {
    const fileContent = readArticleFile(file);
    const { content, blogMetadata } = parseFrontMatter(fileContent);
    const slug = path.basename(file, path.extname(file));
    return { slug, blogMetadata, content };
  });
}

export function getBlogArticles() {
  return getMDXData();
}

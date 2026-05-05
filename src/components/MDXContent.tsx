import { MDXRemote } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, [rehypePrettyCode, { theme: "github-dark" }]],
  },
};

export default function MDXContent({ source }: { source: string }) {
  return (
    <div className="prose">
      {/* @ts-expect-error async RSC */}
      <MDXRemote source={source} options={options} />
    </div>
  );
}

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image-url";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { BlogPost } from "@/lib/constants/type";
import { AuroraBackground } from "@/components/sections/aurora-background";
import { portableTextComponents } from "@/lib/portableTextComponents";


export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs: string[] = await client.fetch(`*[_type == "post"].slug.current`);
  return slugs.map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  const allPosts: BlogPost[] = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc){
      title,
      slug,
      publishedAt,
      mainImage,
      body
    }`
  );

  const currentIndex = allPosts.findIndex((p) => p.slug.current === slug);
  const post = allPosts[currentIndex];
  const prevPost = allPosts[currentIndex + 1];
  const nextPost = allPosts[currentIndex - 1];
  const relatedPosts = allPosts.filter((_, idx) => idx !== currentIndex).slice(0, 3);

  if (!post) return notFound();

  return (
    <section className="text-white bg-zinc-900 font-sans min-h-screen ">
      <div className="relative z-10 flex flex-col gap-6 px-4 py-20 max-w-5xl mx-auto mt-20">
       
        <div>
          <h2 className="text-4xl font-bold mb-2">{post.title}</h2>
          <p className="text-sm text-[#D0FF71] mb-6">
            Published on {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        </div>

    
        {post.mainImage?.asset && (
          <div className="mb-10">
            <Image
              src={urlFor(post.mainImage).width(1000).height(500).url()}
              alt={post.title}
              width={1000}
              height={500}
              className="rounded-lg w-full object-cover"
            />
          </div>
        )}


        <article className="prose prose-invert max-w-none">
          <PortableText value={post.body} components={portableTextComponents} />
        </article>

        <div className="mt-16 flex justify-between text-sm text-[#D0FF71]">
          {prevPost ? (
            <Link href={`/blog/${prevPost.slug.current}`} className="hover:underline">← Back</Link>
          ) : <span />}
          {nextPost ? (
            <Link href={`/blog/${nextPost.slug.current}`} className="ml-auto hover:underline">Next →</Link>
          ) : <span />}
        </div>

   
        <div className="mt-24">
          <h2 className="text-2xl font-semibold mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related, idx) => (
              <Link
                key={idx}
                href={`/blog/${related.slug.current}`}
                className="bg-neutral-900 rounded-xl p-4 hover:bg-neutral-800"
              >
                {related.mainImage?.asset && (
                  <Image
                    src={urlFor(related.mainImage).width(400).height(200).url()}
                    alt={related.title}
                    width={400}
                    height={200}
                    className="rounded-md mb-4"
                  />
                )}
                <h3 className="text-lg font-bold text-[#D0FF71] mb-2">{related.title}</h3>
                <p className="text-sm text-gray-400">
                  {new Date(related.publishedAt).toLocaleDateString()}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      mainImage
    }`,
    { slug }
  );

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: `Read ${post.title} on our blog`,
    openGraph: {
      title: post.title,
      description: `Read ${post.title} on our blog`,
      images: post.mainImage?.asset
        ? [urlFor(post.mainImage).width(1200).height(630).url()]
        : [],
    },
  };
}

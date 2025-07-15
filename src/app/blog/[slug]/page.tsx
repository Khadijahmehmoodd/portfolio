import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image-url";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs: string[] = await client.fetch(`*[_type == "post"].slug.current`);
  return slugs.map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      mainImage,
      body,
      publishedAt
    }`,
    { slug }
  );

  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 mt-30 mb-20">
      <h1 className="text-3xl font-bold text-[#D0FF71] mb-4">
        {post.title}
      </h1>
      <p className="text-sm text-gray-400 mb-6">
        Published on {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      {post.mainImage?.asset && (
        <Image
          src={urlFor(post.mainImage).width(800).height(400).url()}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-lg mb-6"
        />
      )}
      <article className="prose prose-invert max-w-none">
        <PortableText value={post.body} />
      </article>
    </div>
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

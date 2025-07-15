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
  <div className="relative min-h-screen w-full bg-black text-white overflow-hidden font-sans py-20 px-4">
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-black clip-left"></div>
      <div className="absolute inset-0 bg-[#D0FF71] clip-right"></div>
    </div>

    <div className=" mt-10  mb-10 relative z-10 max-w-3xl mx-auto bg-neutral-900 bg-opacity-90 rounded-2xl p-8 shadow-lg backdrop-blur-md">
      <h1 className="text-3xl font-bold text-[#D0FF71] mb-4">{post.title}</h1>

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

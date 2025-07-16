// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image-url";
// import { PortableText } from "@portabletext/react";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import type { Metadata } from "next";

// export async function generateStaticParams(): Promise<{ slug: string }[]> {
//   const slugs: string[] = await client.fetch(`*[_type == "post"].slug.current`);
//   return slugs.map((slug) => ({ slug }));
// }

// interface Props {
//   params: Promise<{ slug: string }>;
//   searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
// }

// export default async function BlogPost({ params }: Props) {
//   const { slug } = await params;
  
//   const post = await client.fetch(
//     `*[_type == "post" && slug.current == $slug][0]{
//       title,
//       mainImage,
//       body,
//       publishedAt
//     }`,
//     { slug }
//   );

//   if (!post) return notFound();

//  return (
//   <div className="relative min-h-screen w-full bg-black text-white overflow-hidden font-sans py-20 px-4">
//     <div className="absolute inset-0 z-0">
//       <div className="w-full h-full bg-black clip-left"></div>
//       <div className="absolute inset-0 bg-[#D0FF71] clip-right"></div>
//     </div>

//     <div className=" mt-10  mb-10 relative z-10 max-w-3xl mx-auto bg-neutral-900 bg-opacity-90 rounded-2xl p-8 shadow-lg backdrop-blur-md">
//       <h1 className="text-3xl font-bold text-[#D0FF71] mb-4">{post.title}</h1>

//       <p className="text-sm text-gray-400 mb-6">
//         Published on {new Date(post.publishedAt).toLocaleDateString()}
//       </p>

//       {post.mainImage?.asset && (
//         <Image
//           src={urlFor(post.mainImage).width(800).height(400).url()}
//           alt={post.title}
//           width={800}
//           height={400}
//           className="rounded-lg mb-6"
//         />
//       )}

//       <article className="prose prose-invert max-w-none">
//         <PortableText value={post.body} />
//       </article>
//     </div>
//   </div>
// );


// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { slug } = await params;
  
//   const post = await client.fetch(
//     `*[_type == "post" && slug.current == $slug][0]{
//       title,
//       mainImage
//     }`,
//     { slug }
//   );

//   if (!post) {
//     return {
//       title: "Post Not Found",
//     };
//   }

//   return {
//     title: post.title,
//     description: `Read ${post.title} on our blog`,
//     openGraph: {
//       title: post.title,
//       description: `Read ${post.title} on our blog`,
//       images: post.mainImage?.asset 
//         ? [urlFor(post.mainImage).width(1200).height(630).url()]
//         : [],
//     },
//   };
// }

// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image-url";
// import { PortableText } from "@portabletext/react";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import type { Metadata } from "next";

// export async function generateStaticParams(): Promise<{ slug: string }[]> {
//   const slugs: string[] = await client.fetch(`*[_type == "post"].slug.current`);
//   return slugs.map((slug) => ({ slug }));
// }

// interface Props {
//   params: Promise<{ slug: string }>;
//   searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
// }

// export default async function BlogPost({ params }: Props) {
//   const { slug } = await params;


//   const allPosts = await client.fetch(
//     `*[_type == "post"] | order(publishedAt desc){
//       title,
//       slug,
//       publishedAt
//     }`
//   );

//   const currentIndex = allPosts.findIndex((p: any) => p.slug.current === slug);
//   const prevPost = allPosts[currentIndex + 1];
//   const nextPost = allPosts[currentIndex - 1];

//   const post = await client.fetch(
//     `*[_type == "post" && slug.current == $slug][0]{
//       title,
//       mainImage,
//       body,
//       publishedAt
//     }`,
//     { slug }
//   );

//   if (!post) return notFound();

//   return (
//     <div className="relative min-h-screen w-full bg-black text-white overflow-hidden font-sans py-20 px-4">
//       <div className="absolute inset-0 z-0">
//         <div className="w-full h-full bg-black clip-left"></div>
//         <div className="absolute inset-0 bg-[#D0FF71] clip-right"></div>
//       </div>

//       <div className="mt-10 mb-10 relative z-10 max-w-3xl mx-auto bg-neutral-900 bg-opacity-90 rounded-2xl p-8 shadow-lg backdrop-blur-md">
//         <h1 className="text-3xl font-bold text-[#D0FF71] mb-4">{post.title}</h1>
//         <p className="text-sm text-gray-400 mb-6">
//           Published on {new Date(post.publishedAt).toLocaleDateString()}
//         </p>

//         {post.mainImage?.asset && (
//           <Image
//             src={urlFor(post.mainImage).width(800).height(400).url()}
//             alt={post.title}
//             width={800}
//             height={400}
//             className="rounded-lg mb-6"
//           />
//         )}

//         <article className="prose prose-invert max-w-none">
//           <PortableText value={post.body} />
//         </article>
//         <div className="mt-10 flex justify-between items-center text-sm text-gray-400">
//           {prevPost ? (
//             <Link
//               href={`/blog/${prevPost.slug.current}`}
//               className="hover:text-white hover:underline"
//             >
//               ← Back
//             </Link>
//           ) : <div />}

//           {nextPost ? (
//             <Link
//               href={`/blog/${nextPost.slug.current}`}
//               className="hover:text-white hover:underline ml-auto"
//             >
//               Next →
//             </Link>
//           ) : <div />}
//         </div>

//       </div>
//     </div>
//   );
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { slug } = await params;

//   const post = await client.fetch(
//     `*[_type == "post" && slug.current == $slug][0]{
//       title,
//       mainImage
//     }`,
//     { slug }
//   );

//   if (!post) {
//     return {
//       title: "Post Not Found",
//     };
//   }

//   return {
//     title: post.title,
//     description: `Read ${post.title} on our blog`,
//     openGraph: {
//       title: post.title,
//       description: `Read ${post.title} on our blog`,
//       images: post.mainImage?.asset
//         ? [urlFor(post.mainImage).width(1200).height(630).url()]
//         : [],
//     },
//   };
// }

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image-url";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { BlogPost } from "@/lib/constants/type";

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
    <div
      className="w-full min-h-screen text-white px-6 py-16 font-sans"
      style={{
        backgroundImage: `
          linear-gradient(to right, #262626 1px, transparent 1px),
          linear-gradient(to bottom, #262626 1px, transparent 1px),
          radial-gradient(circle at center, rgba(0,0,0,0.1), transparent 70%)
        `,
        backgroundSize: "20px 20px, 20px 20px, 100% 100%",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mt-30 mb-2">{post.title}</h2>
        <p className="text-sm text-[#D0FF71] mb-6">
          Published on {new Date(post.publishedAt).toLocaleDateString()}
        </p>

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
          <PortableText value={post.body} />
        </article>

        <div className="mt-12 flex justify-between text-sm text-[#D0FF71]">
          {prevPost ? (
            <Link href={`/blog/${prevPost.slug.current}`} className="hover:underline">
              ← Back
            </Link>
          ) : <span />}
          {nextPost ? (
            <Link href={`/blog/${nextPost.slug.current}`} className="ml-auto hover:underline">
              Next →
            </Link>
          ) : <span />}
        </div>

        {/* Related Posts */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related: BlogPost, idx: number) => (
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

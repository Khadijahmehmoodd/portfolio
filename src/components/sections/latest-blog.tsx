"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image-url";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: any;
  publishedAt: string;
  category?: string;
}

export default function LatestBlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function fetchLatest() {
      const data: BlogPost[] = await client.fetch(
        `*[_type == "post"] | order(publishedAt desc)[0...3] {
          _id,
          title,
          slug,
          excerpt,
          mainImage,
          publishedAt,
          category
        }`
      );
      setPosts(data);
    }

    fetchLatest();
  }, []);

  return (
    <section id="latest-blogs" className="py-20 bg-black text-white">
      <div className="relative w-full py-20 px-4 sm:px-6 md:px-20 bg-black text-white">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-widest text-[#D0FF71] uppercase mb-6">
          Latest Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-52 sm:h-48 lg:h-44 overflow-hidden">
                {post.mainImage?.asset && (
                  <Image
                    src={urlFor(post.mainImage).width(800).height(400).url()}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
              </div>

              <div className="p-5 space-y-2 relative z-10">
                <p className="text-xs text-gray-400">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>

                <h3 className="text-base font-semibold leading-snug group-hover:text-[#D0FF71] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {post.excerpt && (
                  <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {post.excerpt}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

       
        <div className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="inline-block bg-[#D0FF71] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#ccf869] transition"
          >
            View All Blogs →
          </Link>
        </div>
      </div>
    </section>
  );
}

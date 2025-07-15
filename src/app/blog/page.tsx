// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image-url";
// import Image from "next/image";
// import Link from "next/link";

// export const revalidate = 60;

// export default async function BlogPage() {
//   const posts = await client.fetch(`
//     *[_type == "post"] | order(publishedAt desc) {
//       _id,
//       title,
//       slug,
//       excerpt,
//       mainImage,
//       publishedAt
//     }
//   `);

//   return (
//     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//       <h1 className="text-4xl font-bold text-[#D0FF71] mb-10 text-center">
//         Latest Blog Posts
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {posts.map((post: any) => (
//           <Link key={post._id} href={`/blog/${post.slug.current}`}>
//             <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
//               {post.mainImage?.asset && (
//                 <Image
//                   src={urlFor(post.mainImage).width(600).height(300).url()}
//                   alt={post.title}
//                   width={600}
//                   height={300}
//                   className="w-full h-48 object-cover"
//                 />
//               )}

//               <div className="p-5">
//                 <h2 className="text-xl font-semibold text-white mb-1">
//                   {post.title}
//                 </h2>

//                 <p className="text-sm text-gray-400 mb-2">
//                   {new Date(post.publishedAt).toLocaleDateString()}
//                 </p>

//                 {post.excerpt && (
//                   <p className="text-gray-300 text-sm line-clamp-3 mb-3">
//                     {post.excerpt}
//                   </p>
//                 )}

//                 <span className="text-sm text-[#D0FF71] hover:underline">
//                   Read more →
//                 </span>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
// app/blog/page.tsx
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image-url";
// import Image from "next/image";
// import Link from "next/link";
// import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

// // fetch once every minute
// export const revalidate = 60;

// export default async function BlogPage() {
//   const posts: Array<{
//     _id: string;
//     title: string;
//     slug: { current: string };
//     excerpt?: string;
//     mainImage?: any;
//     publishedAt: string;
//   }> = await client.fetch(`
//     *[_type == "post"] | order(publishedAt desc) {
//       _id,
//       title,
//       slug,
//       excerpt,
//       mainImage,
//       publishedAt
//     }
//   `);

//   return (
//     <section id="blog">
//     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-3 mb-15">
//          <h2 className="text-2xl md:text-3xl font-semibold tracking-widest text-[#D0FF71] uppercase mb-6">
//       Blogs
//     </h2>

//       <BentoGrid className="gap-8 md:auto-rows-[25rem] py-4" >
//         {posts.map((post, i) => {
       
//           const spanClass = i % 3 === 0 ? "md:col-span-2" : "md:col-span-1";

//           return (
//             <Link
//               key={post._id}
//               href={`/blog/${post.slug.current}`}
//               className="cursor-pointer"
//             >
//               <BentoGridItem
//                 className={spanClass}
//                 header={
//                   post.mainImage?.asset && (
//                     <Image
//                       src={urlFor(post.mainImage).width(800).height(400).url()}
//                       alt={post.title}
//                       width={800}
//                       height={400}
//                       className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
//                     />
//                   )
//                 }
//                 icon={null}
//                 title={
//                   <div className="p-4">
//                     <h2 className="text-xl font-semibold text-white mb-1">
//                       {post.title}
//                     </h2>
//                     <p className="text-sm text-gray-400">
//                       {new Date(post.publishedAt).toLocaleDateString()}
//                     </p>
//                   </div>
//                 }
//                 description={
//                   post.excerpt ? (
//                     <p className="px-4 pb-4 text-gray-300 line-clamp-3">
//                       {post.excerpt}
//                     </p>
//                   ) : null
//                 }
//               />
//             </Link>
//           );
//         })}
//       </BentoGrid>
//     </div>
//     </section>
//   );
// }
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image-url";
import Image from "next/image";
import Link from "next/link";

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function BlogPage() {
  const posts: Array<{
    _id: string;
    title: string;
    slug: { current: string };
    excerpt?: string;
    mainImage?: any;
    publishedAt: string;
    category?: string;
  }> = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    category
  }`);

  return (
    <section id="blog" className="py-20 bg-black text-white">
      <div className="relative w-full py-20 px-4 sm:px-6 md:px-20 bg-black text-white">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-widest text-[#D0FF71] uppercase mb-6">
      Projects
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

        {/* Pagination Placeholder */}
        <div className="mt-16 flex justify-center items-center gap-4 text-sm text-gray-400">
          <button className="hover:text-white disabled:opacity-30" disabled>
            ← Previous
          </button>
          <span className="font-medium">Page 1</span>
          <button className="hover:text-white">Next →</button>
        </div>
      </div>
    </section>
  );
}

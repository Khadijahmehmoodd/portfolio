import React from "react";
import type { PortableTextComponents } from "@portabletext/react";

export const portableTextComponents: PortableTextComponents = {
  types: {},
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold my-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold my-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-medium my-2">{children}</h4>,
    normal: ({ children }) => <p className="text-base leading-relaxed mb-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-400 my-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded">{children}</code>
    ),
  },
};

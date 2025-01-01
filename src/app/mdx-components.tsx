import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import type { ImageProps } from 'next/image'
import type { ReactNode } from 'react'
import { ImageGrid } from '@/components/ImageGrid'

type CustomImageProps = Omit<ImageProps, 'src'> & {
  src: string;
}

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }: { children?: ReactNode }) => (
      <h1 className="font-playfair text-5xl font-bold mb-12 text-center bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
        {children}
      </h1>
    ),
    h2: ({ children }: { children?: ReactNode }) => (
      <h2 className="font-playfair text-4xl font-semibold mb-8 mt-16 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800 pb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: ReactNode }) => (
      <h3 className="font-playfair text-2xl font-medium mb-6 mt-12 text-gray-700 dark:text-gray-200">
        {children}
      </h3>
    ),
    p: ({ children }: { children?: ReactNode }) => (
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-light tracking-wide">
        {children}
      </p>
    ),
    em: ({ children }: { children?: ReactNode }) => (
      <em className="text-gray-500 dark:text-gray-400 font-light italic block mb-8 text-center">
        {children}
      </em>
    ),
    img: ({ src = '', alt = '' }: CustomImageProps) => (
      <div className="my-12 relative group">
        <div className="relative">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className="rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
            priority={true}
          />
          <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none border border-black/5 dark:border-white/5" />
        </div>
        {alt && (
          <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400 font-light italic">
            {alt}
          </p>
        )}
      </div>
    ),
    ImageGrid: ImageGrid,
    ...components,
  }
} 
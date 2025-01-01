import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import type { ImageProps } from 'next/image'
import type { ReactNode } from 'react'
import { ImageGrid } from '@/components/ImageGrid'

type CustomImageProps = Omit<ImageProps, 'src'> & {
  src: string;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }: { children: ReactNode }) => (
      <h1 className="font-playfair text-5xl font-bold mb-12 text-center text-gray-100">
        {children}
      </h1>
    ),
    h2: ({ children }: { children: ReactNode }) => (
      <h2 className="font-playfair text-4xl font-semibold mb-8 mt-16 text-gray-100 border-b border-gray-800 pb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: { children: ReactNode }) => (
      <h3 className="font-playfair text-2xl font-medium mb-6 mt-12 text-gray-200">
        {children}
      </h3>
    ),
    p: ({ children }: { children: ReactNode }) => (
      <p className="text-lg text-gray-300 mb-6 leading-relaxed font-light tracking-wide">
        {children}
      </p>
    ),
    em: ({ children }: { children: ReactNode }) => (
      <em className="text-gray-400 font-light italic block mb-8 text-center">
        {children}
      </em>
    ),
    img: (props: CustomImageProps) => {
      const { src, alt = '' } = props
      return (
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
            <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none border border-white/5" />
          </div>
          {alt && (
            <p className="mt-4 text-sm text-center text-gray-400 font-light italic">
              {alt}
            </p>
          )}    
        </div>
      )
    },
    ImageGrid,
    ...components,
  }
} 
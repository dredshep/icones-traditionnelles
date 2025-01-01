import { getContentBySlug } from '@/lib/mdx';
import { Playfair_Display } from 'next/font/google';
import type { Frontmatter } from '@/lib/mdx';
import type { ReactNode } from 'react';

const playfair = Playfair_Display({ subsets: ['latin'] });

interface PageProps {
  params: {
    slug: string;
  };
}

interface ContentResponse {
  content: ReactNode;
  frontmatter: Frontmatter;
  slug: string;
}

export default async function TechniquePage({ params }: PageProps) {
  const { content, frontmatter } = await getContentBySlug('techniques', params.slug) as ContentResponse;

  return (
    <article className="max-w-5xl mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-4 dark:text-white`}>
          {frontmatter.title}
        </h1>
        {frontmatter.description && (
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {frontmatter.description}
          </p>
        )}
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {content}
      </div>
    </article>
  );
} 
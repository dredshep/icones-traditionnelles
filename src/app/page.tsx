import Image from "next/image";
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import { getAllContent } from '@/lib/mdx';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default async function Home() {
  const works = await getAllContent('works');

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/archanges/10103407625347090195025911.jpg"
            alt="Les Sept Archanges"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className={`${playfair.className} text-5xl md:text-7xl font-bold mb-6`}>
            Icônes Traditionnelles
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90 mb-8">
            Une collection d&apos;art sacré traditionnel, créée avec des techniques ancestrales
          </p>
          <Link 
            href="/works/galerie"
            className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/50 px-6 py-3 rounded-full transition-colors"
          >
            Découvrir la Galerie
          </Link>
        </div>
      </section>

      {/* Works Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className={`${playfair.className} text-3xl md:text-4xl font-semibold mb-12 text-center dark:text-white`}>
          Collections
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {works
            .filter(work => work.slug !== 'galerie') // Exclude galerie from grid
            .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
            .map((work) => (
              <Link 
                key={work.slug}
                href={`/works/${work.slug}`}
                className="group block bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {(work.frontmatter.coverImage || work.frontmatter.banner) && (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={work.frontmatter.coverImage || work.frontmatter.banner || ''}
                      alt={work.frontmatter.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 transition-colors">
                    {work.frontmatter.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {work.frontmatter.description}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}

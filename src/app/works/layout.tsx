import { Playfair_Display } from 'next/font/google'
import Link from 'next/link'
import type { ReactNode } from 'react'

const playfair = Playfair_Display({ subsets: ['latin'] })

export default function WorksLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800" style={{ fontFamily: playfair.style.fontFamily }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <Link href="/" className="text-gray-400 hover:text-gray-500">
                Accueil
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <Link
                  href="/works"
                  className="ml-4 text-gray-400 hover:text-gray-500"
                >
                  Œuvres
                </Link>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
} 
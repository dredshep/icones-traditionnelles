import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google'
import Link from 'next/link'
import type { ReactNode } from 'react'

const playfair = Playfair_Display({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Images de l\'invisible', href: '/works/images-de-l-invisible' },
  { name: 'Archanges', href: '/works/archanges' },
  { name: 'Apocalypse', href: '/works/apocalypse' },
  { name: 'Mère de Dieu', href: '/works/mere-de-dieu' },
  { name: 'Icônes Traditionnelles', href: '/works/icones-traditionnelles' },
  { name: 'Icônes Traditionnelles SB', href: '/works/icones-traditionnelles-sb' },
  { name: 'Galerie', href: '/works/galerie' },
  // { name: 'Techniques', href: '/techniques' },
  { name: 'Contact', href: '/contact' },
]

export const metadata = {
  title: 'Icônes Traditionnelles - Stéphane Boner',
  description: 'Art sacré traditionnel, créé avec des techniques ancestrales',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${inter.className} antialiased`}>
      <body className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
        {/* Navigation */}
        <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link 
                    href="/" 
                    className={`${playfair.className} text-xl font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
                  >
                    Icônes Traditionnelles
                  </Link>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-2 pb-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div className="sm:hidden" id="mobile-menu">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="pt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className={`${playfair.className} text-lg font-semibold mb-4`}>
                  Stéphane Boner
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Artiste iconographe traditionnel
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                  Navigation
                </h3>
                <ul className="space-y-2">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                  Contact
                </h3>
                <address className="text-sm text-gray-600 dark:text-gray-400 not-italic">
                  <p>Email: contact@icones-traditionnelles.fr</p>
                  <p className="mt-2">Atelier sur rendez-vous</p>
                </address>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm text-center text-gray-400">
                © {new Date().getFullYear()} Icônes Traditionnelles. Tous droits réservés.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

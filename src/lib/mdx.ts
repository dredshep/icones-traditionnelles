import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import { mdxComponents } from '../components/MdxComponents'

const contentDirectory = path.join(process.cwd(), 'src/content')

export interface Navigation {
  prev?: { title: string; href: string };
  next?: { title: string; href: string };
}

export interface Frontmatter {
  title: string
  date: string
  description: string
  coverImage?: string
  banner?: string
  navigation?: Navigation
}

export async function getContentBySlug(type: string, slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(contentDirectory, type, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source: fileContents,
    components: mdxComponents,
    options: { parseFrontmatter: true },
  })

  return {
    slug: realSlug,
    frontmatter,
    content,
  }
}

export function getAllContent(type: string) {
  const dir = path.join(contentDirectory, type)
  const files = fs.readdirSync(dir)
  const contents = files
    .filter((file) => /\.mdx$/.test(file))
    .map((file) => {
      const realSlug = file.replace(/\.mdx$/, '')
      const fullPath = path.join(dir, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug: realSlug,
        frontmatter: data as Frontmatter,
      }
    })
    .sort((a, b) => (a.frontmatter.date > b.frontmatter.date ? -1 : 1))

  return contents
} 
import { compileMDX } from 'next-mdx-remote/rsc';
import { mdxComponents } from '../components/MdxComponents';
import fs from 'node:fs';
import path from 'node:path';

export interface Navigation {
  prev?: { title: string; href: string };
  next?: { title: string; href: string };
}

export interface Frontmatter {
  title: string;
  description?: string;
  date?: string;
  coverImage?: string;
  banner?: string;
  navigation?: Navigation;
}

export async function getAllContent(type: string) {
  const contentDirectory = path.join(process.cwd(), 'src', 'content', type);
  const files = fs.readdirSync(contentDirectory);

  const content = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(contentDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const slug = file.replace(/\.mdx$/, '');

      const { frontmatter } = await compileMDX<Frontmatter>({
        source: fileContent,
        options: { parseFrontmatter: true },
      });

      return {
        slug,
        frontmatter,
      };
    })
  );

  return content;
}

export async function getContent(type: string, slug: string) {
  const filePath = path.join(process.cwd(), 'src', 'content', type, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');

  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source,
    components: mdxComponents,
    options: { parseFrontmatter: true },
  });

  return { content, frontmatter };
} 
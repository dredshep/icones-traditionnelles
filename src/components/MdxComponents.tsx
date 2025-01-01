import { ResponsiveImage } from './ResponsiveImage';
import type { ComponentProps } from 'react';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface ImgProps extends Omit<ComponentProps<'img'>, 'src'> {
  src?: string | StaticImport;
  alt?: string;
}

export const mdxComponents = {
  img: ({ src = '', alt = '' }: ImgProps) => (
    <ResponsiveImage src={src} alt={alt} />
  ),
}; 
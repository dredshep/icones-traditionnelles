import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface ResponsiveImageProps {
  src: string | StaticImport;
  alt: string;
  className?: string;
}

export function ResponsiveImage({ src, alt, className }: ResponsiveImageProps) {
  if (!src) return null;
  
  return (
    <div className={cn(
      "relative w-full max-w-4xl mx-auto my-8",
      "aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]",
      className
    )}>
      <Image
        src={src}
        alt={alt}
        fill
        quality={85}
        loading="lazy"
        className="object-contain"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
      />
    </div>
  );
} 
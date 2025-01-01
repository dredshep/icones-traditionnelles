import Image from 'next/image'

export type ImageGridItem = {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
}

export function ImageGrid({ images }: { images: ImageGridItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {images.map((image) => (
        <div key={`${image.title}-${image.src}`} className="relative group aspect-[3/4] overflow-hidden rounded-lg">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90" />
          <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
            <h4 className="font-playfair text-xl font-medium mb-1">{image.title}</h4>
            {image.subtitle && (
              <p className="text-sm text-gray-200 font-light italic">{image.subtitle}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
} 
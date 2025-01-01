import Image from 'next/image'

interface BannerProps {
  src: string
  title: string
}

export function Banner({ src, title }: BannerProps) {
  return (
    <div className="relative w-full h-[50vh] mb-8 overflow-hidden">
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
        <h1 className="banner-title text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair">
          {title}
        </h1>
      </div>
    </div>
  )
} 
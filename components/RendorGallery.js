"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";


import { EffectFade, Pagination } from "swiper/modules";

const galleryImages = [
  { src: "/gallery-1.webp", alt: "Elegant Living Room" },
  { src: "/gallery-2.webp", alt: "Modern Kitchen Design" },
  { src: "/gallery-3.webp", alt: "Serene Bedroom View" },
  { src: "/gallery-4.webp", alt: "Spacious Balcony" },
    { src: "/gallery-5.webp", alt: "Spacious Bedroom" },
];

export default function RenderGallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#F5E7C4]">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#572f1f] mb-12 px-4">
          Render Gallery
        </h2>
        
        <Swiper
          modules={[EffectFade, Pagination]}
          loop={true}
          effect="fade"
          speed={1000}
          pagination={{ clickable: true }}
          className="relative h-[50vh] lg:h-screen w-full shadow-xl"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <style jsx global>{`
        .swiper-pagination {
          position: absolute;
          bottom: 2rem !important;
          /* MODIFIED: Added !important to force centering */
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: #ffffff;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          background-color: #ffffff;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
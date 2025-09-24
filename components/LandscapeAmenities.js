"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper modules
import { Navigation, Autoplay } from "swiper/modules";

// Data for the slider
const galleryData = [
  { name: "Mini Multi-Play Court", image: "/amenities-10.jpg" },
  { name: "Tree Court with Seating", image: "/amenities-11.jpg" },
  { name: "Cricket Pitch", image: "/amenities-12.jpg" },
  { name: "Swimming Pool", image: "/amenities-13.jpg" },
  { name: "Water Foundation", image: "/amenities-14.jpg" },
  { name: "Children's Play Area", image: "/amenities-15.jpg" },
  { name: "Walking Path", image: "/amenities-16.jpg" },
  { name: "Multi-Purpose Hall", image: "/amenities-17.jpg" },
];

export default function LandscapeAmenities() {
  return (
    <section id="amenities" className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-8 md:px-24">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            nextEl: '.swiper-button-next-gallery',
            prevEl: '.swiper-button-prev-gallery',
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="relative"
        >
          {galleryData.map((item, index) => (
            <SwiperSlide key={index}>
              {/* MODIFIED: This div is now the relative container for the overlay */}
              <div className="relative shadow-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-auto object-cover" // Removed mb-4
                />
                
                {/* MODIFIED: Added this absolute positioned div for the text overlay */}
                <div className="absolute bottom-0 left-0 w-full p-4 text-center bg-gradient-to-t from-black/90 to-transparent">
                  <div className="font-semibold text-white">{item.name}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev-gallery absolute top-1/2 -translate-y-1/2 left-0 z-10 cursor-pointer">
            <Image src="/left-arrow.png" alt="Previous" width={50} height={50} />
          </div>
          <div className="swiper-button-next-gallery absolute top-1/2 -translate-y-1/2 right-0 z-10 cursor-pointer">
            <Image src="/right-arrow.png" alt="Next" width={50} height={50} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
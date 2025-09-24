"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper modules
import { Navigation, Autoplay } from "swiper/modules";

const amenitiesData = [
  { name: "Yoga/Meditation Room/Dance Room", image: "/amenities-2.png" },
  { name: "Indoor Games", image: "/amenities-3.png" },
  { name: "Gymnasium", image: "/amenities-1.png" },
  { name: "Yoga/Meditation Room/Dance Room", image: "/amenities-2.png" },
  { name: "Indoor Games", image: "/amenities-3.png" },
  { name: "Gymnasium", image: "/amenities-1.png" },
];

export default function AmenitiesSlider() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto text-center px-8 md:px-32">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#572f1f] mb-16 tracking-widest">
          EVOLVE AMENITIES
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          centeredSlides={true}
          spaceBetween={0}
          slidesPerView={2.6}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20, spaceBetween: -15 },
            768: { slidesPerView: 2, spaceBetween: 30, spaceBetween: -15 },
            1024: { slidesPerView: 3, spaceBetween: 40, spaceBetween: -15 },
          }}
          className="amenities-slider relative"
        >
          {amenitiesData.map((amenity, index) => (
            <SwiperSlide key={index}>
              <div className="amenities-box relative shadow-lg overflow-hidden bg-transparent">
                <div className="relative h-[54vh] w-full">
                  <Image
                    src={amenity.image}
                    alt={amenity.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  {/* FIXED typo: nset-0 -> inset-0 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full text-white py-4 px-2 text-center">
                    <h4 className="font-thin font-montserrat text-lg md:text-xl">
                      {amenity.name}
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-4 z-20 cursor-pointer">
            <Image
              src="/left-arrow.png"
              alt="Previous"
              width={50}
              height={50}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-8 h-8 md:w-10 md:h-10 opacity-100  "
            />
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-4 z-20 cursor-pointer">
            <Image src="/right-arrow.png" alt="Next" width={50} height={50} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
          </div>
        </Swiper>
      </div>

      <style jsx global>{`
        .amenities-slider .swiper-slide {
          /* MODIFIED: Added transition and default smaller scale */
          transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
          transform: scale(0.9);
          opacity: 1;
        }

        .amenities-slider .swiper-slide-active {
          /* MODIFIED: Added larger scale for the active slide */
          transform: scale(1.05);
          opacity: 1;
          z-index: 10; /* Ensure active slide is on top */
        }

        .swiper-button-prev,
        .swiper-button-next {
          display: none !important;
        }
      `}</style>
    </section>
  );
}

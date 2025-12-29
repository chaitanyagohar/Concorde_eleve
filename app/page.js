"use client";

import { useEffect } from 'react'; // 1. Import useEffect
import Image from "next/image";
import Header from "@/components/Header";
import dynamic from "next/dynamic";

const AmenitiesSlider = dynamic(() => import("@/components/AmenitiesSlider"), { ssr: false });
const LandscapeAmenities = dynamic(() => import("@/components/LandscapeAmenities"), { ssr: false });
const RenderGallery = dynamic(() => import("@/components/RendorGallery"), { ssr: false });
const LocationMap = dynamic(() => import("@/components/LocationMap"), { ssr: false });
const LocationAccordion = dynamic(() => import("@/components/LocationAccordion"), { ssr: false });
const StickyEnquireButton = dynamic(() => import("@/components/StickyEnquireButton"), { ssr: false });

import { useLightbox } from '@/app/context/LightboxContext';
export default function Home() {
  const { openLightbox } = useLightbox(); // 3. Get the open function from the context

 
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
 
 {/* Hero Video Section */}
<section id="home" className="relative h-screen overflow-hidden">
  
  {/* --- Desktop Video --- */}
  {/* This video is hidden by default and only becomes visible on medium screens and up (md:block) */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute z-0 w-full h-full object-cover hidden md:block"
  >
    <source src="/Hero-video-concorde-desktop.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* --- Mobile Video --- */}
  {/* This video is visible by default but becomes hidden on medium screens and up (md:hidden) */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute z-0 w-full h-full object-cover block md:hidden"
  >
    <source src="/Hero-video-concorde-mobile.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  
</section>
 
       {/* Section 1: Rise Above, Live Beyond (Intro) */}
<section 
  id="about" 
  // Base classes are for mobile (dark bg), 'md:' classes are for desktop (white bg)
  className="py-16 px-6 md:px-16 lg:px-24 bg-[#572f1f] md:bg-white transition-colors duration-500"
>
  <div className="container mx-auto">
    {/* This container uses Flexbox to control the layout and order */}
    <div className="flex flex-col md:flex-row md:gap-12 md:items-center">
      
      {/* Image Block: Appears FIRST on mobile, SECOND on desktop */}
      <div className="w-full md:w-1/2 order-1 md:order-2">
        <Image
          src="/about-con.jpg"
          alt="Project Aerial View"
          width={800}
          height={600}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="shadow-lg"
        />
      </div>

      {/* Text Block: Appears SECOND on mobile, FIRST on desktop */}
      <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left mt-12 md:mt-0">
        
        {/* Heading: White text on mobile, maroon text on desktop */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white md:text-[#5C0527] mb-6">
          RISE ABOVE, <br />LIVE BEYOND.
        </h2>
        
        {/* Paragraphs: Light gray text on mobile, dark gray text on desktop */}
        <p className="text-gray-300 md:text-gray-800 leading-relaxed mb-4">
          At Concorde, we craft more than homes; we create elevated
          lifestyles. Élevé, our 36-floor landmark, offers spacious 3 &
          4 BHK residences with breathtaking views, double-height
          spaces, and refined interiors.
        </p>
        <p className="text-gray-300 md:text-gray-800 leading-relaxed">
          Beyond your home, experience the exclusive Evolve Clubhouse,
          vibrant retail boulevard, and premium amenities. Nestled on
          Old Madras Road, Élevé keeps you connected while offering a
          private retreat above it all.
        </p>
      </div>

    </div>
  </div>
</section>

        {/* Section 2: A Home in the Sky (Unit Types) */}
        <section id="configuration" className="py-16 px-4 sm:px-8 bg-[#F5E7C4]">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-[#572f1f] mb-12 tracking-widest">
              A HOME IN THE SKY
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4">
              {/* Card 1 */}
              <div className="relative h-96 group">
                <Image
                  src="/config-1.png"
                  alt="4 BHK Type 1"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
                <div className="absolute top-0 left-0 p-6 text-white w-full">
                  <h3 className="text-xl text-[#F5E7C4] font-bold [text-shadow:0_1px_3px_rgb(0,0,0,0.6)]">
                    4 BHK unit type 1
                  </h3>
                  <h3 className="text-lg text-[#F5E7C4] [text-shadow:0_1px_3px_rgb(0,0,0,0.6)]">
                    – 2556 sq. ft.
                  </h3>
                </div>
              </div>
              {/* Card 2 */}
              <div className="relative h-96 group">
                <Image
                  src="/config-2.png"
                  alt="4 BHK Type 2"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
                <div className="absolute top-0 left-0 p-6 text-white w-full">
                  <h3 className="text-xl text-[#F5E7C4] font-bold [text-shadow:0_1px_3px_rgb(0,0,0,0.6)]">
                    4 BHK unit type 2
                  </h3>
                  <h3 className="text-lg text-[#F5E7C4] [text-shadow:0_1px_3px_rgb(0,0,0,0.6)]">
                    – 2570 sq. ft.
                  </h3>
                </div>
              </div>
              {/* Card 3 */}
              <div className="relative h-96 group">
                <Image
                  src="/config-3.png"
                  alt="3 BHK Type 1"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
                <div className="absolute top-0 left-0 p-6 text-white w-full">
                  <h3 className="text-xl text-[#F5E7C4] font-bold [text-shadow:0_1px_3px_rgb(0,0,0,0.6)]">
                    3 BHK unit type 1
                  </h3>
                  <h3 className="text-lg text-[#F5E7C4] [text-shadow:0_1px_3px_rgb(0,0,0,0.6)]">
                    – 1953 sq. ft.
                  </h3>
                </div>
              </div>
              {/* Card 4 */}
              <div className="relative h-96 group">
                <Image
                  src="/config-4.png"
                  alt="3 BHK Type 2"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
                <div className="absolute top-0 left-0 p-6 text-white w-full">
                  <h3 className="text-xl text-[#F5E7C4] font-bold [text-shadow:0_1px_3px_rgb(0,0,0,0.6)]">
                    3 BHK unit type 2
                  </h3>
                  <h3 className="text-lg text-[#F5E7C4] [text-shadow:0_1px_3px_rgb(0,0,0,0.6)]">
                    – 1934 sq. ft.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Evolve Lifestyle (CTA) */}
        <section
          id="club"
          className="relative h-screen flex items-center text-white text-center px-4"
        >
          <Image
            src="/proj-amenities-img.jpg"
            alt="Cityscape background"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4">
              STEP INTO THE
            </h2>
            <h3 className="text-4xl md:text-6xl font-playfair font-bold mb-8">
              Evolve LIFESTYLE
            </h3>
            <p className="max-w-3xl mx-auto mb-10 leading-relaxed  text-center">
              A 15,000 sq. ft. clubhouse. At Élevé, Club Evolve is more than an
              amenity; it’s an extension of your home. <br /> Thoughtfully designed for
              wellness, leisure, and community, it offers exclusive spaces that
              elevate everyday living with comfort, convenience, and enriching
              experiences.
            </p>
            <button  onClick={ openLightbox } className="bg-[#FFFFFF] text-[#572f1f] rounded-lg font-bold py-3 px-8 hover:bg-gray-200 transition-colors">
              Download Brochure
            </button>
          </div>
        </section>

        {/* Section 4: Evolve Amenities */}
        <AmenitiesSlider />

        {/* Section 5: Landscape Amenities Intro */}
        <section
          id="amenities"
          className="relative h-screen flex items-center text-white text-center px-4"
        >
          <Image
            src="/proj-amenities-img.jpg"
            alt="Skyline background"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">
              LANDSCAPE AMENITIES
            </h2>
            <p className="max-w-3xl mx-auto leading-relaxed">
              At Élevé, nature isn’t just a backdrop; it’s an integral part of
              your living experience. Our landscapes offer peace, privacy, and
              green sanctuaries in the heart of the city.
            </p>
          </div>
        </section>

        <LandscapeAmenities />

        <RenderGallery />

        {/* Section 8: Floor Plans */}
        <section className="py-16 px-4 bg-[#F5E7C4]">
          <div className="container mx-auto text-center">
            <a
              onClick={openLightbox}
              className="inline-block text-xl font-semibold text-[#572f1f] hover:text-black transition"
            >
              <div className="p-2 md:p-4 border-4 border-white bg-white">
                <Image
                  src="/floor-plan-img.jpg"
                  alt="Floor Plan"
                  width={700}
                  height={900}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-auto"
                />
              </div>
            </a>
          </div>
        </section>

        {/* Section 9: Location Details */}
         {/* Location Section */}
        <section id="location" className="py-16 px-4 md:px-12 lg:px-20 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Column */}
              <div>
                <LocationAccordion />
              </div>
              {/* Right Column */}
              <div>
                <Image
                  src="/location-img.jpg"
                  alt="Location Map"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>


        {/* Section 10: Video Gallery */}
        <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-playfair text-[#572f1f] mb-12">
              Video Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-thin mb-4">Location</h3>
                <div className="relative overflow-hidden w-full pt-[56.25%] shadow-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/Kuvv-7eXWRs?si=C_B92GLn9ryQBsQQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-thin mb-4">Walkthrough</h3>
                <div className="relative overflow-hidden w-full pt-[56.25%] shadow-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/e7n_0hDgRt4?si=lGrjkK1a55jxo7F0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LocationMap />
        <StickyEnquireButton />

      </main>

      {/* Footer */}
<footer className="bg-black text-center py-12 px-6">
  {/* The container below centers the content */}
  <div className="container mx-auto font-montserrat">
    
    {/* 1. RERA Number is now in its own paragraph with specific styling */}
    <p className="text-white text-xs tracking-wider mb-1">
      RERA No. - PRM/KA/RERA/1251/446/PR/210325/007608
    </p>

    {/* 2. Disclaimer is in a separate paragraph for proper styling */}
    <p className="text-white text-xs leading-relaxed max-w-5xl mx-auto">
     All illustrations, videos, and images are the property of Concorde Group and are used for representational purposes only. This project is marketed by Property Pulse Realty, the official channel partner.</p>

  </div>
</footer>
    </div>
  );
}
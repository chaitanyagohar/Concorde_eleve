// components/LocationAccordion.js

"use client";

import { useState } from "react";

// Data for the accordion sections
const accordionData = [
  {
    title: "Educational Institutions",
    content: [
      { name: "VIBGYOR School", time: "3 mins." },
      { name: "New Baldwin International School", time: "5 mins." },
      { name: "Indus Valley Residential School", time: "5 mins." },
      { name: "Garden City College", time: "5 mins." },
      { name: "Cambridge School", time: "5 mins." },
      { name: "National Public School", time: "3 mins." },
    ],
  },
  {
    title: "Hospitals",
    content: [
      { name: "Sathya Sai Multipeciality Hospital", time: "3 mins." },
      { name: "East Point Hospital", time: "5 mins." },
      { name: "Narayana Multipeciality Hospital", time: "20 mins." },
      { name: "Vydehi Hospital", time: "20 mins." },
      { name: "Manipal Hospital", time: "15 mins." },
    ],
  },
  {
    title: "Business Parks",
    content: [
      { name: "BGRT Tech Park", time: "5 mins." },
      { name: "RMZ Infinity", time: "18 mins." },
      { name: "International Tech Park (ITPL)", time: "25 mins." },
      { name: "GR Tech Park", time: "25 mins." },
      { name: "Bagmane Tech Park", time: "22 mins." },
      { name: "Google Ananta", time: "22 mins." },
    ],
  },
  {
    title: "Retail & Entertainment",
    content: [
      { name: "Decathlon", time: "4 mins." },
      { name: "Royal Oak", time: "7 mins." },
      { name: "Phoenix Marketcity", time: "20 mins." },
      { name: "Orion Uptown Mall", time: "6 mins." },
      { name: "Gopalan Signature Mall ", time: "15 mins." },
      { name: "Zudio", time: "2 mins." },
    ],
  },
  {
    title: "Connectivity",
    content: [
      { name: "Kempegowda International Airport", time: "35 mins." },
      { name: "KR Puram Railway Station", time: "10 mins." },
      { name: "Bangalore - Chennai Expressway", time: "8 mins." },
      { name: "ORR", time: "10 mins." },
      { name: "Sir M. Visvesvaraya Terminal", time: "18 mins." },
      { name: "Tin Factory(Benniganahalli) Metro Station", time: "10 mins." },
      { name: "Whitefield (Kadugodi) Metro", time: "10 mins." },
    ],
  },
];

// Reusable component for the up/down arrow
const AccordionArrow = ({ isOpen }) => (
  <svg
    className={`w-4 h-4 transition-transform duration-300 ${
      isOpen ? "rotate-180" : ""
    }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export default function LocationAccordion() {
  // State to track which accordion item is open. Start with the first one (index 0).
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    // If the clicked item is already open, close it. Otherwise, open it.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h2 className="font-playfair text-3xl md:text-4xl text-[#5C0527] tracking-widest mb-8">
        LOCATION
      </h2>
      <div className="space-y-2">
        {accordionData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.title} className="border-b border-gray-200 py-2">
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-playfair text-xl text-gray-800">
                  {item.title}
                </span>
                <AccordionArrow isOpen={isOpen} />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-96 pt-4" : "max-h-0"
                }`}
              >
                <ul className="space-y-3 font-montserrat text-gray-600 pl-2">
                  {item.content.map((place) => (
                    <li
                      key={place.name}
                      className="flex justify-between items-center text-sm"
                    >
                      <span>• {place.name}</span>
                      <span className="flex-shrink-0">{place.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

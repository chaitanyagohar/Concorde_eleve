// app/thank-you/page.js

import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h1 className="text-4xl md:text-5xl font-playfair font-bold text-[#5C0527] mb-4">
        Thank You!
      </h1>
      <p className="font-montserrat text-lg text-gray-700 mb-8 max-w-md">
        Your request for the brochure has been received. Our team will get in touch with you shortly.
      </p>
      <Link href="/" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors">
        Back to Home
      </Link>
    </div>
  );
}
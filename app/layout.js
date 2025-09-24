// app/layout.js

// CSS Imports
import Script from 'next/script'; // 1. IMPORT THE SCRIPT COMPONENT
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './globals.css';

// Font Imports (added Cinzel for the "Evolve Lifestyle" heading)
import { Montserrat, Playfair_Display, Cinzel } from 'next/font/google';

// Component and Context Imports
import { LightboxProvider } from '@/app/context/LightboxContext';
import StickyEnquireButton from '@/components/StickyEnquireButton';

// --- Font Configuration ---
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100','400','700'],
  variable: '--font-montserrat',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-playfair',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-cinzel',
});

// --- Metadata ---
export const metadata = {
  title: 'Concorde Eleve',
  description: 'Real estate project showcase',
};

// --- Root Layout ---
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Added the cinzel variable and set montserrat as the default font */}
      <body className={`${montserrat.className} ${playfair.variable} ${cinzel.variable}`}>
        
        {/* The provider now wraps your entire application */}
        <LightboxProvider>
          {children} {/* This is where your page content will render */}
          <StickyEnquireButton />
        </LightboxProvider>

        <Script 
          strategy="afterInteractive" 
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        />
        <Script 
          id="google-analytics" 
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script> 
         
         
      </body>
    </html>
  );
}
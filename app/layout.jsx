import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import './globals.css';

export const metadata = {
  title: 'Properti Cahaya Alif Medal | Cupu, Bahuan & Limus Lestari',
  description:
    'Jelajahi properti Cahaya Alif Medal di Cupu Mekar Indah, Bahuan Mekar Indah, dan Limus Lestari. Lihat tipe, denah, dan harga, lalu konsultasi melalui WhatsApp.',
  verification: {
    google: 'ctuGzMGoc-BLsx3LF-dggUu-3wghvPBf5m8DU15hLRU',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,700;9..144,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body id="top">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KN9KW74G"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1SFRCN0VGZ"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics-tag" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.gtag = function(){window.dataLayer.push(arguments);};
window.gtag('js', new Date());
window.gtag('config', 'G-1SFRCN0VGZ');`}
        </Script>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KN9KW74G');`}
        </Script>
        <SpeedInsights />
      </body>
    </html>
  );
}

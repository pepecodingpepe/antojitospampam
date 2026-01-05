import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ['100','200','300','400','500','600','700','800','900'],
  display: 'swap',
});

export const metadata = {
  title: "Antojitos Pam Pam",
  description: "Antojitos Pam Pam",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
           <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>

          {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-QC44RBPR53" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QC44RBPR53');`}
        </Script>


      
      <body
        className={`${lexend.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

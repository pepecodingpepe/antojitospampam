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
    <html lang="en">
      <body
        className={`${lexend.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

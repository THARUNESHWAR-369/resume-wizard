import "@styles/globals.css";
import "@styles/landing_page/landing_page_mediaquery.css";
import "@styles/landing_page/landing_page.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Footer from "@components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_METADATA_TITLE,
  description: process.env.NEXT_PUBLIC_APP_METADATA_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
{children}
        <Footer />
      </body>
    </html>
  );
}

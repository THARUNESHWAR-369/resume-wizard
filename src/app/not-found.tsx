
import Base_Nav from "@/components/base/_base_nav";
import { EbuttonCss } from "@/constant/constant";
import Link from "next/link";

export default function Custom404() {
  return (
    <section className="mb-0">
      <Base_Nav />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col items-center">
          

            <p className="mb-4 text-sm font-semibold uppercase text-foreground-accent-color-3 md:text-base">That’s a 404</p>
            <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">Page not found</h1>

            <p className="mb-12 max-w-screen-md text-center text-gray-500 md:text-lg">The page you’re looking for doesn’t exist.</p>

            <Link href="/" className={`${EbuttonCss.GRADIENT_BTN_CSS} items-center align-middle flex`}>Go home</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

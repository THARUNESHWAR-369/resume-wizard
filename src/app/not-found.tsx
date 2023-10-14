"use client";

import Base_Nav from "@/components/base/_base_nav";
import Link from "next/link";

export default function Custom404() {
  return (
    <section className="mb-0">
      <Base_Nav />
      <div className="custom-404-container w-full h-[100vh] max-h-[50vh] flex flex-col justify-center align-middle items-center">
        <h1>404 - Page Not Found</h1>
        <p>
          Redirect to{" "}
          <Link className="underline text-blue-500" href={"/"}>
            Home
          </Link>
        </p>
      </div>
    </section>
  );
}

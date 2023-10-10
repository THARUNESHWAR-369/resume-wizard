"use client";

import Image from "next/image";
import googleImg from "@public/images/accounts/google.png";
import React from "react";
import Base_Nav from "@components/base/_base_nav";
import { useRouter } from "next/navigation";

export default function Home() {
  // const authSignup = new AuthSignup();

  return (
    <section className="mb-0">
      <Base_Nav />

      <div className="mt-5 accounts-signin-google max-w-[25em] border-2 p-2 w-fit h-fit flex justify-center align-middle items-center rounded-full gap-2 cursor-pointer m-auto hover:border-foreground-accent-color-3 duration-300 transition-colors">
        <Image
          src={googleImg}
          alt="google-auth"
          className="w-[2em] items-center align-middle flex justify-center h-[2em] rounded-md "
        />
        <p className="font-semibold tracking-wider text-center">Login & Register with Google</p>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import googleImg from "@public/images/accounts/google.png";
import React, { useLayoutEffect, useEffect } from "react";
import { useAuth } from "@/hook/context/auth-context";
import {useRouter} from "next/navigation";

function GoogleOAuthBtn() {
  const { user, loginWithGoogle, error } = useAuth();

  const router = useRouter();

  useEffect(() => {
    console.log("use layout effect", error, user);
    if (error) {
      console.log(error);
    }
    if (user) {
      console.log(user);
      router.push("/dashboard");
    }
  }, [error, router, user]);

  return (
    <div
      onClick={() => {
        loginWithGoogle();
      }}
      className="mt-5 accounts-signin-google max-w-[25em] bg-white border-2 p-2 w-fit h-fit flex justify-center align-middle items-center rounded-full gap-2 cursor-pointer m-auto hover:border-foreground-accent-color-3 duration-300 transition-colors"
    >
      <Image
        src={googleImg}
        alt="google-auth"
        className="w-[2em] items-center align-middle flex justify-center h-[2em] rounded-md "
      />
      <p className="font-semibold tracking-wider text-center">
        Login & Register with Google
      </p>
    </div>
  );
}

export default GoogleOAuthBtn;

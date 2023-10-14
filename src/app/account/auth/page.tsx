import React from "react";
import Base_Nav from "@/components/base/_base_nav";
import GoogleOAuthBtn from "@/components/account/auth/GoogleOAuthBtn";

export default function AuthPage() {
  return ( 
      <section className="mb-0">
        <Base_Nav />
        <GoogleOAuthBtn />
      </section>
  );
}

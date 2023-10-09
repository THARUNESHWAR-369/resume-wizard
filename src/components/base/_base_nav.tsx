import React from "react";
import Image from "next/image";
import logo from "@public/images/logo/logo2.png";

function Base_Nav() {
  return (
    <section className="navigation mb-0 flex justify-center" >
      <nav className="py-3 flex flex-row justify-between sm:max-sm:px-3">
        <div className="nav-logo flex flex-row w-fit align-middle items-center gap-[0.3em] cursor-pointer" onClick={(e) => { window.location.href = "/"; }}>
          <div className="logo-image-link w-10 h-12 flex justify-center items-center">
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={100}
              loading="lazy"
              className="object-contain"
            />{" "}
          </div>
          <div className="nav-app-name w-fit flex flex-col leading-[1em] justify-center items-center font-bold">
            <h4>Resume</h4>
            <h4>Wizard</h4>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Base_Nav;

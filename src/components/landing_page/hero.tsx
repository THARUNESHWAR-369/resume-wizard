
import React from 'react'
import Image from "next/image";
import logo from "@public/images/logo/logo2.png";
import heroImg from "@public/images/hero/hero.png";

export const Hero = () => {
  return (
    <section className="hero h-fit mb-3">
      <div className="hero-container pt-[1em] relative">
        <div className="hero-logo absolute mt-[1em]">
          <div className="nav-logo flex flex-row w-fit align-middle items-center gap-[0.3em]">
            <div className="logo-image-link w-10 h-12 flex justify-center items-center shadow-box-shadow-1">
              <Image
                src={logo}
                alt="Logo"
                width={100}
                height={100}
                loading="lazy"
                className="object-contain"
              />
            </div>
            <div className="nav-app-name w-fit flex flex-col leading-[1em] justify-center items-center font-bold">
              <h4>Resume</h4>
              <h4>Wizard</h4>
            </div>
          </div>
        </div>
        <div className="hero-container py-3 flex justify-between gap-2">
          <div className="hero-text ">
            <div className="hero-text-container absolute transform translate-y-1/2">
              <h1 className="text-black text-6xl font-bold text-shadow-25 max-w-[11em]">
                Create Your Professional Resume with Ease
              </h1>

              <h4 className="text-foreground-accent-color-2 font-semibold text-4xl text-shadow-2  max-w-[14em]">
                Impress Employers with Well-Designed Resumes
              </h4>
              <button className="border-foreground-accent-color-3 text-foreground-accent-color-3 border-[3px] p-1 px-2 font-bold rounded-full my-5 hover:text-white hover:bg-foreground-accent-color-4 hover:border-foreground-accent-color-4 transition duration-300 max-xl370:box-shadow-35">
                Get Started
              </button>
            </div>
          </div>
          <div className="hero-img overflow-clip w-full hero-box-shadow max-w-[35em]">
            <Image src={heroImg} alt="heroImg" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
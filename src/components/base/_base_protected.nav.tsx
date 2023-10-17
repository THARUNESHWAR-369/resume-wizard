"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import logo from "@public/images/logo/logo2.png";
import { useAuth } from "@/hook/context/auth-context";
import { useRouter } from "next/navigation";
import Link from "next/link";

function BaseProtectedNav() {
  const { user, logout, error } = useAuth();

  const [navProfilePicDropdown, setNavProfilePicDropdown] =
    useState<boolean>(false);

  const [profilePic, setProfilePic] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");

  const router = useRouter();

  useMemo(() => {
    if (error) {
      console.log(error);
    }
    if (!user) {
      router.push("/account/auth");
    }
    if (user) {
      setProfilePic(user.photoURL ?? "");
      setDisplayName(user.displayName ?? "");
    }
  }, [error, router, user]);

  return (
    <section className="navigation mb-0 ">
      <nav className="py-3 flex flex-row justify-between sm:max-sm:px-3 align-middle">
        <div className="left-base-protected-nav left">
          <div
            className="nav-logo flex flex-row w-fit align-start items-center gap-[0.3em] cursor-pointer"
            onClick={(e) => {
              window.location.href = "/";
            }}
          >
            <div className="logo-image-link w-10 h-12 flex justify-center items-center">
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

        <div className="right-base-protected-nav right flex flex-row gap-4 align-middle items-center">
          <div className="nav-bar-profile-desktop-screen max-md:hidden">
            <button
              onClick={() => {
                window.location.href = "/dashboard/create-resume";
              }}
              className="bg-gradient-to-tr z-10 from-foreground-accent-color-1 via-foreground-accent-color-2 to-foreground-accent-color-3 text-white px-3 rounded-md h-[2.5em] font-medium hover:opacity-70"
            >
              <strong className="font-bold">+</strong> Create
            </button>
          </div>
          <div className="profile-container flex flex-col justify-center align-middle items-center relative">
            <div className="nav-bar-profile rounded-full border-[3px] border-foreground-accent-color-2">
              <Image
                src={`${profilePic}`}
                alt={displayName}
                width={50}
                height={50}
                loading="lazy"
                className="rounded-full border-[3px] border-white cursor-pointer"
                onClick={(e) => {
                  setNavProfilePicDropdown(!navProfilePicDropdown);
                }}
              />
            </div>
            <div
              className={`nav-bar-profile-dropdown absolute top-[4.5em] z-22 before:content=[''] before:block before:transform before:rotate-45 before:right-3 before:-top-1 before:w-[25px] before:h-[25px] before:bg-white before:-z-15 before:absolute before:box-shadow-3 bg-white max-w-[10em] transition-all duration-300 box-shadow-2 w-[15em] right-1 rounded-md ${navProfilePicDropdown ? "block" : "hidden "
                }`}
            >
              <div className="nav-bar-profile-dropdown-container h-[100%] p-[0.5em] flex flex-col justify-center align-middle items-center z-2">
                <div className="nav-bar-profile-dropdown-mobile-screen z-10 hidden max-md:block">
                  <button
                    onClick={() => {
                      window.location.href = "/dashboard/create-resume";
                    }}
                    className="bg-gradient-to-tr z-10 from-foreground-accent-color-1 via-foreground-accent-color-2 to-foreground-accent-color-3 text-white px-3 rounded-md h-[2.5em] font-medium hover:opacity-70"
                  >
                    <strong className="font-bold">+</strong> Create
                  </button>
                  <div className="divider"></div>
                </div>
                <h6
                  onClick={() => {
                    logout();
                  }}
                  className="text-center flex justify-center align-middle h-full cursor-pointer font-bold flex-col hover:bg-white/50 dark:text-foreground-accent-color-3 dark:hover:text-foreground-accent-color-2 hover:text-foreground-accent-color-2"
                >
                  Logout
                </h6>
                <div className="divider"></div>

                <Link className="text-center flex justify-center align-middle h-full cursor-pointer font-bold flex-col hover:bg-white/50 dark:text-foreground-accent-color-3 dark:hover:text-foreground-accent-color-2 hover:text-foreground-accent-color-2"
                  href="/dashboard/settings">Settings</Link>
              </div>
              {/* <span className="w-[25px] h-[25px] bg-white box-shadow-35 -z-20 absolute transform rotate-45 right-3 -top-1"></span> */}
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default BaseProtectedNav;

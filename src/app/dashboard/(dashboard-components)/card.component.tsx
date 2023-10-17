"use client";

import React from "react";
import Image from "next/image";
import { EbuttonCss } from "@/constant/constant";
import { useRouter } from "next/navigation";

function CardComponent({ templateData }: any) {

  const router = useRouter();

const handleClick = ()=>{
  router.push(`/dashboard/create-resume/template/${templateData.id}`)
};

  return (
    <div className="card bg-white p-2 rounded-md w-[15em] max-w[16em] transition-all duration-300">
      <div className="card-content">
        <div className="card-img-container w-[100%] h-[15em] overflow-hidden">
          {templateData ? (
            <Image
              src={templateData.img}
              alt={templateData.name}
              width={100}
              height={100}
              quality={100}

              unoptimized
              className="w-[100%] h-[100%] object-cover rounded-md box-shadow-1 bg-cover transition-transform duration-500 scale-125"
            ></Image>
          ) : (
            <div className="w-[100%] h-[100%] object-cover rounded-md box-shadow-1 bg-[#dddddd36] flex justify-center items-center align-middle">
              <h6>Coming soon...</h6>
            </div>
          )}
        </div>
        <div className="card-details font-bold text-center py-3">
          <h6>{templateData ? templateData.name : "..."}</h6>
          <button className={templateData ? EbuttonCss.GRADIENT_BTN_CSS : "text-[1em] tracking-wider bg-gradient-to-tr z-10 from-slate-600 via-slate-500 to-slate-400 text-white px-3 rounded-md h-[2.5em] font-medium"} onClick={handleClick}>
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;

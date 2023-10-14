"use client";

import ButtonObject from "@/components/objects/button.object";
import React, { useLayoutEffect } from "react";
import { buttonCss } from "@/constant/constant";
import { useAuth } from "@/hook/context/auth-context";
import { useRouter } from "next/navigation";

function Dashboard() {

  const {user, logout} = useAuth();
  const router = useRouter();

  useLayoutEffect(() => {
    if (!user) {
      router.push("/account/auth");
    }
  }, []);

  const logoutHandler = async () => {
    await logout();
    router.push("/account/auth");
  }


  return (
      <section>
        <div>Dashboard</div>
        <ButtonObject btnCss={buttonCss.LOGOUT_CSS} props={{onClick: logoutHandler}}>Logout</ButtonObject>
      </section>
  );
}

export default Dashboard;

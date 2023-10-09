"use client";
import React, { useState, useEffect, FormEvent } from "react";
import Base_Nav from "@components/base/_base_nav";
import CenterBoxObj from "@components/objects/centerBoxObj";
import IValidateCallback from "./interface/signup.interfaces";
import {
  Signup_GoToNextObject,
  Signup_getElement,
} from "./constant/signupConstant";
import AuthSignup from "./model/signup";
import {
  InputEmailValidationOnChange,
  InputPasswordValidationOnChange,
  InputUsernameValidationOnChange,
} from "./functions/signupFunctions";
import { ESignupConstant } from "./enum/singup.enum";
import { emailObject } from "./object/email-box.obj";
import { passwordObject } from "./object/password-box.obj";
import { usernameObject } from "./object/username-box.obj";
import { RegistrationType } from "src/constants/auth-constants/auth.constant.interface";
import { useRouter } from "next/navigation";
import { useAuth } from "src/hooks/context/AuthContext";

export default function Home() {
  // const authSignup = new AuthSignup();

  const [data, setData] = useState<RegistrationType>({
    email: "",
    password: "",
    username: "",
  });

  const { signUp } = useAuth();
  const router = useRouter();

  // Destructure data from the data object
  const { ...allData } = data;

  // Disable submit button until all fields are filled in
  const canSubmit = [...Object.values(allData)].every(Boolean);

  console.log("\n\ncanSubmit: ", canSubmit  );

  const validate: IValidateCallback = async (id: string, onClick = false) => {
    if (id === ESignupConstant.INPUT_EMAIL) {
      if (InputEmailValidationOnChange(id) === true && onClick === true) {
        const emailElement = Signup_getElement(id);
        if (emailElement) {
          // authSignup.setEmail(emailElement.value);
          setData({
            ...data,
            email: emailElement.value,
          });
          Signup_getElement(id).setAttribute("disabled", "true");
          Signup_GoToNextObject("show-username-obj", "show-email-obj");
        }
      }
    }
    if (id === ESignupConstant.INPUT_PASSWORD) {
      if (InputPasswordValidationOnChange(id) === true && onClick === true) {
        const passwordElement = document.getElementById(id) as HTMLInputElement;
        if (passwordElement) {
          //authSignup.setPassword(passwordElement.value);
          setData({
            ...data,
            password: passwordElement.value,
          });

          try {
            await signUp(data.email, passwordElement.value);
            router.push('/dashboard');
          }catch(error:any) {
            console.log(error.message);
          }
          console.log("Data: ", data);

          // const user = authSignup.signup();

          // user.then((userData) => {
          //   console.log("userData: ", userData);
          // });
        }
      }
    }
    if (id === ESignupConstant.INPUT_USERNAME) {
      if (InputUsernameValidationOnChange(id) === true && onClick === true) {
        const usernameElement = document.getElementById(id) as HTMLInputElement;
        if (usernameElement) {
          //authSignup.setUsername(usernameElement.value);
          setData({
            ...data,
            username: usernameElement.value,
          });
          Signup_getElement(id).setAttribute("disabled", "true");
          Signup_GoToNextObject("show-password-obj", "show-username-obj");
        }
      }
    }
  };

  return (
    <section className="mb-0">
      <Base_Nav />
      <main className="w-full h-full max-w-[68em] m-auto max-md:max-w-full">
        <div className="show-email-obj" id="show-email-obj">
          <CenterBoxObj>{emailObject(validate)}</CenterBoxObj>
        </div>
        <div className="show-username-obj hidden" id="show-username-obj">
          <CenterBoxObj>{usernameObject(validate)}</CenterBoxObj>
        </div>
        <div className="show-password-obj hidden" id="show-password-obj">
          <CenterBoxObj>{passwordObject(validate, canSubmit)}</CenterBoxObj>
        </div>
      </main>
    </section>
  );
}


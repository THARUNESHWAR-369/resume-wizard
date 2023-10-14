"use client";

import {
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { fb_auth, googleAuthProvider } from "src/firebase/firebase.config";
import { redirect } from "next/navigation";

export async function OAuthGoogleWithPopup() {
  // signInWithPopup(fb_auth, googleAuthProvider)
  //   .then((result : any) => {
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential?.accessToken;
  //     const user = result.user;

  //     console.log("User + token: ", user, token);
  //   })
  //   .catch((error:any) => {

  //     console.log("errorMessage: ", error);
  //   });
  try {
    const userCred = await signInWithPopup(fb_auth, googleAuthProvider);
    return {
      user: userCred.user,
    };
  } catch (e: any) {

    return {
      error: e.message,
    };
  }
}

export async function OAuthGoogleWithRedirect() {
  // signInWithRedirect(fb_auth, googleAuthProvider)
  //   .then((result: any) => {
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential?.accessToken;
  //     const user = result.user;

  //     console.log("User + token: ", user, token);
  //   })
  //   .catch((error:any) => {

  //     console.log("errorMessage: ", error);
  //   });

  try {
    const userCred = await signInWithRedirect(fb_auth, googleAuthProvider);
    return {
      user: userCred,
    };
  } catch (e: any) {
    return {
      error: e.message,
    };
  }
}

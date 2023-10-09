import { metadata } from "./../../../layout";
import {  fb_auth } from "src/firebase_config/config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

class AuthSignup {
  private email: string;
  private password: string;
  private username: string;
  constructor() {
    this.email = "";
    this.password = "";
    this.username = "";
  }

  setEmail(email: string) {
    this.email = email;
  }
  setPassword(password: string) {
    this.password = password;
  }
  setUsername(username: string) {
    this.username = username;
  }
  getEmail() {
    return this.email;
  }
  getPassword() {
    return this.password;
  }
  getUsername() {
    return this.username;
  }
  async signup() {
    console.log("signup");
    console.log("email: ", this.email);
    console.log("password: ", this.password);
    console.log("username: ", this.username);

    const auth = getAuth();

    try {
      const signup = await createUserWithEmailAndPassword(
        auth,
        this.email,
        this.password
      );
      console.log(signup.user);
      return {
        status: true,
        statusCode: 200,
        error: signup.user,
      };
    } catch (e: any) {
      const errorObj = e.customData._tokenResponse.error;
      return {
        status: false,
        statusCode: errorObj.code,
        error: errorObj.message,
      };
    }
    //   .then((credentials) => {
    //     const user = credentials.user;
    //     console.log(user);
    //     return {
    //       status: false,
    //       statusCode: 200,
    //       error: user,
    //     };
    //   })
    //   .catch((error) => {
    //     return {
    //       status: false,
    //       statusCode: error.code,
    //       error: error.message,
    //     };
    //   });

    // FirebaseError {
    // code: 'auth/email-already-in-use',
    // customData: {
    //   appName: '[DEFAULT]',
    //   _tokenResponse: {
    //     error: {
    //       code: 400,
    //       message: 'EMAIL_EXISTS',
    //       errors: [
    //         {
    //           message: 'EMAIL_EXISTS',
    //           domain: 'global',
    //           reason: 'invalid'
    //         }
    //       ]
    //     }
    //   }
    // },
    // name: 'FirebaseError',
    // stack: 'Firebas
  }
}

export default AuthSignup;

import { signOut } from 'firebase/auth';
import { OAuthGoogleWithPopup, OAuthGoogleWithRedirect } from "./oauth2/google-oauth"
import { fb_auth } from 'src/firebase/firebase.config';



export const FirebaseAuthService = {
    loginWithGoogle : async () => {
        return await OAuthGoogleWithPopup();
    },

    logout: async () => {
        await signOut(fb_auth);
    }
}
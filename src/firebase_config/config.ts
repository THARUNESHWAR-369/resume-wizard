//import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://zmhpcjzetiopqaymciso.supabase.co";
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export { supabase };


import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

if (!getApps().length) {
 initializeApp(firebaseConfig);
}
export const fb_db = getFirestore();
export const fb_auth = getAuth();

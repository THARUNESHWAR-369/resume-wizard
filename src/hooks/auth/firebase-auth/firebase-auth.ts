import { error } from "console";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { fb_auth } from "src/firebase_config/config";


export default function firebase_signup(email: string, password: string, username: string)  {
const user = createUserWithEmailAndPassword(fb_auth, email, password);
user.then((userCredential) => {
    const user = userCredential.user;
    return updateUserObject(user, {displayName: username});
}).catch((error) => {
    new Error(error.message)
})
}

function updateUserObject(user: any, data: any) {
    updateProfile(user, data).then(() => {
        console.log("user created")
    }).catch((error) => {
        new Error(error.message)
    })
}
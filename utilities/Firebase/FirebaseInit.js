import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";

const initializeAuthentication=()=>{
    initializeApp(firebaseConfig)
}
export default initializeAuthentication;
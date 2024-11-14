import axios from "axios";
import { api_key } from "../keys";


export async function signupUser({email,password}){
    const url =`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${api_key}`;
    const response = await axios.post(url,{
        email:email,
        password:password,
        returnSecureToken:true,
    })
    const token= response.data.idToken;
    return token;
}
export async function loginUser({email,password}) {
    const url =`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${api_key}`;
    const response = await axios.post(url,{
        email:email,
        password:password,
        returnSecureToken:true,
    })
    const token= response.data.idToken;
    return token;
}
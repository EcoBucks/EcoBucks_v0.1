"use server"

import { cookies } from "next/headers"

export const Token = async () => {
    try {
        const cookie = cookies()
        
        const token = cookie.get('token')
        
        if(!token) throw new Error("not authorized")

        // console.log(token);
        return token
        
    } catch (error) {
        console.log(error);    
        return error
    }
  
}

// export const Token = cookie.get("token") 
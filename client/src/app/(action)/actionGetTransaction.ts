"use server"

import { URL } from "@/db/config/url";
import { allTrans } from "@/db/models/uco"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const Transaction = async (props: string) => {
    try {
      const response = await fetch(`${URL}api/transaction?role=${props}`, {
        method: "GET",
        cache: "no-cache",
        headers: {
          Cookie: cookies().toString()
        }
      });
  
      const resjson = await response.json();
      // Process resjson as needed
  
      // Redirect after data processing
    //   redirect('http://localhost:3000/user');
      return resjson;    // Return the fetched data before the redirect
  
    } catch (error) {
      console.error("Error in transaction:", error);
      throw error; // Throw the error to handle it in the calling code
    }
  };
  


"use server";
import CryptoJS from "crypto-js";
import { getUser } from "./actionGetUser";
import { userModel } from "@/db/models/user";
import { URL } from "@/db/config/url";
export const handleClick = async () => {
  type dataUser = {
    statusCode: string;
    message: string;
    data: userModel;
  };
  const data = (await getUser()) as dataUser;

  // console.log(data, '========');

  const price = data.data.walletBalance.toString();
  const email = data.data.email;
  const name = data.data.name;

  // adjust with your iPaymu api key & va
  const apikey = "QbGcoO0Qds9sQFDmY0MWg1Tq.xtuh1";
  const va = "1179000899";
  const url = "https://sandbox.ipaymu.com/api/v2/payment"; // development mode
  // const url = 'https://my.ipaymu.com/api/v2/payment'; // for production mode

  const body = {
    product: ["uco"],
    qty: ["1"],
    price: [price],
    amount: "10000",
    returnUrl: `${URL}thankyu`, // your thank you page url
    cancelUrl: `${URL}cancel`, // your cancel page url
    notifyUrl: `${URL}`, // your callback url
    referenceId: "1234", // your reference id or transaction id
    buyerName: name, // optional
    buyerPhone: "08123456789", // optional
    buyerEmail: email, // optional
    //   feeDirection: "MERCHANT"
  };

  // generate signature
  const bodyEncrypt = CryptoJS.SHA256(JSON.stringify(body));
  const stringtosign = `POST:${va}:${bodyEncrypt}:${apikey}`;
  const signature = CryptoJS.enc.Hex.stringify(
    CryptoJS.HmacSHA256(stringtosign, apikey)
  );

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        va: va,
        signature: signature,
        timestamp: "20150201121045",
      },
      body: JSON.stringify(body),
    });

    const responseJson = await response.json();
    // Handle response data here (e.g., update state, display response, etc.)
    // console.log(responseJson, "==========");

    return responseJson.Data.Url;

    //   redirect(responseJson.Data.Url)
    // window.location.href = responseJson.Data.Url ;
  } catch (error) {
    // Handle errors (e.g., network errors, API errors, etc.)
    console.error("Error occurred:", error);
  }
};

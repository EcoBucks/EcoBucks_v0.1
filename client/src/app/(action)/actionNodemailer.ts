"use server";

import { toast } from "sonner";
import { transporter } from "@/config/nodemailer";
import { userModel } from "@/db/models/user";
import { getUser } from "./actionGetUser";

const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <style>
    body {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }

    .container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      box-sizing: border-box;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      margin-top: 20px;
    }

    h1 {
      color: #167a4c;
      margin-bottom: 20px;
    }

    .logo {
      display: block;
      margin: 0 auto;
      max-width: 100%;
      height: auto;
      margin-bottom: 20px;
    }

    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #167a4c;
      color: #ffffff;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    .button:hover {
      background-color: #aa16ce;
    }
  </style>
</head>
<body>
  <div class="container w-[40%] flex flex-col gap-y-2">
    <img
      src="https://ik.imagekit.io/9nm0rr5hka/EcoBucks_Horizontal_Logo.png?updatedAt=1702870154663"
      alt="Logo Perusahaan"
      class="logo w-[200px]"
    />
    <h1 class="text-[20px] font-bold">Greeting to EcoUsers!</h1>
    <p class="text-[16px]">
      <u>Welcome to EcoBucks,</u> your ultimate eco-friendly hub
      revolutionizing the way we think about waste! 🌍💰
    </p>
    <p><strong>💡How It Works:</strong></p>
    <ul>
      <li>
      Collect Your Waste: Gather your used cooking oil, recyclables,
      and other waste.
      </li>
      <li>
        Request a Pickup: With a few taps, schedule a convenient pickup
        time. Our friendly EcoBucks team will come to your doorstep!
      </li>
      <li>
        Earn EcoBucks: As a token of appreciation for your eco-conscious
        efforts, we reward you with EcoBucks – our virtual currency that can
        be exchanged for real money.
      </li>
    </ul>
    <p><b>🌐 Community Collaboration: </b></p>
    <p>
      <b>EcoBucks</b> brings people together for a
      common cause. Join a network of environmentally conscious individuals,
      schools, businesses, and organizations committed to making a positive
      difference.
    </p>

    <a href="http://localhost:3000/" class="button text-center mt-6" style="color:white"
      >Get More Information</a
    >
  </div>
</body>
</html>
`;

export const subs = async (formData: FormData) => {
  // console.log(formData);
  const email = formData.get("email");

  if (!email) {
    throw "error";
  }
  // console.log(email);
  transporter.sendMail(
    {
      from: `EcoBucks <${email}>`,
      to: email.toString(),
      subject: "Thanks For Subscribe EcoBucks",
      html: htmlTemplate,
    },
    (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    }
  );
};

export const ucoPay = async (url: string) => {
  type dataUser = {
    statusCode: string;
    message: string;
    data: userModel;
  };
  const data = (await getUser()) as dataUser;

  // console.log(data.data.email, "=====email user======");
  // console.log(url, "=====dari nodemailor=====");

  const emailUser = data.data.email;

  const email = "ecobucks08@gmail.com";
  const link = url;

  transporter.sendMail(
    {
      from: `EcoBucks user <${emailUser}>`,
      to: email.toString(),
      subject: "bayar cokkk",
      text: `nihlink: ${link} email: ${emailUser} `,
      // html: htmlTemplate,
    },
    (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    }
  );
};

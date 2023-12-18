import nodemailer from "nodemailer";
const user = "ecobucks08@gmail.com" || process.env.USER_EMAIL;
const pass = "hvdr cjcy fnuu okiq" || process.env.USER_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user,
    pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

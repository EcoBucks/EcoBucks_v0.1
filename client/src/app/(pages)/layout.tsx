import type { Metadata } from "next";

import "../globals.css";
import { Inter, Raleway, DM_Sans } from "next/font/google";
import { UserLocationProvider } from "@/context/GlobalContext";
import NavbarComponent from "@/components/Navbar";

import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const dm_sans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "EcoBucks",
  description: "Where Green Actions Earn Green Rewards",
  icons: {
    icon: "/EcoBucks_FavIcon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body
        className={`${inter.variable} ${raleway.variable} ${dm_sans.variable} bg-eb-50`}
      >
        <div className={inter.className}>
          <NavbarComponent />
          <UserLocationProvider>
            {children}
            <Toaster expand={false} position="top-center" richColors />
          </UserLocationProvider>
        </div>
      </body>
    </html>
  );
}

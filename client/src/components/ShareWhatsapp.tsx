"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ShareWhatsapp = () => {
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  //   console.log(url);

  return (
    <>
      <Link
        href={`whatsapp://send?text=Minyak Jelantah Jadi Berkah - ${url}`}
        data-action="share/whatsapp/share"
        target="_blank"
        className="flex items-center bg-[#052E1B] text-white rounded-md p-3"
      >
        Share to WhatsApp
      </Link>
    </>
  );
};

export default ShareWhatsapp;

"use client";

import { Marker } from "@react-google-maps/api";
import React from "react";

export default function MarkerCollecting({
  lat,
  lng,
}: {
  lat: number;
  lng: number;
}) {
  return (
    <div>
      <Marker position={{ lat: lat, lng: lng }} />
    </div>
  );
}

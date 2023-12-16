"use client";

import { createContext, useEffect, useState } from "react";

export const UserLocationContext = createContext([]);
export const UserLocationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userLocation, setUserLocation] = useState<any>(null);

  const getUserLocation = (): void => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <UserLocationContext.Provider value={userLocation}>
      {children}
    </UserLocationContext.Provider>
  );
};

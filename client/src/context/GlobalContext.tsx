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
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
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

export const UserWalletContext = createContext([]);
export const UserWalletProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userWallet, setUserWallet] = useState<any>(null);

  const getUserLocation = (): void => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <UserWalletContext.Provider value={userWallet}>
      {children}
    </UserWalletContext.Provider>
  );
};

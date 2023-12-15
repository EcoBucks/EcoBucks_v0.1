"use server"

export const fetchProvince = async () => {
    try {
      const response = await fetch("http://localhost:3001/provinces", {
        cache: "no-store",
      });
      const responseJson: string[] = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
    }
  };
import React from "react";

import { Logout } from "@/app/(action)/logout.";
const LogoutButton = () => {
  return (
    <>
      {/* <form action={Logout}></form> */}
      <form action={Logout}>
        <button className=" w-full">Logout</button>
      </form>
    </>
  );
};

export default LogoutButton;

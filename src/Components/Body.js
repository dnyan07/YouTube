import React from "react";
import SideBar from "../Components/SideBar";

import { Outlet } from "react-router";
function Body() {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default Body;

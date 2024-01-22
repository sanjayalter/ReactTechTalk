import React from "react";
import { Sidebar } from "../component/Sidebar";

import { SolidButtons } from "../component/Button";
import { ContentLayout } from "../component/MainContentLayout";
import { useTheme } from "../context/ThemeProvider";
import { UseStateBlog } from "./UseStateBlog";
import { useParams, useLocation } from "react-router-dom";
import { renderComponent } from "../utilities/Utility";

export const Homepage = () => {
  const location = useLocation();
  // console.log(location.pathname);

  const handleClick = () => {
    console.log("Button clicked!");
  };

  const { theme, toggleTheme } = useTheme();

  const sidebarLinks = ["Home", "About", "Contact"];
  const iframeStyle = {
    width: "90%",
    height: "500px",
    border: "0",
    borderRadius: "4px",
    overflow: "hidden",
  };
 

  
  return (
    <div class="flex flex-col lg:flex-row">
      <div class="">
        <Sidebar />
      </div>

      <div class="w-full lg:w-3/4 p-4 relative  ">
        <div class="float-right theme-container mb-10">
          <SolidButtons ClickFun={toggleTheme}>
            {theme == "light" ? "Switch To Dark Mode" : "Switch To Light Mode"}{" "}
          </SolidButtons>
        </div>

        <div>{renderComponent(location.pathname)}</div>
      </div>
    </div>
  );
};

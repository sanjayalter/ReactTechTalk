import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import { Sidebar } from "./component/Sidebar";

import { SolidButtons } from "./component/Button";
import { ContentLayout } from "./component/MainContentLayout";
import { useTheme } from "./context/ThemeProvider";

function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  const { theme, toggleTheme } = useTheme();

  const gistUrls = [
    { url: "https://gist.github.com/your_gist_id_1" },
    { url: "https://gist.github.com/your_gist_id_2" },
    // Add more URLs as needed for following components
  ];

  const urls = [
    "https://gist.github.com/sanjay-xdr/1fc6e028007facf496685cfd62bfb44e",
    "https://gist.github.com/sanjay-xdr/0c8148bc6a0e3a99dbd1d80a844b751b",
  ];

  const sidebarLinks = ["Home", "About", "Contact"];
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

        <div>
          <ContentLayout heading={"UseState"} description={"useState is a React Hook that lets you add a state variable to your component. "} urls={urls}  />
        </div>

   
      </div>
    </div>
  
  );
}

export default App;

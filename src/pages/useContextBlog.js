import React from "react";

export const UseContextBlog = () => {
    const iframeStyle = {
        width: "90%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      };
  return (
    <>

<div className="m-4 p-2 font-medium bg-gray-900	rounded">
        <h1 className="text-white">
            
         Q.   Why we need UseContext? </h1>

         <p className="text-white">
            
            A. In React, we have a single state object that is passed down from parent to child. This can be cumbersome when we have deeply nested components. We can use the useContext hook to make it easier to pass down the state object to the child components.
            
            </p>

      
      </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe src="https://codesandbox.io/embed/5hqlgv?view=Editor+%2B+Preview&module=%2Fsrc%2FChild.js&hidenavigation=1"
     style={iframeStyle}
     title="PropDrilling"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

        </div>

        <div className="m-4 p-2 font-medium bg-gray-900	rounded"> 
       
       <div className="text-white">
       Wouldn’t it be great if there were a way to “teleport” data to the components in the tree that need it without passing props? With React’s context feature, there is! 
       </div>

        </div>



  
    </>
  );
};

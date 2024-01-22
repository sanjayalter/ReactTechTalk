import React from "react";

export const UseReducerBlog = () => {
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
            
         Similar to <span className="italic text-green-400">Reduce</span> in JS </h1>

         <p className="text-white">
            
            The useReducer hook is similar to the reduce method in JavaScript. It takes in a reducer function and an initial state and returns the current state and a dispatch function. The reducer function takes in the current state and an action and returns the new state.
            
            </p>

      
      </div>


      <div className="m-4 p-2 font-medium bg-gray-900	rounded">

        <h1 className="text-white">Lets Jump to Code</h1>
      </div>




    



  
    </>
  );
};

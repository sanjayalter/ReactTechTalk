import React from "react";

export const UseStateBlog = () => {
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
            
         Q.   What is <span className="italic">State?</span></h1>

         <p className="text-white">
            
            Ans.  In React, Component-specific memory is called state.
            
            </p>

      
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          src="https://codesandbox.io/embed/d6z6j2?view=Editor+%2B+Preview&hidenavigation=1"
          style={iframeStyle}
          title="react.dev"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>


      <div className="m-4 p-2 font-medium bg-gray-900	rounded">
       

       <h2 className="text-white text-xl text-red-600">Issues</h2>

       <div>
        <ul className="list-disc text-white">

            <li>Local variables don't persist between renders</li>
            <li>Changes to local variables won't trigger renders</li>
        </ul>
       </div>
      
      </div>


     






    </>
  );
};

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
        <h1 className="text-white">What is State?</h1>

        <p className="text-white">Components Memory</p>
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
    </>
  );
};

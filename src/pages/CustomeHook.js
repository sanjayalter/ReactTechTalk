import React from "react";

export const CustomHook = () => {
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
                <p className="text-white">Q. What is the need for custom hooks when we already have pre-built hooks?</p>
                <p className="text-white">Ans. 1.Custom hooks helps to reuse logic across components.</p>
                <p className="text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                2. It makes the codebase more maintainable and easy to read.</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <iframe src="https://codesandbox.io/embed/l8n9sq?view=Editor+%2B+Preview"
                    style={iframeStyle}
                    title="react.dev"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </div>
        </>

    );
};



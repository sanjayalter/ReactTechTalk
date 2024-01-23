import React from "react";

export const UseEffectBlog = () => {
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
                <p className="text-white">It is generally used when you want to avoid unnecessary re-renders of your code each time a state changes, making it more efficient by running the specified side effect only when needed.</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <iframe src="https://codesandbox.io/embed/rx8zj6?view=Editor+%2B+Preview&module=%2Fsrc%2FApp.js"
                    style={iframeStyle}
                    title="react.dev"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </div>
            <div className="m-4 p-2 font-medium bg-gray-900	rounded">
                <h1 className="text-white">Clean up code in useEffect</h1>
            </div>
            <div className="m-4 p-2 font-medium bg-gray-900	rounded">
                <h1 className="text-white"> Q.   What is <span className="italic">CleanUp</span> code ?</h1>
                <p className="text-white">
                    Ans.  It is responsible for cleaning up any side effects that affect the code. So, it ensures that everything is in order before the component is unmounted. When a component utilizing the useEffect hook gets unmounted, the useEffect cleanup function is triggered.
                </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <iframe src="https://codesandbox.io/embed/zkrpcj?view=Editor+%2B+Preview"
                    style={iframeStyle}
                    title="react.dev"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </div>
        </>

    );
};



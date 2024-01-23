import React from "react";

export const UseRefBlog = () => {
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
                <p className="text-white">
                    This component uses a ref to keep track of how many times the button was clicked. Note that it’s okay to use a ref instead of state here because the click count is only read and written in an event handler.
                </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <iframe src="https://codesandbox.io/embed/vzfntc?view=Editor+%2B+Preview"
                    style={iframeStyle}
                    title="react.dev"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </div>

            <div className="m-4 p-2 font-medium bg-gray-900	rounded">
                <p className="text-white">
                    Useref is also used to manipulate the <span style={{fontWeight:"bold"}}>DOM</span>
                </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
            <iframe src="https://codesandbox.io/embed/qh887p?view=Editor+%2B+Preview"
                style={iframeStyle}
                title="react.dev"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
            </div>
        </>

    );
};

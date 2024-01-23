import React from "react";

export const UseMemoBlog = () => {
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
                    In this example, the filterTodos implementation is also artificially slowed down so that you can see what happens when some JavaScript function you’re calling during rendering is genuinely slow. Try switching the tabs and toggling the theme.
                </p>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <iframe src="https://codesandbox.io/embed/cns3lp?view=Editor+%2B+Preview&module=%2Fsrc%2FTodoList.js"
                    style={iframeStyle}
                    title="react.dev (forked)"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </div>
        </>

    );
};



import React from "react";

export const UseCallback = () => {
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
                    It helps in optimizing the performance of the application by memoizing the function that is passed as a parameter to it. It is generally used when you want to avoid unnecessary re-renders of your code each time a state changes, making it more efficient by running the specified side effect only when needed.
                </p>
            </div>
            <div className="m-4 p-2 font-medium bg-gray-900	rounded">
                <p className="text-white">
                    Let's understand by little example
                </p>
            </div>

        </>
    );
};

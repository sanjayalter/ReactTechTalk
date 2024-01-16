// BeautifulPage.js
import React from "react";
import Gist from "super-react-gist";

const ContentLayout = ({ heading, urls }) => {
  return (
    <div className="">
      <h1 className="mb-2 font-semibold	 text-2xl	">{heading}</h1>

      <div>
        {urls.map((item) => (
          <>
            <Gist
              url={item}
              LoadingComponent={() => (
                <div className="italic text-gray-400">Waiting for Code...</div>
              )}
            ></Gist>
          </>
        ))}
      </div>
    </div>
  );
};

export { ContentLayout };

// BeautifulPage.js
import React from "react";
import Gist from "super-react-gist";

const ContentLayout = ({ heading,description, urls }) => {
  return (
    <div className="">
      <h1 className="m-4 font-bold	 text-2xl	">{heading}</h1>


<div className="m-4 p-2 font-medium bg-gray-100	 rounded	">
  <p>{description}</p>
</div>
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

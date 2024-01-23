import { ArrowLeft } from "lucide-react";
import React from "react";

export function DefaultPage() {
  return (
    <div className="py-10">
      <div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
          React Tech Talk: Mastering React Hooks
        </h1>
        <p className="mt-4 font-semibold leading-7 text-gray-600 text-medium	">
          Welcome to our React Tech Talk! Join us for an exciting session on
          mastering React Hooks, presented by Anuttar and Sanjay.
        </p>
        <div className="mt-4 gap-x-3">
          <h2 className="mt-4 text-xl font-bold leading-7 text-black-600 text-medium">
            Prerequisites:
          </h2>

          <div className="m-4">
            <ul className="list-disc">
              <li> Familiarity with building simple web pages</li>
              <li>Understanding fundamental JavaScript concepts </li>
              <li>
                Bring your curiosity and eagerness to explore React Hooks{" "}
              </li>
              <li className="underline">
                <a href="https://expensive-chopper-cbf.notion.site/React-Mastering-React-Hooks-add9df83d44a4dd4a9d51bcc9b5ab0c6">
                  Lets Start
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

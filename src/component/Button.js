import * as React from "react";
import { useTheme } from "../context/ThemeProvider";

export function SolidButtons({ ClickFun, children }) {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
      {theme == "light" ? (
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={ClickFun}
        >
          {children}
        </button>
      ) : (
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={ClickFun}
        >
          {children}
        </button>
      )}
    </div>
  );
}

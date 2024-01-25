import { ContentLayout } from "../component/MainContentLayout";
import { DefaultPage } from "../pages/Defaultpage";
import { UseStateBlog } from "../pages/UseStateBlog";
import { UseContextBlog } from "../pages/useContextBlog";
import { UseReducerBlog } from "../pages/useReducerBlog";
import { UseEffectBlog } from "../pages/useEffectBlog";
import { UseMemoBlog } from "../pages/useMemoBlog";
import { UseRefBlog } from "../pages/useRefBlog";
import { CustomHook } from "../pages/CustomeHook";
import { UseCallback } from "../pages/useCallback";

export const renderComponent = (path) => {
  switch (path) {
    case "/useState":
      return (
        <>
          <ContentLayout
            heading={"UseState"}
            description={
              "useState is a React Hook that lets you add a state variable to your component. "
            }
            urls={[]}
          />

          <UseStateBlog />
        </>
      );

    case "/useEffect":
      return (
        <>
          <ContentLayout
            heading={"UseEffect"}
            description={
              "useEffect is a React Hook that lets you synchronize a component with an external system."
            }
            urls={[]}
          />

          <UseEffectBlog />
        </>
      );

    case "/useContext":
      return (
        <>
          {/* please add your useContext data here */}

          <ContentLayout
            heading={"UseContext"}
            description={
              "useContext is a React Hook that lets you read and subscribe to context from your component "
            }
            urls={[]}
          />


          <UseContextBlog />
        </>
      );
    case "/useReducer":
      return (
        <>
          {/* please add your useContext data here */}

          <ContentLayout heading="useReducer" description="useReducer is a React Hook that lets you manage complex state logic in React applications. It is an alternative to useState." urls={[]} />

          <UseReducerBlog />



        </>
      );
    case "/useMemo":
      return (
        <>
          <ContentLayout
            heading={"UseMemo"}
            description={
              "useMemo is a React Hook that lets you cache the result of a calculation between re-renders."
            }
            urls={[]}
          />

          <UseMemoBlog />
        </>
      );

    case "/customHooks":
      return (
        <>
          <ContentLayout
            heading={"Custom Hooks"}
            description={
              "Custom Hooks are a mechanism to reuse stateful logic, but every time you use a custom Hook, all state and effects inside of it are fully isolated."
            }
            urls={[]}
          />

          <CustomHook />
        </>
      );
      case "/useCallback":
      return (
        <>
          <ContentLayout
            heading={"useCallback"}
            description={
              "useCallback is a React Hook that lets you cache a function definition between re-renders."
            }
            urls={[]}
          />

          <UseCallback />
        </>
      );

    case "/useRef":
      return (
        <>
          <ContentLayout
            heading={"UseRef"}
            description={
              "useRef is a React Hook that lets you reference a value that’s not needed for rendering."
            }
            urls={[]}
          />

          <UseRefBlog />
        </>
      );
    default:
      // Render a default component or handle the unknown path case
      return <DefaultPage />;
  }
};

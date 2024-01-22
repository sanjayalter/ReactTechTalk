import { ContentLayout } from "../component/MainContentLayout";
import { DefaultPage } from "../pages/Defaultpage";
import { UseStateBlog } from "../pages/UseStateBlog";
import { UseContextBlog } from "../pages/useContextBlog";
import { UseReducerBlog } from "../pages/useReducerBlog";

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
          {/* please add your UseEffect data here */}
          UseEffect Here
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
          
          <ContentLayout heading="useReducer" description="useReducer is a React Hook that lets you manage complex state logic in React applications. It is an alternative to useState." urls={[]}/>

          <UseReducerBlog/>



        </>
      );
    case "/useMemo":
      return (
        <>
          {/* please add your useContext data here */}
          add useMemo here
        </>
      );

    case "/customHooks":
      return (
        <>
          {/* please add your useContext data here */}
          customHooks Here
        </>
      );

    case "/useRef":
      return (
        <>
          {/* please add your useContext data here */}
          useRef Here
        </>
      );
    default:
      // Render a default component or handle the unknown path case
      return <DefaultPage />;
  }
};

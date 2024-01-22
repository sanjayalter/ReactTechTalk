import { ContentLayout } from "../component/MainContentLayout";
import { UseStateBlog } from "../pages/UseStateBlog";


export  const renderComponent = (path) => {
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
                    useContext Here
                  </>
                );
                case "/useReducer":
                    return (
                      <>
                        {/* please add your useContext data here */}
                        useReducer Here
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
        return <div>Page not found</div>;
    }
  };
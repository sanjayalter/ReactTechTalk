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

      default:
        // Render a default component or handle the unknown path case
        return <div>Page not found</div>;
    }
  };
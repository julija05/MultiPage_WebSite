import { Route } from "react-router-dom";
import Navbar from "../ui/components/Navbar";
import Footer from "../ui/components/Footer";
export const PublicRoute = ({
  component: Component,
  showNavbar = false,
  showFooter = false,
  ...rest
}) => {
  const render = (props) => {
    return (
      <>
        {showNavbar && <Navbar />}
        <>
          <Component {...props} />
        </>
        {showFooter && <Footer />}
      </>
    );
  };

  return <Route {...rest} render={render} />;
};

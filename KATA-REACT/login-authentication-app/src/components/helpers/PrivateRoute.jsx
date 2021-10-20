import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserLoggedContext } from "../../context/userContext";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component }) => {
  // eslint-disable-next-line no-unused-vars
  const { globalUser, setGlobalUser } = useContext(UserLoggedContext);

  return (
    <Route
      render={(props) => {
        console.log("props en PrivateRoute ", props);
        if (Object.keys(globalUser).length === 0) {
          console.log("no hay data en mi globalUser");
          return <Redirect to={{ pathname: "/login" }} />;
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;

// REPASO ...rest
// function suma (a, b, ...rest) {
//  return a+b+rest
// }

// suma(1,6,8,9,16,38,)

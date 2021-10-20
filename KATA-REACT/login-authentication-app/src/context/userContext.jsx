import React, { createContext, useState } from "react";

const UserLoggedContext = createContext();

const UserProvider = (props) => {
  const [globalUser, setGlobalUser] = useState({});

  return (
    <UserLoggedContext.Provider
      value={{ globalUser, setGlobalUser }}
      {...props}
    />
  );
};

export { UserLoggedContext, UserProvider };

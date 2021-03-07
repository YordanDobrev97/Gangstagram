import React from "react";

const LoggedUserContext = React.createContext(false);

export const UserProvider = LoggedUserContext.Provider;
export const UserConsumer = LoggedUserContext.Consumer;

export default LoggedUserContext;

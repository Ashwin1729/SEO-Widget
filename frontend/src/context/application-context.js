import React, { useState, createContext } from "react";

export const AppContext = createContext({
  url: "",
  setUrl: () => {},
  loading: null,
  setLoading: () => {},
});

const AppContextProvider = (props) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const store = {
    url,
    setUrl,
    loading,
    setLoading,
  };

  return (
    <AppContextProvider value={store}>{props.children}</AppContextProvider>
  );
};

export default AppContextProvider;

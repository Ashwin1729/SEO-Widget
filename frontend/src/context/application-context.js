import React, { useState, createContext } from "react";

export const AppContext = createContext({
  url: "",
  setUrl: () => {},
  screenshotUrl: "",
  setScreenshotUrl: () => {},
  loading: null,
  setLoading: () => {},
});

const AppContextProvider = (props) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [screenshotUrl, setScreenshotUrl] = useState("");

  const store = {
    url,
    setUrl,
    screenshotUrl,
    setScreenshotUrl,
    loading,
    setLoading,
  };

  return (
    <AppContext.Provider value={store}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;

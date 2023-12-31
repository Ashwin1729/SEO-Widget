import React, { useState, createContext } from "react";

// Initializing context or application wide state management store
export const AppContext = createContext({
  url: "",
  setUrl: () => {},
  screenshotUrl: "",
  setScreenshotUrl: () => {},
  insightPageData: null,
  setInsightPageData: () => {},
  lighthouseData: null,
  setLighthouseData: () => {},
  loading: null,
  setLoading: () => {},
});

// defining context provider
const AppContextProvider = (props) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [screenshotUrl, setScreenshotUrl] = useState("");
  const [insightPageData, setInsightPageData] = useState(null);
  const [lighthouseData, setLighthouseData] = useState(null);

  const store = {
    url,
    setUrl,
    screenshotUrl,
    setScreenshotUrl,
    insightPageData,
    setInsightPageData,
    lighthouseData,
    setLighthouseData,
    loading,
    setLoading,
  };

  return (
    <AppContext.Provider value={store}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;

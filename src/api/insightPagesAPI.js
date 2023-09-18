import axios from "axios";
import { notifyInvalidUrl } from "../data/toastify-objects";

// insight page API function
const insightPageAPI = async (page_data, setLoading, navigate) => {
  let insightPageData = null;

  try {
    const { data } = await axios.post(
      "https://api.dataforseo.com/v3/on_page/instant_pages",
      page_data,
      {
        auth: {
          username: process.env.REACT_APP_API_USERNAME,
          password: process.env.REACT_APP_API_PASSWORD,
        },
        headers: {
          "content-type": "application/json",
        },
      }
    );

    if (
      data?.tasks[0]?.status_message ===
        "Invalid Field: 'url - Domain Not Found'." ||
      data?.tasks[0]?.status_message === "Invalid Field: 'url'."
    ) {
      notifyInvalidUrl();
      return insightPageData;
    }

    insightPageData = data;
  } catch (error) {
    console.log(error);
  }

  return insightPageData;
};

export default insightPageAPI;

import axios from "axios";

// screenshot fetching API function
const screenshotAPI = async (screenshot_data) => {
  let screenshotUrl;

  try {
    const { data } = await axios.post(
      "https://api.dataforseo.com/v3/on_page/page_screenshot",
      screenshot_data,
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

    if (data?.tasks_error) {
      screenshotUrl = "";
    } else {
      screenshotUrl = data?.tasks[0]?.result[0]?.items[0]?.image;
    }
  } catch (error) {
    console.log(error);
    screenshotUrl = "";
  }

  return screenshotUrl;
};

export default screenshotAPI;

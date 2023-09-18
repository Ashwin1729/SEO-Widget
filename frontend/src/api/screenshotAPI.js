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
          username: "mathematicswroteus@gmail.com",
          password: "dffdab66d00d01a0",
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

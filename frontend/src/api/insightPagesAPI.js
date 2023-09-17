import axios from "axios";

const insightPageAPI = async (page_data) => {
  let insightPageData;

  try {
    const { data } = await axios.post(
      "https://api.dataforseo.com/v3/on_page/instant_pages",
      page_data,
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

    insightPageData = data;
  } catch (error) {
    console.log(error);
    insightPageData = {};
  }

  return insightPageData;
};

export default insightPageAPI;

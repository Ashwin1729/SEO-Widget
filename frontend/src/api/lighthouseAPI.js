import axios from "axios";

// lighthouse page API function
export const lighthousePostAPI = async (lighthouse_data) => {
  let postId;

  try {
    const postData = await axios.post(
      "https://api.dataforseo.com/v3/on_page/lighthouse/task_post",
      lighthouse_data,
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

    postId = postData?.data?.tasks[0]?.id;
  } catch (error) {
    console.log(error);
    postId = "";
  }

  return postId;
};

export const lighthouseGetAPI = async (postId) => {
  let lighthouseData = null;

  try {
    const { data } = await axios.get(
      `https://api.dataforseo.com/v3/on_page/lighthouse/task_get/json/${postId}`,
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

    if (data?.tasks[0]?.result && data?.tasks[0]?.result[0]) {
      lighthouseData = data;
    }
  } catch (error) {
    console.log(error);
    lighthouseData = null;
  }

  return lighthouseData;
};

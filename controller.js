const axios = require("axios");

async function getLink(videoURL) {
  try {
    let res = await axios.get(videoURL);
    let link = res.data.split('hd_src:"')[1].split('",')[0];
    return {
      status: "success",
      link: link,
    };
  } catch (error) {
    return {
      status: "error",
      link: null,
    };
  }
}

module.exports = getLink;

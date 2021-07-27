const express = require("express");
const getLink = require("./controller");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/download", async function (req, res) {
  const url = req.query.videoURL;
  const data = await getLink(url);
  res.json(data);
});
app.listen(5000, () => console.log("server running on port 5000"));

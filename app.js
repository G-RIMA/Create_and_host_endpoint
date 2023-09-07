const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const moment = require("moment");

app.get("/api", (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  // Get the current day of the week
  const current_day = moment().utc().format("dddd");

  // Get the current UTC time
  const utc_time = moment().utc().format("YYYY-MM-DDTHH:mm:ss[Z]");

  // Construct GitHub URLs
  const github_file_url =
    "https://github.com/G-RIMA/Create_and_host_endpoint/blob/main/app.js";
  const github_repo_url = "https://github.com/G-RIMA/Create_and_host_endpoint";

  // Create the JSON response
  const response_data = {
    slack_name: slack_name,
    current_day: current_day,
    utc_time: utc_time,
    track: track,
    github_file_url: github_file_url,
    github_repo_url: github_repo_url,
    status_code: 200,
  };

  res.json(response_data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

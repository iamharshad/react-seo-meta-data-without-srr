const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const PORT = process.env.PORT || 3000;
const indexPath = path.resolve(__dirname, "build", "index.html");

// static resources should just be served as they are
app.use(express.static(path.resolve(__dirname, "build")));

app.get("/*", (req, res, next) => {
  fs.readFile(indexPath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("Error during file reading", err);
      return res.status(404).end();
    }
    // get post info
    const postId = req;
    console.log(req.url, "sd");
    // const post = getPostById(postId);
    // if(!post) return res.status(404).send("Post not found");

    // inject meta tags
    htmlData = htmlData
      .replace("<title>React App</title>", `<title>Home Page</title>`)
      .replace("__META_OG_TITLE__", "post.title")
      .replace("__META_OG_DESCRIPTION__", "post.description")
      .replace("__META_DESCRIPTION__", "post.description")
      .replace("__META_OG_IMAGE__", "post.thumbnail");

    res.send(htmlData);
  });
});

// listening...
app.listen(PORT, (error) => {
  if (error) {
    return console.log("Error during app startup", error);
  }
  console.log("listening on " + PORT + "...");
});

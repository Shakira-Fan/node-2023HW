var express = require("express");
var router = express.Router();
const Post = require("../models/postModels");
/* GET users listing.  子路徑 */
router.get("/", async function (req, res, next) {
  const posts = await Post.find();
  // res.send('respond with a resource');
  res.status(200).json({
    data: posts,
  });
});

router.post("/", async function (req, res, next) {
  console.log(req.body);

  //如果用req.body生殺大權都交給了前端的req,會有sql injection的問題產生，盡量還是只放固定的參數就好
  const newPost = await Post.create({
    name: req.body.name,
    content: req.body.content,
  });

  // res.send('respond with a resource');
  res.status(200).json({
    status: "success",
    data: newPost,
  });
});

module.exports = router;

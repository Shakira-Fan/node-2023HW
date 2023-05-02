var express = require("express");
var router = express.Router();
const PostsControllers = require("../controllers/posts");

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

router.get("/", PostsControllers.getPosts);

router.post("/", PostsControllers.createPosts);

module.exports = router;

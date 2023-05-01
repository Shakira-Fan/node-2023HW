var express = require("express");
var router = express.Router();

/* GET users listing.  子路徑 */
router.get("/", function (req, res, next) {
  // res.send('respond with a resource');
  res.status(200).json({
    name: "偉傑",
  });
});

router.get("/login", function (req, res, next) {
  // res.send('respond with a resource');
  res.status(200).json({
    name: "偉傑",
  });
});

module.exports = router;

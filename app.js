var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json"); // 剛剛輸出的 JSON

// router
var usersRouter = require("./routes/users");
var postsRouter = require("./routes/posts");

var app = express();

require("./connections");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());


app.use("/api/posts", postsRouter);
app.use("/users", usersRouter);
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;

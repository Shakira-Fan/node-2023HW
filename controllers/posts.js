const handleSuccess = require("../service/handleSuccess");
const handleError = require("../service/handleError");
const Post = require("../models/postModel");

const posts = {
  async getPosts(req, res) {
    /* 	#swagger.tags = ['Get']
        #swagger.description = 'Get方法練習' */

    const allPosts = await Post.find();
    handleSuccess(res, allPosts);
  },
  async createPosts(req, res) {
    /* 	#swagger.tags = ['Posts']
        #swagger.description = 'Post方法練習' */

    /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: ' information.',
            required: true,
    } */

    try {
      const { body } = req;

      if (body.content) {
        //如果用req.body生殺大權都交給了前端的req,會有sql injection的問題產生，盡量還是只放固定的參數就好
        const newPost = await Post.create({
          name: body.name,
          content: body.content,
          tags: body.tags,
          type: body.type,
        });
      } else {
        handleError(res, newPost);
      }
    } catch (error) {
      handleError(res, err);
    }
  },
};

module.exports = posts;

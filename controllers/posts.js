const handleSuccess = require("../service/handleSuccess");
const handleError = require("../service/handleError");
const Post = require("../models/postModel");

const posts = {
  async getPosts(req, res) {
    /**
     * #swagger.tags = ['Posts-貼文']
     * #swagger.description = "取得全部貼文 API"
     * #swagger.responses[200]= {
          description: 'Some description...',
          schema: {
            "status":true,
            "data": [
              {
                "_id": "6451fd1c57e7ea344ee8a4f9",
                "content": "今天要出門",
                "image": "",
                "name": "莉莉",
                "likes": 0,
                "__v": 0
              }
            ]
          }
       }
     */ 	

    const allPosts = await Post.find();
    handleSuccess(res, allPosts);
  },
  async createPosts(req, res) {
    /**
     * #swagger.tags = ['Posts-貼文']
     * #swagger.description = "新增貼文 API"
     * #swagger.parameters['body']={
          in:"body",
          type:"object",
          required: true,
          description: "資料格式",
          schema:{
            $name: 'Lily',
            image:'',
            likes: 0,
            $content: 'test'
          }
      }
     * #swagger.responses[200]= {
          description: 'Some description...',
          schema: {
            "status":true,
            "data": [
              {
                "content": "test",
                "image": "",
                "createdAt": "2023-05-03T09:25:54.067Z",
                "name": "Molly",
                "likes": 0,
                "_id": "645228b2f966dfbd5a75861a",
                "__v": 0
              }
            ]
          }
       }
     */ 	
    try {
      const { body } = req;

      if (body.content) {
        //如果用req.body生殺大權都交給了前端的req,會有sql injection的問題產生，盡量還是只放固定的參數就好
        const newPost = await Post.create({
          name: body.name,
          image:body.image,
          content: body.content,
          likes:body.likes
        });
        handleSuccess(res,newPost);
      } else {
        handleError(res, newPost);
      }
    } catch (error) {
      handleError(res, err);
    }
  },
  async getPost(req,res){
    /**
     * #swagger.tags = ['Posts-貼文']
     */
    const {id}=req.params;
    res.status(200).send(id);
  },
  async deletePost(req,res){
    /**
     * #swagger.tags = ['Posts-貼文']
       #swagger.security = [{"apiKeyAuth":[]}] 
     */
    const {id}=req.params;
    if(id === undefined){
      res.status(400).send({
        status:false,
        message:'刪除失敗'
      });
    }
    res.status(200).send({
      status:true,
      message:'刪除成功'
    })
  }
};

module.exports = posts;

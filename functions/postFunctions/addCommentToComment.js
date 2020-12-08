const { validationResult } = require("express-validator");
const Post = require("../../schemas/Post");
// const User = require("../../schemas/User");

module.exports = async (req, res) => {
  try {
    let post = await Post.findById(req.params.post_id);
    // let user = await User.findById(req.user.id).select("-password");

    const { textOfInnerComment } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    // if (!user) return res.status(404).json("User not found");

    if (!post) return res.status(404).json("Post not found");

    const commentary = post.comments.find(
        (comment) => comment._id.toString() === req.params.comment_id.toString()
      );
  
      if (!commentary) return res.status(404).json("Comment not found");

    let newComment = {
      textOfInnerComment,
      userName: user.userName,
      avatar: user.avatar,
    };
    commentary.commentOfComment.unshift(newComment);

    await post.save();

    res.json("inner comment added!!!");
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server Error...");
  }
};

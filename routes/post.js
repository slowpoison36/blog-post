const router = require("express").Router();
const Post = require("../models/post");
const Comment = require("../models/comment");
const User = require("../models/User");
const checkJWT = require("../middleware/jwtmiddleware");


router.post("/post", checkJWT, (req, res, next) => {
    let post = new Post();
    post.author = req.decoded.user._id;
    post.title = req.body.title;
    post.description = req.body.description;
    post.save((err, savedPost) => {
        if (!err) {
            res.status(201).json({
                success: true,
                message: "Post created successfully",
            })
        } else {
            return next(err);
        }

    })
})

router.get("/products", (req, res, next) => {

    Post.find({})
        .populate("author")
        .exec((err, foundPost) => {
            if (err) return next(err);
            res.status(200).json({
                success: true,
                message: "Post successfully retrived",
                post: foundPost
            })
        })
})

router.get("/product/:id", (req, res, next) => {
    let id = req.params.id;

    Post.findOne({ _id: id })
        .populate("author", "userName")
        .exec((err, foundPost) => {
            if (err) {
                res.status(404).json({ success: false, message: "blog not found" })
            } else {
                res.status(200).json({ success: true, post: foundPost });
            }
        })
    // Post.findOne({ _id: id }, (err, foundPost) => {
    //     if (err) {
    //         res.status(404).json({ success: false, message: "blog not found" })
    //     } else {
    //         res.status(200).json({ success: true, post: foundPost });
    //     }
    // })

})
router.post("/:productId/review/:reviewerId", checkJWT, (req, res, next) => {
    const productId = req.params.productId;
    const userToWhomPostBelogs = req.decoded.user._id;
    const reviewerId = req.params.reviewerId;


    Post.findOne({ _id: productId }, (err, foundPost) => {
        if (!err) {
            if (foundPost.author._id != userToWhomPostBelogs) {
                User.findById(reviewerId, (err, reviewer) => {
                    if (!err) {
                        const comment = new Comment();
                        comment.author = reviewer._id;
                        comment.authorName = reviewer.firstName;
                        comment.description = req.body.description;
                        comment.post = productId;
                        foundPost.comments.push(comment._id);
                        foundPost.save();
                        comment.save((err,savedComment)=>{
                            res.status(201).json({ success: true, message: "successfully posted comment",comment:savedComment })
                        });
                        

                    }
                })

            } else {
                res.status(400).json({ success: false, message: "Cannot comment on your own blog" })
            }
        }
    })


})

router.get("/:productId/reviews", (req, res, next) => {
    let page = +req.query.pageNum || 0;
    let perPage = +req.query.perPage || 5;
    const productId = req.params.productId;
    Comment.countDocuments({ post: productId }, (err, totalComments) => {
        Comment.find({ post: productId })
            .skip(page * perPage)
            .limit(perPage)
            .select("-post")
            .sort({created:"-1"})
            .exec((err, foundComments) => {
                if(err) return next(err);
                res.status(200).json({ success: true, reviews: foundComments, total: totalComments });

            })
    })
})

router.delete("/:reviewId",checkJWT,(req,res,next)=>{
    const user = req.decoded.user._id;
    Comment.findOne({_id:req.params.reviewId},(err,foundComment)=>{
         if(err) return next(err)
         if(foundComment.author._id != user){
              res.status(403).json({success:false,message:"Not Allowed"})
         }else {
             foundComment.remove();
             res.status(200).json({success:true,message:"Review Deleted"});
         }
    })
})
module.exports = router;
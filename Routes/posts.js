const router = require("express").Router();
const Post = require("../Model/Post"); //loading post Schema

/*=======================GETROUTE HERE========================= */
router.get("/all-posts", async (req, res) => {
try {
    let posts = await Post.find({}).sort({ date: "-1" });
    res.status(201).json({ posts });
} catch (err) {
    console.log(err);
    res.status(500).json("SERVER ERROR");
}
})

/*=======================POSTROUTE HERE========================= */
router.post("/add-post", async (req, res) => {
    let { title, details } = req.body;
    try {
        let newPost = new Post({
            title,
            details,
        });
        //save into database
        await newPost.save();
        return res.status(201).json({ msg: "Successfully post created" });
    } catch (err) {
        console.log(err);
        res.status(500).json("SERVER ERROR");
    }
});


/*=======================PUTROUTE HERE========================= */

/*=======================DELETEROUTE HERE========================= */


module.exports = router;
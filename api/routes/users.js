const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Post = require("../models/Post");

router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            if (!updatedUser) {
                return res.status(404).json("User not found");
            }
            res.status(200).json(updatedUser);
        } catch (err) {
            console.error("Error updating user:", err);
            res.status(500).json("An error occurred while updating the user");
        }
    } else {
        res.status(401).json("You can update only your account!");
    }
});

router.delete("/:id", async (req, res) => {
    if(req.body.userId === req.params.id){
        try{
            const user = await User.findById(req.params.id);
            try{
                await Post.deleteMany({ username : user.username});
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted");
            }
            catch(err) {
                res.send(500).json(err);
            }
        }
        catch(err) {
            res.status(404).json("user not found");
        }
    }
    else{
        res.status(401).json("you can delete only your accont!");
    }
});
module.exports = router;

router.get("/:id", async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others} = user._doc;
        res.status(200).json(others);
    }

    catch (err){
        res.status(500).json(err);
    }
})

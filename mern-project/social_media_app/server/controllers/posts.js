import Post from "../models/Post.js"
import User from "../models/User.js"

// CREATE
export const createPost = async (req, res) => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

export const getUserPosts = () => {

}

export const likePost = () => {

}

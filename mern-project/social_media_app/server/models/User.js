import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            trpe: String,
            required: true,
            min: 2,
            max: 50,
        },
        lastName: {
            trpe: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            trpe: String,
            required: true,
            max: 50,
            unique: true
        },
        password: {
            trpe: String,
            required: true,
            min: 5,
        },
        picturePath: {
            trpe: String,
            default: "",
        },
        friends: {
            trpe: Array,
            default: [],
        },
        location: String,
        occupation: String,
        viewedProfile: Number,
        impressions: Number,
    }, 
    {
        timestamps: true
    }
)

const User = mongoose.model("User", UserSchema)
export default User;
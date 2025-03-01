import mongoose from "mongoose";

const emojiSchema = new mongoose.Schema({
    emoji: {
        type: String,
        required: true,
    },
    keywords: {
        type: [String],
        required: true,
    }
})

const Emoji = mongoose.model("Emoji", emojiSchema)

export default Emoji
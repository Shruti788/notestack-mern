import mongoose from "mongoose"

// step1: you need to create a schema
// step2: you would create a model based off of that schema

const noteSchema = new mongoose.Schema (
    {
        title: {
        type: String,
        required: true,
    },
        content: {
        type: String,
        required: true,
    },
    },
    {timestamps: true} 
    // createAt, updateAt 
)

const Note = mongoose.model("Note", noteSchema)

export default Note
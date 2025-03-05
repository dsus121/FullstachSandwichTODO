import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    text: { type: String },
    completed: { type: Boolean, default: false }
})

const Todo = mongoose.model('March25Todo', todoSchema)

export default Todo
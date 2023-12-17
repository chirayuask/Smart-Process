import mongoose, { Schema } from "mongoose";


const schema = new Schema({
    title: {
        type: String
    },
    steps: {
        type: Array
    }
});

export const Process = mongoose.model('Process', schema);
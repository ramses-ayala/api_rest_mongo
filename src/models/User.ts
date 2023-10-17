import mongoose from "mongoose";

const { Schema } = mongoose;

interface IUser{
    name: string,
    email: string,
    password: string
}

const schema = new Schema<IUser>({
    name: {
     type: String,
     required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

export const Users = mongoose.model('Users', schema);
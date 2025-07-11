import mongoose from "mongoose";

const User_Schema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	name: { type: String, required: true }
});

const Todo_Schema = new mongoose.Schema({
	id: { type: String, required: true, unique: true },
	name: { type: String, required: true },
	users: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		}
	]
});

export const User_Model = mongoose.model("User", User_Schema);
export const Todo_Model = mongoose.model("Todo", Todo_Schema);
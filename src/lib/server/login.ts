import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { SECRET_JWT_KEY } from "$env/static/private";
import { email_regexp } from "./utils";
import { User_Model } from "./model";

export async function login_user(
	email: string,
	password: string
): Promise<{ error: string; message?: string } | { token: string; user: user }> {
	const user = await get_user(email, password);

	if ("error" in user) {
		return { error: user.error, message: user.message };
	}

	const token = jwt.sign({ id: user.id }, SECRET_JWT_KEY);

	return { token, user };
}

async function get_user(
	email: string,
	password: string
): Promise<{ error: string; message?: string } | user> {
	if (!email) {
		return { error: "email", message: "You must enter an email." };
	}

	if (!email.match(email_regexp)) {
		return { error: "email", message: "Email is not valid." };
	}

	const user = await User_Model.findOne({ email });

	if (!user) {
		return { error: "email", message: "Email not found." };
	}

	if (!password) {
		return { error: "password", message: "You must enter a password." };
	}

	const password_is_correct = await bcrypt.compare(
		password,
		user.password
	);

	if (!password_is_correct) {
		return { error: "password", message: "Password is incorrect." };
	}

	const id = user._id.toString();

	const name = user.name;

	return { id, email, name };
}
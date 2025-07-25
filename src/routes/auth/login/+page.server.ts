import { redirect, fail } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { login_user } from "$lib/server/auth/login";
import { cookie_options } from "$lib/server/utils";

export const actions: Actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const email = (data.get("email") as string)
			?.toLowerCase()
			?.trim();
		const password = data.get("password") as string;

		const user_data = await login_user(email, password);

		if ("error" in user_data) {
			return fail(400, { email, error: user_data.error, message: user_data.message });
		} else {
			const { token, user } = user_data;

			event.cookies.set("auth-token", token, cookie_options);
			event.cookies.set("email", user.email, cookie_options);
			event.cookies.set("name", user.name, cookie_options);

			throw redirect(303, "/dashboard");
		}
	}
};
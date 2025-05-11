import { authenticate } from "$lib/server/auth/authenticate";
import { redirect, type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	const is_protected =
		event.url.pathname.startsWith("/dashboard") ||
		event.url.pathname.startsWith("/account");

	const auth = authenticate(event.cookies);

	if (is_protected && !auth) {
		event.cookies.delete("email", { path: '/' });
		event.cookies.delete("name", { path: '/' });
		throw redirect(307, "/auth/login");
	}

	const response = await resolve(event);
	return response;
};
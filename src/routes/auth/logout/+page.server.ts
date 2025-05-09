import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { cookie_options } from "$lib/server/utils";

export const load: PageServerLoad = async (event) => {
    event.cookies.delete("auth-token", cookie_options);
    event.cookies.delete("email", cookie_options);
    event.cookies.delete("name", cookie_options);
    throw redirect(301, "/");
};

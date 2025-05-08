import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
    event.cookies.delete("auth-token", { path: "/" });
    event.cookies.delete("email", { path: "/" });
    event.cookies.delete("name", { path: "/" });
    throw redirect(301, "/");
};

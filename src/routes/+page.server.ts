import { authenticate } from "$lib/server/auth/authenticate";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
    const auth = authenticate(event.cookies);
    if (auth) {
        throw redirect(307, "/dashboard");
    } else {
        throw redirect(307, "/auth/login");
    }
}
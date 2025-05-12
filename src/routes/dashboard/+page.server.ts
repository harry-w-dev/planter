import type { Actions, PageServerLoad } from "./$types";
import { create_project } from "$lib/server/project/create";
import { authenticate } from "$lib/server/auth/authenticate";
import { get_projects_for_user } from "$lib/server/project/list";

export const load: PageServerLoad = async (event) => {
    const auth = authenticate(event.cookies);
    if (!auth) {
        return { projects: [] };
    }
    const projects = await get_projects_for_user(auth.id);
    return { projects };
};

export const actions: Actions = {
    default: async (event) => {
        const auth = await authenticate(event.cookies);
        if (!auth) {
            return { error: "not_authenticated", message: "User not authenticated." };
        }
        const data = await event.request.formData();
        const name = (data.get("project_name") as string)?.trim();
        return await create_project(auth.id, name);
    }
};
import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { connect_to_db } from "$lib/server/db";
import crypto from "crypto";

export const load: LayoutServerLoad = async (event) => {
    const connection = await connect_to_db();
    if (!connection) {
        throw error(500, "Failed to connect to the database");
    }
    const name = event.cookies.get("name") ?? "";
    const email = event.cookies.get("email") ?? "";
    const emailhash = crypto.createHash("sha256").update(email).digest("hex");

    return { name, email, emailhash };
}

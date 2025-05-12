import * as crypto from "node:crypto";
import { Todo_Model } from "$lib/server/database/model";

export async function create_project(
    userId: string,
    name: string
): Promise<{ error: string, message?: string }> {
    let id: string = "";
    let exists = true;
    // Try generating a unique id
    for (let i = 0; i < 5; i++) {
        id = crypto.randomBytes(5).toString('hex');
        // Check if id already exists
        exists = (await Todo_Model.exists({ id })) !== null;
        if (!exists) break;
    }
    if (exists) {
        return { error: "id_conflict", message: "Could not generate a unique project id." };
    }

    const user = new Todo_Model({
        id,
        name: name,
        users: [userId]
    });
    
    try {
        await user.save();
        return { error: "" };
    } catch (err) {
        return { error: "other", message: err?.toString() as string };
    }
}
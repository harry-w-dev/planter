import { Todo_Model } from "$lib/server/database/model";

export async function get_projects_for_user(userId: string) {
    const projects = await Todo_Model.find({ users: userId }).lean();
    return projects.map(project => ({
        ...project,
        _id: project._id.toString(),
        users: project.users.map((user: any) => user.toString())
    }));
}
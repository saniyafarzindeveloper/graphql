import { User } from "@/models/user.js"

export const getAllUsers = async () => {
    const users = await User.find();
    return users;
}
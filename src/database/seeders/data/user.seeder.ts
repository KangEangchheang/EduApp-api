import { UserRole } from "../../../models/user/user-role.model";
import { User } from "../../../models/user/user.model";

export const userSeeder = async () => {
    try {
        const user_roles = [
            { role: 'Educator' },
            { role: 'Student' }	
        ];
        
        const user_role_list = await UserRole.bulkCreate(user_roles, { validate: true });
        console.log("User Roles Seeded".green);

        // Correctly link user_role_id
        const users = [
            {
                email: 'janedoe@gmail.com',
                username: 'jane doe',
                password: 'janedoe',
                user_role_id: user_role_list.find(role => role.role === 'Educator').id // Fetch ID from the seeded roles
            },
            {
                email: 'student@gmail.com',
                username: 'student',
                password: 'student',
                user_role_id: user_role_list.find(role => role.role === 'Student').id // Fetch ID from the seeded roles
            }
        ];

        await User.bulkCreate(users, { validate: true });
        console.log("Users Seeded".green);
    } catch (e) {
        console.error(e);
    }
};

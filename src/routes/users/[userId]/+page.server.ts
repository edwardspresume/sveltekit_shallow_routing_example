import type { User } from '$lib/types';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ fetch, params: { userId } }) => {
    const fetchUser = async () => {
    try {
        const response = await fetch(`https://dummyjson.com/users/${userId}?select=firstName,lastName,image,email,phone`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const user = (await response.json()) as User;

        return user
    } catch (error) {
        console.error('Failed to load user:', error);
        return null
    }
    };

    return { user: await fetchUser()}
};

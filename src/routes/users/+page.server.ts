import type { PageServerLoad } from './$types';

type User = { id: number; username: string; email: string };

type UserData = {
    users: User[];
  };

export const load = (async ({fetch}) => {
    const response = await fetch('https://dummyjson.com/users?limit=15&select=id,username,email');
	const data = await response.json() as UserData;
    const users = data.users

    return {users};
}) satisfies PageServerLoad;
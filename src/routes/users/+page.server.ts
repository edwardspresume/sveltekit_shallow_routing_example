import type { PageServerLoad } from './$types';

type User = { id: number; username: string; email: string };
type UserData = { users: User[] };

export const load: PageServerLoad = async ({ fetch }) => {
  try {
    const response = await fetch('https://dummyjson.com/users?limit=15&select=id,username,email');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as UserData;
    return { users: data.users };
  } catch (error) {
    console.error('Failed to load users:', error);
    return {users: []};
  }
};

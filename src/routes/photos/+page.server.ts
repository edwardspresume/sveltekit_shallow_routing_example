import type { ImageType } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load = (async ({fetch}) => {
    async function getImages () {
        const response = await fetch('/api/images');
        return await response.json() as ImageType[]
    }

    return { images: await getImages()};
}) satisfies PageServerLoad;
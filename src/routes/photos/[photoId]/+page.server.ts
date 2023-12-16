import type { ImageType } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load = (async ({fetch, params: {photoId}}) => {
    async function getImages () {

        const response = await fetch('/api/images');
        const images = await response.json() as ImageType[];
        return images.find(image => image.id === +photoId)  as ImageType;
    }

    return {
        image: await getImages()
    };
}) satisfies PageServerLoad;
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {

    const images = [...Array(20)].map((_, i) => {
        i += 10;
        return {
          id: i,
          alt: 'random image',
          src: `https://picsum.photos/id/${i}/800`,
        };
    });
    return json(images);
};
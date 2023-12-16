import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {

      const images = [...Array(20)].map((_, i) => ({
        id: i,
        alt: 'random image',
        src: `https://picsum.photos/id/${i}/500`,
      }));

    return json(images);
};
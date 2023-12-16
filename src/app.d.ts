// See https://kit.svelte.dev/docs/types#app

import type { ImageType, UserType } from "$lib/types";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface PageState {
			profile: {
				user: UserType;
			},

			photo: {image: ImageType;}
		}
		// interface Platform {}
	}
}

export { };

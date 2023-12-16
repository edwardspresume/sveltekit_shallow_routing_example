<script lang="ts">
	import Button from '$components/ui/button/button.svelte';
	import { Check, MessagesSquare, Share } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { image } = data;
	const username = 'traveler21'; // Hardcoded for the example
	const userAvatar = 'https://source.unsplash.com/random/?people'; // Random user avatar from Unsplash

	const getRandomTimestamp = () => `${Math.floor(Math.random() * 60)} mins ago`;
	const timestamp = getRandomTimestamp();
</script>

{#if !image}
	<p class="text-center text-gray-600">No image found.</p>
{:else}
	<article class="grid max-w-2xl gap-4 mx-auto">
		<img class="rounded-lg shadow-lg" src={image.src} alt={image.alt} />

		<div class="flex flex-wrap items-center justify-between gap-3">
			<section aria-labelledby="user-info-title">
				<div id="user-info-title" class="sr-only">User Information</div>
				<div class="flex items-center space-x-2">
					<img
						class="object-cover rounded-full w-14 h-14"
						src={userAvatar}
						alt={`Avatar of ${username}`}
					/>
					<div>
						<p class="font-semibold">{username}</p>
						<time class="text-xs text-gray-500" datetime={new Date().toISOString()}
							>{timestamp}</time
						>
					</div>
				</div>
			</section>

			<section aria-labelledby="image-interaction-title">
				<div id="image-interaction-title" class="sr-only">Image Interactions</div>
				<div class="flex flex-wrap gap-2">
					<Button
						size="sm"
						variant="outline"
						class="gap-2 text-blue-600 transition duration-300 ease-in-out hover:text-blue-800"
						aria-label="Like this image"
					>
						<Check />
						<span>Like</span>
					</Button>

					<Button
						size="sm"
						variant="outline"
						class="gap-2 text-blue-600 transition duration-300 ease-in-out hover:text-blue-800"
						aria-label="Comment on this image"
					>
						<MessagesSquare />
						<span>Comment</span>
					</Button>

					<Button
						size="sm"
						variant="outline"
						class="gap-2 text-blue-600 transition duration-300 ease-in-out hover:text-blue-800"
						aria-label="Share this image"
					>
						<Share />
						<span>Share</span>
					</Button>
				</div>
			</section>
		</div>
	</article>
{/if}

<script lang="ts">
	import { goto, preloadData, pushState } from '$app/navigation';
	import type { PageData } from './$types';

	import { page } from '$app/stores';
	import { route } from '$lib/ROUTES';

	import * as Dialog from '$lib/components/ui/dialog';
	import ImagePage from './[photoId]/+page.svelte';

	export let data: PageData;

	const { images } = data;

	async function onPhotoClick(event: MouseEvent & { currentTarget: HTMLAnchorElement }) {
		if (event.metaKey || event.ctrlKey) return;

		event.preventDefault();

		const { href } = event.currentTarget;

		const result = await preloadData(href);

		if (result['type'] === 'loaded' && result['status'] === 200) {
			pushState(href, { photo: result['data'] });
		} else {
			goto(href);
		}
	}

	let isPhotoDialogOpen = false;

	$: if ($page.state.photo) {
		isPhotoDialogOpen = true;
	} else {
		isPhotoDialogOpen = false;
	}
</script>

{#if !images}
	<p>No images found.</p>
{:else}
	<div class="grid gap-8 mx-auto w-fit">
		{#each images as image}
			<a href={route('/photos/[photoId]', { photoId: image.id })} on:click={onPhotoClick}>
				<img class="rounded shadow-md" src={image.src} alt={image.alt} />
			</a>
		{/each}
	</div>
{/if}

<Dialog.Root
	open={isPhotoDialogOpen}
	onOpenChange={(open) => {
		if (!open) {
			history.back();
		}
	}}
>
	<Dialog.Content>
		<ImagePage data={$page.state.photo} />
	</Dialog.Content>
</Dialog.Root>

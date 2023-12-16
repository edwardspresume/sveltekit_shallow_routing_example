<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { images } = data;
</script>

{#if !images}
	<p>No images found.</p>
{:else}
	<div class="mx-auto space-y-8 w-fit">
		{#each images as image}
			<img class="rounded shadow-md" src={image.src} alt={image.alt} />
		{/each}
	</div>
{/if}

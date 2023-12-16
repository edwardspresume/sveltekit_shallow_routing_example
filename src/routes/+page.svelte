<script>
	import Button from '$components/ui/button/button.svelte';
	import { route } from '$lib/ROUTES';
</script>

<h1 class="text-2xl font-bold text-center">SvelteKit Shallow Routing Examples</h1>

<nav class="mx-auto mt-10 space-x-3 w-fit">
	<Button href={route('/users')}>View users</Button>
	<Button href={route('/photos')}>View photos</Button>
</nav>

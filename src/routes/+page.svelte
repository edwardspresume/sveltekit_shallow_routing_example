<script>
	import { route } from '$lib/ROUTES';
</script>

<h1 class="text-2xl font-bold text-center">SvelteKit Shallow Routing Examples</h1>

<nav class="mx-auto mt-10 w-fit">
	<a class="text-xl text-blue-600" href={route('/users')}>View users</a>
</nav>

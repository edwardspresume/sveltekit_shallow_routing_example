<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { user } = data;
</script>

{#if !user}
	<p>User not found</p>
{:else}
	<div class="flex items-center space-x-4">
		<img class="w-16 h-16 bg-white rounded-full" src={user.image} alt="Person" />
		<h1 class="text-2xl font-bold">{user.firstName} {user.lastName}</h1>
	</div>

	<div class="mt-4 space-y-2">
		<p>
			<span class="text-muted-foreground"> email: </span>

			<a class="text-blue-500 hover:underline" href="mailto:{user.email}">{user.email}</a>
		</p>

		<p>
			<span class="text-muted-foreground"> phone: </span>
			<a class="text-blue-500 hover:underline" href="tel:{user.phone}">{user.phone}</a>
		</p>
	</div>
{/if}

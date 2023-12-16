<script lang="ts">
	import { goto, preloadData, pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	import { route } from '$lib/ROUTES';

	import ProfilePage from './[userId]/+page.svelte';

	import * as Card from '$components/ui/card/';
	import * as Table from '$components/ui/table/';
	import * as Dialog from '$lib/components/ui/dialog';

	export let data: PageData;
	const { users } = data;

	async function onProfileLinkClick(event: MouseEvent & { currentTarget: HTMLAnchorElement }) {
		// Exit the function if the Meta key (Command on Mac, Windows key on Windows) or Control key was pressed during the click. This allows the default browser behavior (usually opening the link in a new tab or window).
		if (event.metaKey || event.ctrlKey) return;

		event.preventDefault();

		const { href } = event.currentTarget;

		// Get the result of the 'load' function in './[userId]/+page.svelte'
		const result = await preloadData(href);

		// If the result is a 200 status code, push the state
		if (result['type'] === 'loaded' && result['status'] === 200) {
			// Push the state to the history stack
			pushState(href, { profile: result['data'] });
		} else {
			goto(href);
		}
	}

	let isProfileDialogOpen = false;

	$: if ($page.state.profile) {
		isProfileDialogOpen = true;
	} else {
		isProfileDialogOpen = false;
	}
</script>

{#if !users}
	<p>No users found</p>
{:else}
	<Card.Root>
		<Card.Header>
			<Card.Title>Users</Card.Title>
			<Card.Description>Users list</Card.Description>
		</Card.Header>

		<Card.Content>
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head>Id</Table.Head>
						<Table.Head>Username</Table.Head>
						<Table.Head>Email</Table.Head>
						<Table.Head></Table.Head>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{#each users as user}
						<Table.Row>
							<Table.Cell>{user.id}</Table.Cell>
							<Table.Cell>{user.username}</Table.Cell>
							<Table.Cell>{user.email}</Table.Cell>
							<Table.Cell>
								<Dialog.Root>
									<a
										href={route('/users/[userId]', { userId: user.id })}
										on:click={onProfileLinkClick}
									>
										View Profile
									</a>
								</Dialog.Root>
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</Card.Content>
	</Card.Root>
{/if}

<Dialog.Root
	open={isProfileDialogOpen}
	onOpenChange={(open) => {
		if (!open) {
			history.back();
		}
	}}
>
	<Dialog.Content>
		<ProfilePage data={$page.state.profile} />
	</Dialog.Content>
</Dialog.Root>

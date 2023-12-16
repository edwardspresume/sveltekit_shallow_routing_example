<script lang="ts">
	import type { PageData } from './$types';

	import { route } from '$lib/ROUTES';

	import Button from '$components/ui/button/button.svelte';
	import * as Card from '$components/ui/card/';
	import * as Table from '$components/ui/table/';

	export let data: PageData;
	$: ({ users } = data);
</script>

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
							<Button href={route('/users/[userId]', { userId: user.id })}>View profile</Button>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Card.Content>
</Card.Root>

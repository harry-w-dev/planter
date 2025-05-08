<script lang="ts">
	import { enhance } from "$app/forms";
	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="flex w-full h-screen sm:items-center justify-center bg-zinc-900 text-zinc-300">
<div class="w-full p-5 min-[540px]:max-w-96 flex flex-col gap-8">
	<div class="flex flex-col items-center">
		<p class="text-3xl font-semibold">Login</p>
		<p>Please enter your credentials to login.</p>
	</div>

	<form class="flex flex-col gap-6" method="POST" autocomplete="off" use:enhance>
		<div class="flex flex-col items-start gap-1">
			<label for="email_input">Email</label>
			<input class="w-full" type="email" id="email_input" name="email" placeholder="email@example.com" value={form?.email ?? ""} />
		</div>
		<div class="flex flex-col items-start gap-1">
			<label for="password_input">Password</label>
			<input class="w-full" type="password" id="password_input" name="password" placeholder="SuperStrongPassword" />
		</div>
		<button class="w-full bg-zinc-700 p-4 mt-6 rounded-lg hover:bg-zinc-600 transition ease-in-out duration-200">Login</button>
	</form>

	<p>Don't have an account? <a href="/auth/register">Register</a></p>

	{#if form?.user}
		<p class="success">
			Welcome {form.user.name}! You can now open the dashboard.
		</p>
	{/if}

	{#if form?.error}
		<p class="error">
			{form.error}
		</p>
	{/if}
</div>
</div>
<script lang="ts">
	import { enhance } from "$app/forms";
	import type { ActionData } from "./$types";

	let transitionPage = $state(true);
	
	const { form }: { form: ActionData } = $props();

	function registerPage() {
		transitionPage = true;
		setTimeout(() => {
			window.location.href = "/auth/register";
		}, 200);
	}

	setTimeout(() => {
		transitionPage = false;
	}, 200);

</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="flex w-full h-screen sm:items-center justify-center bg-zinc-900 text-zinc-300">
	<div class="w-full p-5 min-[540px]:max-w-96 flex flex-col gap-8 {transitionPage ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200 ease-in-out">
		<div class="flex flex-col items-center">
			<p class="text-3xl font-semibold">Login</p>
			<p>Please enter your credentials to login.</p>
		</div>

		<form novalidate class="flex flex-col gap-6" method="POST" autocomplete="off" use:enhance>
			<div class="flex flex-col items-start gap-1">
				<div class="flex flex-row justify-between w-full">
					<label for="password_input">Email</label>
					<span class="text-red-400">{form?.error === "email" ? form.message : ""}</span>
				</div>
				<input class="w-full {form?.error === "email" ? "outline-2 outline-offset-1 outline-red-400" : ""}" type="email" id="email_input" name="email" placeholder="email@example.com" value={form?.email ?? ""} />
			</div>
			<div class="flex flex-col items-start gap-1">
				<div class="flex flex-row justify-between w-full">
					<label for="password_input">Password</label>
					<span class="text-red-400">{form?.error === "password" ? form.message : ""}</span>
				</div>
				<input class="w-full {form?.error === "password" ? "outline-2 outline-offset-2 outline-red-400" : ""}" type="password" id="password_input" name="password" placeholder="SuperStrongPassword" />
			</div>
			<button class="w-full bg-zinc-700 p-4 mt-6 rounded-lg hover:bg-zinc-600 transition ease-in-out duration-200">Login</button>
		</form>
		<div class="flex gap-1 justify-center">
			<p class="">Don't have an account?</p>
			<button type="button" class="text-zinc-200 hover:text-zinc-50 transition ease-in-out group cursor-pointer" onclick={registerPage} aria-label="Register">
				Register
				<div class="bg-zinc-200 h-[2px] w-0 group-hover:w-full transition-all duration-500 cursor-pointer"></div>
			</button>
		</div>
	</div>
</div>
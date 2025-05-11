<script lang="ts">
	import { enhance } from "$app/forms";
	import { goto } from "$app/navigation";
	import type { ActionData } from "./$types";
	import Button from "$lib/components/button.svelte";
	import Input from "$lib/components/input.svelte";

	let transitionPage = $state(true);
	
	let { form }: { form: ActionData } = $props();

	function registerPage() {
		transitionPage = true;
		setTimeout(() => {
			goto("/auth/register", { replaceState: true });
		}, 200);
	}

	function removeError(option: string) {
		if (form?.error === option) {
			form = { ...form, error: "" };
		}
	}

	setTimeout(() => {
		transitionPage = false;
	}, 200);

</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="flex w-full h-screen sm:items-center justify-center bg-base-200 text-base-content">
	<div class="bg-base-100 outline-1 outline-base-300 rounded-lg w-full p-5 min-[540px]:max-w-96 flex flex-col gap-8 {transitionPage ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200 ease-in-out">
		<div class="flex flex-col items-center">
			<p class="text-3xl font-semibold">Login</p>
			<p>Please enter your credentials to login.</p>
		</div>

		<form novalidate class="flex flex-col gap-6" method="POST" autocomplete="off" use:enhance>
			<Input 
				label="Email" 
				error={form?.error === "email" ? form?.message : undefined} 
				oninput={() => removeError("email")} 
				class="w-full" 
				type="email" 
				id="email_input" 
				name="email" 
				placeholder="email@example.com" 
				value={form?.email ?? ""} 
			/>
			<Input 
				label="Password"
				error={form?.error === "password" ? form?.message : undefined} 
				oninput={() => removeError("password")} 
				class="w-full" 
				type="password" 
				id="password_input" 
				name="password" 
				placeholder="SuperStrongPassword" 
			/>
			<Button color="primary" class="w-full">Login</Button>
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
<script lang="ts">
	import { enhance } from "$app/forms";
    import { goto } from "$app/navigation";
	import type { ActionData } from "./$types";
	import Button from "$lib/components/button.svelte";
	import Input from "$lib/components/input.svelte";

	let transitionPage = $state(true);

	let { form }: { form: ActionData } = $props();

	function removeError(option: string) {
		if (form?.error === option) {
			form = { ...form, error: "" };
		}
	}

	function loginPage() {
		transitionPage = true;
		setTimeout(() => {
			goto("/auth/login", { replaceState: true });
		}, 200);
	}

	setTimeout(() => {
		transitionPage = false;
	}, 200);
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<div class="flex w-full h-screen sm:items-center justify-center bg-base-200 text-base-content">
	<div class="bg-base-100 outline-1 outline-base-300 rounded-lg w-full p-5 min-[540px]:max-w-96 flex flex-col gap-8 {transitionPage ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200 ease-in-out">
		<div class="flex flex-col items-center">
			<p class="text-3xl font-semibold">Register</p>
			<p>Please enter your details below to register.</p>
		</div>

		<form novalidate class="flex flex-col gap-6" method="POST" autocomplete="off" use:enhance>
			<Input
				label="Email"
				error={form?.error === "email" ? form?.message : undefined}
				oninput={() => removeError("email")}
				class="w-full {form?.error === "email" ? "outline-2 outline-offset-1 outline-red-400" : ""}"
				type="email"
				id="email_input"
				name="email"
				value={form?.user?.email ?? ""}
			/>
			<Input
				label="Password"
				error={form?.error === "password" ? form?.message : undefined}
				oninput={() => removeError("password")}
				class="w-full {form?.error === "password" ? "outline-2 outline-offset-1 outline-red-400" : ""}"
				type="password"
				id="password_input"
				name="password"
			/>
			<Input
				label="Name"
				error={form?.error === "name" ? form?.message : undefined}
				oninput={() => removeError("name")}
				class="w-full {form?.error === "name" ? "outline-2 outline-offset-1 outline-red-400" : ""}"
				type="text"
				id="name_input"
				name="name"
				value={form?.user?.name ?? ""}
			/>
			<Button color="primary" class="w-full">Register</Button>
		</form>

		<div class="flex gap-1 justify-center">
			<p class="">Already registered?</p>
			<button type="button" class="text-zinc-200 hover:text-zinc-50 transition ease-in-out group cursor-pointer" onclick={loginPage} aria-label="Register">
				Login
				<div class="bg-zinc-200 h-[2px] w-0 group-hover:w-full transition-all duration-500 cursor-pointer"></div>
			</button>
		</div>
	</div>
</div>
<script lang="ts">
	import { enhance } from "$app/forms";
    import { goto } from "$app/navigation";
	import type { ActionData } from "./$types";

	let transitionPage = $state(true);

	const { form }: { form: ActionData } = $props();

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

<h1>Register</h1>

<form method="POST" autocomplete="off" use:enhance>
	<div>
		<label for="email_input">Email</label>
		<input
            class="border-1 border-gray-500 rounded-md"
			type="email"
			id="email_input"
			name="email"
			value={form?.user?.email ?? ""}
		/>
	</div>
	<div>
		<label for="password_input">Password</label>
		<input class="border-1 border-gray-500 rounded-md" type="password" id="password_input" name="password" />
	</div>
	<div>
		<label for="name_input">Name</label>
		<input
            class="border-1 border-gray-500 rounded-md"
			type="text"
			id="name_input"
			name="name"
			value={form?.user?.name ?? ""}
		/>
	</div>
	<button>Register</button>
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
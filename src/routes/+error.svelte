<script lang="ts">
    import { page } from "$app/state";
	import Button from "$lib/components/button.svelte";
	import Input from "$lib/components/input.svelte";
    import { redirect } from "@sveltejs/kit";
</script>

<svelte:head>
	<title>Error {page.status}</title>
</svelte:head>

<div class="flex w-full h-screen sm:items-center justify-center bg-base-200 text-base-content">
	<div class="bg-base-100 outline-1 outline-base-300 rounded-lg w-full p-5 min-[540px]:max-w-96 flex flex-col gap-2 transition-opacity duration-200 ease-in-out">
		<div class="flex flex-col items-center">
			<p class="text-3xl font-semibold">Error {page.status}</p>
			<p>{page.error?.message}</p>
		</div>
        <a href="/" class="p-4 mt-4 rounded-lg transition ease-in-out cursor-pointer bg-primary text-primary-content text-center">Go Back</a>
	</div>
</div>
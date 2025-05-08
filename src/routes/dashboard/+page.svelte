<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<div>
    <div class="flex gap-2 items-center">
        <p>Welcome back,</p>
        <div class="flex gap-2 bg-gray-200 rounded-full p-1 pr-2 items-center">
            <img class="rounded-full w-12 aspect-square" src="https://gravatar.com/avatar/{data.emailhash}?d=identicon" alt="pfp" />
            <p>{data.name}</p>
        </div>
    </div>
    <div class="flex flex-col gap-2"></div>
</div>


<script lang="ts">
	import type { PageData } from "./$types";
    import { enhance } from "$app/forms";
    import Button from "$lib/components/button.svelte";
    import Card from "$lib/components/card.svelte";
    import Input from "$lib/components/input.svelte";

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

<form action="/auth/logout" method="POST" class="logout-form">
	<Button color="warning" class="w-full">Log out</Button>
</form>

<div class="flex flex-col gap-2">
    {#each data.projects as project}
        <Card>{project.name}</Card>
    {/each}
</div>
<form  method="POST" autocomplete="off" use:enhance>
    <Input
        label="Project name"
        type="text"
        id="project_name_input"
        name="project_name"
    />
    <Button>Create project</Button>
</form>
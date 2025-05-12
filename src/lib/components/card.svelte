<script lang="ts">
    import { redirect } from "@sveltejs/kit";

    let { children = null, class: className = "", href = null } = $props();
</script>

<a href={href} class="p-4 bg-base-100 text-base-content rounded-lg {href ? "cursor-pointer" : " cursor-default"} {className}">
    {#if children}
        {@render children()}
    {:else}
        <p>Hello world</p>
    {/if}
</a>
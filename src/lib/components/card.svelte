<script lang="ts">
    let { children = null, class: className = "" } = $props();
</script>

<div class="p-4 bg-base-100 text-base-content rounded-lg {className}">
    {#if children}
        {@render children()}
    {:else}
        <p>Hello world</p>
    {/if}
</div>
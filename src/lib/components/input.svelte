<script lang="ts">
    let { 
        placeholder = null,
        oninput = null, 
        children = null, 
        class: className = null, 
        error = null, 
        value = null, 
        type = null, 
        id = null, 
        name = null, 
        label = null
    } = $props();
</script>

<style>
    .input {
        background-color: var(--color-base-100);
        color: var(--color-base-content);
        outline: 1px solid color-mix(in oklab,var(--color-base-content)20%,#0000);
        padding: calc(var(--spacing) * 2);
        border-radius: var(--radius-lg);
        transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
        transition-duration: 100ms;
        transition-property: background-color, border-color, box-shadow, transform;
    }

    .input-error {
        outline: 2px solid var(--color-error);
        outline-offset: 1px;
    }

    .input:focus {
        outline: 2px solid var(--color-base-content);
    }
</style>

<div class="flex flex-col items-start gap-1">
    {#if label}
    <div class="flex flex-row justify-between w-full">
        <label for={id}>{label}</label>
        <span class="text-error">{error ? error : ""}</span>
    </div>
    {/if}
    <input
        oninput={oninput}
        class="input {className} {error ? "input-error" : ""}"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
    />
</div>
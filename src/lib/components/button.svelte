<script lang="ts">
    let { color = null, children = null, class: className = null } = $props();
</script>

<style>
    .button {
        padding: 1rem;
        margin-top: 1.5rem;
        border-radius: 0.5rem;
        transition: background-color 0.2s ease-in-out;
        cursor: pointer;
    }

    .button-primary {
        background-color: var(--color-primary);
        color: var(--color-primary-content)
    }

    .button-secondary {
        background-color: var(--color-secondary);
        color: var(--color-secondary-content);
    }

    .button-accent {
        background-color: var(--color-accent);
        color: var(--color-accent-content);
    }

    .button-neutral {
        background-color: var(--color-neutral);
        color: var(--color-neutral-content);
    }

    .button-info {
        background-color: var(--color-info);
        color: var(--color-info-content);
    }

    .button-success {
        background-color: var(--color-success);
        color: var(--color-success-content);
    }

    .button-warning {
        background-color: var(--color-warning);
        color: var(--color-warning-content);
    }

    .button-error {
        background-color: var(--color-error);
        color: var(--color-error-content);
    }

    .button-primary:hover {
        background-color: color-mix(in oklab, var(--color-primary, var(--color-base-200)), #000 7%);
    }

    .button-secondary:hover {
        background-color: color-mix(in oklab, var(--color-secondary, var(--color-base-200)), #000 7%);
    }

    .button-accent:hover {
        background-color: color-mix(in oklab, var(--color-accent, var(--color-base-200)), #000 7%);
    }

    .button-neutral:hover {
        background-color: color-mix(in oklab, var(--color-neutral, var(--color-base-200)), #000 7%);
    }

    .button-info:hover {
        background-color: color-mix(in oklab, var(--color-info, var(--color-base-200)), #000 7%);
    }

    .button-success:hover {
        background-color: color-mix(in oklab, var(--color-success, var(--color-base-200)), #000 7%);
    }

    .button-warning:hover {
        background-color: color-mix(in oklab, var(--color-warning, var(--color-base-200)), #000 7%);
    }

    .button-error:hover {
        background-color: color-mix(in oklab, var(--color-error, var(--color-base-200)), #000 7%);
    }
</style>

<button class="button {color ? `button-${color}` : 'button-primary'} {className}">
    {#if children}
        {@render children()}
    {:else}
        {#if color === "primary"}
            Primary Button
        {:else if color === "secondary"}
            Secondary Button
        {:else}
            Default Button
        {/if}
    {/if}
</button>
<script>
    export let label = 'Label';
    export let iconSrc = '';
</script>

<button class="cta-button">
    {#if iconSrc}
        <img src={iconSrc} class="cta-button-icon" alt="{label} icon"/>
        <span>{label}</span>
    {:else}
        <div style="height: var(--size-icon); width: 0"></div>
        <span>{label}</span>
        <div style="height: var(--size-icon); width: 0"></div>
    {/if}
</button>

<style>

    span {
        word-break: break-word;
    }

    .cta-button-icon {
        width: var(--size-icon);
        min-height: min-content;
        height: var(--size-icon);
    }

    .cta-button {
        display: flex;
        flex-wrap: nowrap;
        flex: 0 0 auto;
        gap: 0.5rem;
        align-items: center;
        font-family: "Inter", sans-serif;
        font-size: var(--size-text-smallesttext);
        font-weight: 400;
        background-color: var(--color-bg-3);
        color: var(--color-text);
        border-radius: 7pt;
        border: 1px solid var(--color-border);
        padding: 0.2rem 0.4rem;
        transition: background-color 0.2s, box-shadow 0.2s;
    }

</style>
<script>
    export let label = 'Button';
    export let url = "";
</script>

<a href={url} rel="noopener noreferrer" target="_blank">
    <button class="cta-button">
        <span>{label}</span>
    </button>
</a>

<style>

    .cta-button {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        font-family: "Inter", sans-serif;
        font-size: var(--size-text-tag);
        font-weight: 600;
        background-color: var(--color-bg-3);
        color: var(--color-text);
        border-radius: 7pt;
        border: 1px solid var(--color-border);
        padding: 0.5rem 0.7rem;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
        cursor: pointer;
        transition: background-color 0.2s, box-shadow 0.2s;
    }

    .cta-button:hover {
        box-shadow: 0 4px 5px rgba(0, 0, 0, 1);
    }

</style>
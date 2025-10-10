<script>
  export let label = 'Button';
  export let iconSrc = '';
</script>

<button class="cta-button">
  {#if iconSrc}
    <img src={iconSrc} class="cta-button-icon" alt="{label} icon" />
  {/if}
  <span>{label}</span>
</button>

<style>
  .cta-button {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-family: "Inter", sans-serif;
    font-size: var(--size-text-tag);
    background-color: var(--color-bg-2);
    color: var(--color-text);
    border-radius: 7pt;
    border: 1px solid var(--color-border);
    padding: 0.5rem 1rem;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    transition: background-color 0.2s, box-shadow 0.2s;
  }
</style>
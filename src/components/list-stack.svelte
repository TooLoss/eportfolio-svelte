<script lang="ts">
import Stack from "$components/stack.svelte";

let {
    name = 'front-end',
    stackComponents = [] as { label: string; iconSrc: string; }[]
} = $props();
</script>

<section class="component-box">
    <div class="list-text">
        <h3>{name}</h3>
    </div>
    <section class="stack-box">
        {#each stackComponents as newstack }
            <Stack
                    label={newstack.label}
                    iconSrc={newstack.iconSrc}
            />
        {/each}
    </section>
</section>

<style>
    .component-box {
        display: flex;
        flex-direction: column;
        background-color: var(--color-bg-2);
        border: 1px solid var(--color-border);
        border-radius: 7px;
    }

    .list-text {
        padding: 1rem;
    }

    .stack-box {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        padding: 0.5rem;
        background-color: var(--color-bg-1);
        border-radius: 7px;
    }

    @media (max-width: 768px) {
        .stack-box {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(min(150px, 100%), 1fr));
        }
    }

</style>
<script lang="ts">
    import { type Snippet } from 'svelte';
    import Stack from '$components/stack.svelte'

    let {
        projectTitle = 'project',
        description = 'lorem impsum dolores bloa',
        projectLink = '',
        projectImage = '',
        stackComponents = [] as { label: string; iconSrc: string; }[]
    } = $props();
</script>

<a href={projectLink} rel="noopener noreferrer" target="_blank">
    <section class="project-box">
        <img src={projectImage} alt={projectTitle} />
        <div class="text-zone">
            <div class="stack-align">
                {#each stackComponents as newstack }
                    <Stack
                    label={newstack.label}
                    iconSrc={newstack.iconSrc}
                    />
                {/each}
            </div>
            <div class="project-text-container">
                <span class="project-title">{projectTitle}</span>
                <p>{description}</p>
            </div>
        </div>
    </section>
</a>


<style lang="css">
    :root {
        --project-width: 29rem;
        --project-height: 25rem;
        --project-padding-vertical: 1.3rem;
        --project-padding-horizontal: 1rem;

        --project-textzone-gap: 0.5rem;
    }

    img {
        border-radius: 7pt 7pt 0 0;
    }

    p {
        font-size: var(--size-text-smallesttext);
    }

    .text-zone {
        padding: var(--project-padding-vertical) var(--project-padding-horizontal);
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .project-text-container {
        display: flex;
        flex-direction: column;
        gap: var(--project-textzone-gap);
    }

    .project-box {
        width: var(--project-width);
        height: var(--project-height);
        background-color: var(--color-bg-2);

        border-radius: 7pt;
        border: 1px solid var(--color-border);

        display: flex;
        flex-direction: column;
    }

    .project-title {
        font-family: "Inter", sans-serif;
        font-size: var(--size-text-tag);
        font-weight: 600;
        color: var(--color-text);
    }

    p {
        color: var(--color-text-muted);
        font-size: var(--size-text-smalltext);
        font-weight: 400;
    }

    a {
        font-style: normal;
        text-decoration: none;
    }

    .stack-align {
        display: flex;
        gap: 0.5rem;
    }

</style>
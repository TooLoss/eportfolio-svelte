<script>
    export let projectTitle = 'project';
    export let description = 'lorem impsum dolores bloa';
    export let projectLink = '';
    export let projectImage = '';
    export let stack = {};
</script>

<a href={projectLink} rel="noopener noreferrer" target="_blank">
    <section class="project-box">
        <img src={projectImage} alt={projectTitle} />
        <div class="text-zone">
            <div class="align-horizontal">
                {stack}
            </div>
            <div class="text-container">
                <span class="project-title">{projectTitle}</span>
                <p>{description}</p>
            </div>
        </div>
    </section>
</a>


<style>
    :root {
        --project-width: 25rem;
        --project-height: 20rem;
        --project-textzone: 1rem;
    }

    img {
        border-radius: 7pt 7pt 0 0;
    }

    .text-zone {
        padding: var(--project-textzone);
    }

    .project-box {
        width: var(--project-width);
        height: var(--project-height);
        background-color: var(--color-bg-2);

        border-radius: 7pt;
        border: 1px solid var(--color-border);

        display: flex;
        flex-direction: column;

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

</style>
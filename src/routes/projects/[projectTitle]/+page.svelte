<script lang="ts">
    import Stack from "$components/stack.svelte";
    import { getIconLanguages } from "$lib/iconLanguages";
    import CtaTag from "\$components/cta-tag.svelte";
    import Footer from '$components/footer.svelte'
    

    export let data: any;
    const {project} = data;

    interface Project {
        projectTitle: string;
        description: string;
        projectLink: string;
        projectImage: string;
        stackComponents: { label: string; iconSrc: string; }[];
    }

    let stackComponents = project.stackComponents;

    stackComponents.forEach((component : { label: string; iconSrc: string; }) => component .iconSrc = getIconLanguages(component .label))
</script>

<section class="page">
    <section class="section-view">
        <section class="new-section">
            <a class="return" href="/projects">
                <img class="icon" src="https://www.svgrepo.com/show/533620/arrow-sm-left.svg" alt="←"/>
                <h2>previous</h2>
            </a>
            <div class="text-container">
                <h1>{project.projectTitle}</h1>
                <p>{project.description}</p>

                <div class="stack-align">
                    {#each stackComponents as newstack }
                        <Stack
                                label={newstack.label}
                                iconSrc={newstack.iconSrc}
                        />
                    {/each}
                </div>
            </div>
            <img id="preview-img" src={project.projectImage} alt={project.projectTitle}>
            <CtaTag
                label="See repository"
                iconSrc="https://www.svgrepo.com/show/512317/github-142.svg"
                url={project.projectLink}
            ></CtaTag>
        </section>

        <section class="new-section">
            <div class="text-container">
                <h3>Motivation</h3>
                <p>{project.motivation}</p>
            </div>
        </section>
        <section class="new-section">
            <div class="text-container">
                <h3>Strategy</h3>
                <p>{project.strategy}</p>
            </div>
        </section>
        <section class="new-section">
            <div class="text-container">
                <h3>Outcome</h3>
                <p>{project.outcome}</p>
            </div>
        </section>
    </section>
</section>

<Footer></Footer>

<style>
    #preview-img {
        border-radius: 7px;
        border: 1px solid var(--color-border);
    }

    h2 {
        color: var(--color-text-muted);
        font-size: var(--size-text-smalltext);
    }

    .icon {
        height: var(--size-icon);
        width: var(--size-icon);
        filter: invert(0.5);
    }

    .return {
        display: flex;
        align-items: center;
    }

    .stack-align {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
</style>
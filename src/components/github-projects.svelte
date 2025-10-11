<script lang="ts">
    import ProjectOverview from '$components/project-overview.svelte';
    import showcaseRepos from '$data/showcase-repo.json';

    interface Project {
        projectTitle: string;
        description: string;
        projectLink: string;
        projectImage: string;
        stackComponents: { label: string; iconSrc: string; }[];
    }

    function getIconLanguages(lang: string): string {
        const icons: Record<string, string> = {
            HTML: 'https://www.svgrepo.com/show/373669/html.svg',
            CSS: 'https://www.svgrepo.com/show/373535/css.svg',
            Svelte: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
            JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
            Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            JupyterNotebook: "https://www.svgrepo.com/show/373718/jupyter.svg",
            Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            Kotlin: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
        }
        return icons[lang] || '';
    }

    let projects: Project[] = showcaseRepos.map((project) => ({
        ...project,
        stackComponents: project.stackComponents.map((stack) => ({
            ...stack,
            iconSrc: getIconLanguages(stack.label),
        })),
    }));
</script>

<section class="page">
    <div class="projects-container">
        {#each projects as project}
            <ProjectOverview
                    projectTitle={project.projectTitle}
                    description={project.description}
                    projectLink={project.projectLink}
                    projectImage={project.projectImage}
                    stackComponents={project.stackComponents}
            />
        {/each}
    </div>
</section>

<style>
    .projects-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
    }
</style>
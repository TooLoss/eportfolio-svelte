<script lang="ts">
    import ProjectOverview from '$components/project-overview.svelte';
    import showcaseRepos from '$data/showcase-repo.json';
    import { getIconLanguages } from "$lib/iconLanguages";

    interface Project {
        projectTitle: string;
        description: string;
        projectLink: string;
        projectImage: string;
        stackComponents: { label: string; iconSrc: string; }[];
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
                    projectLink="/projects/{project.projectTitle}"
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
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        align-items: stretch;
        grid-auto-rows: max-content;
    }

    @media (max-width: 768px) {
        .projects-container {
            display: flex;
            flex-direction: column;
        }
    }


</style>
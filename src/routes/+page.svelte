<script lang="ts">
    import {type Snippet} from 'svelte';

    import CtaTag from '$components/cta-tag.svelte';
    import Stack from '$components/stack.svelte';
    import ProjectOverview from '$components/project-overview.svelte';
    import Education from '$components/education.svelte';
    import GithubProjects from '$components/github-projects.svelte';
    import CtaButton from '$components/cta-button.svelte';

    import githubIcon from '$lib/assets/github-logo.svg';
    import linkedinIcon from '$lib/assets/linkedin-logo.svg';

    import pythonIcon from '$lib/assets/python-icon.svg';

    let pinnedStack = [
        {label: "Python", iconSrc: pythonIcon},
    ]
</script>

<header>
    <section class="page">
        <section class="section-view">
            <div class="text-container">
                <h1>Hi! This is Bilèle El Haddadi. 👋</h1>
                <h2 class="color-text-muted">software engineer student</h2>
                <div class="align-horizontal margin-top1">
                    <CtaTag
                            label="TooLoss"
                            url="https://github.com/TooLoss"
                            iconSrc={githubIcon}
                    ></CtaTag>
                    <CtaTag
                            label="bilele-elhaddadi"
                            url="https://www.linkedin.com/in/bilele-elhaddadi/"
                            iconSrc={linkedinIcon}
                    ></CtaTag>
                </div>
            </div>
            <p>I focus on coding in low level languages, with skills extending to visual design and representation. I
                enjoy
                taking ideas and developing them into concrete solutions.</p>
        </section>
    </section>
</header>

<!-- TODO: API Call to get projects -->
<section class="page">
    <section class="section-view">
        <div class="new-section">
            <h3>Education</h3>
            <div class="no-gap margin-top1">
                <Education
                        name="ENSEEIHT - French engineering school"
                        date="2025 - Current"
                        subsection="Top-tier French Grande École of Engineering · Computer Science"
                ></Education>
                <Education
                        name="Jeanne d’Albret - CPGE"
                        date="2023 - 2025"
                        subsection="Preparatory Classes for Grandes Écoles (CPGE)"
                ></Education>
                <Education
                        name="Alfred Kastler - High School"
                        date="2020 - 2023"
                        subsection="High School Diploma  - Highest Honors"
                ></Education>
            </div>
        </div>
        <div class="new-section">
            <h3>Projects</h3>
            <div class="align-horizontal margin-top1">
                <ProjectOverview
                        projectTitle="document scan"
                        projectLink="https://github.com/TooLoss/document-scan-python"
                        description="A pure Python document scanner developed from scratch for academic purposes."
                        projectImage="https://github.com/TooLoss/document-scan-python/raw/main/showcase-images/before-after.jpg"
                        stackComponents={pinnedStack}>
                </ProjectOverview>
            </div>
        </div>
    </section>
</section>

<GithubProjects></GithubProjects>

<CtaButton
    label="Learn More"
></CtaButton>

<style lang="css">
    @import "../app.css";
</style>
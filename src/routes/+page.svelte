<script lang="ts">
    import { revealText } from "$lib/revealHashAction";
    import { onMount } from "svelte";

    let titleRef: HTMLElement;

    import CtaTag from '$components/cta-tag.svelte';
    import ProjectOverview from '$components/project-overview.svelte';
    import Education from '$components/education.svelte';
    import CtaButton from '$components/cta-button.svelte';
    
    import GithubProjects from "\$components/github-projects.svelte";

    import emailLogo from '$lib/assets/email-logo.svg'

    let pinnedStack = [
        {label: "Python", iconSrc: "https://www.svgrepo.com/show/452091/python.svg"},
    ]

    onMount(() => {
        revealText(titleRef, { duration: 1500 });
    });
</script>

<header>
    <section class="page">
        <section class="section-view">
            <div class="text-container">
                <h1 id="main-title" bind:this={titleRef}>Hi! This is Bilèle El Haddadi. 👋</h1>
                <h2 class="color-text-muted">software engineer student</h2>
                <h2 class="color-text-muted">toulouse · france</h2>
                <div class="align-horizontal margin-top1">
                    <CtaTag
                            label="bilele.elhaddadi@gmail.com"
                            url="mailto:bilele.elhaddadi@gmail.com"
                            iconSrc={emailLogo}
                    ></CtaTag>
                    <CtaTag
                            label="TooLoss"
                            url="https://github.com/TooLoss"
                            iconSrc="https://www.svgrepo.com/show/512317/github-142.svg"
                    ></CtaTag>
                    <CtaTag
                            label="bilele-elhaddadi"
                            url="https://www.linkedin.com/in/bilele-elhaddadi/"
                            iconSrc="https://www.svgrepo.com/show/494278/linkedin-round.svg"
                    ></CtaTag>
                    <CtaTag
                            label="loss-graph"
                            url="https://www.artstation.com/loss_graph"
                            iconSrc="https://www.svgrepo.com/show/341618/artstation.svg"
                    ></CtaTag>
                </div>
                <p class="margin-top1">I focus on coding in low level languages, with skills extending to visual design and representation. I
                    enjoy
                    taking ideas and developing them into concrete solutions.</p>
            </div>
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
                        end={true}
                ></Education>
            </div>
        </div>
        <div class="new-section">
            <h3>Projects</h3>
            <div class="align-horizontal margin-top1">
                <div class="project-overview">
                    <ProjectOverview
                            projectTitle="document scan"
                            projectLink="https://github.com/TooLoss/document-scan-python"
                            description="A pure Python document scanner developed from scratch for academic purposes."
                            projectImage="https://github.com/TooLoss/document-scan-python/raw/main/showcase-images/before-after.jpg"
                            stackComponents={pinnedStack}>
                    </ProjectOverview>
                </div>
                <div class="more-project">
                    <div class="text-container">
                        <h3>More Project</h3>
                        <p>See more projects here</p>
                        <div class="margin-top1">
                            <CtaButton
                                    label="More Projects"
                            ></CtaButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</section>

<GithubProjects>

</GithubProjects>


<!-- TODO: Improve footer -->
<footer>
    <div class = "bar"></div>
    <div class="footer-container center">
        <p>Made with Svelte.</p>
        <p>&copy; {new Date().getFullYear()} Bilèle EL HADDADI. MIT License.</p>
    </div>
</footer>

<style lang="css">
    @import "../app.css";
</style>
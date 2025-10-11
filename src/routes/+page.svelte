<script lang="ts">
    import { type Snippet } from 'svelte';

    import CtaButton from '$components/cta-tag.svelte';
    import Stack from '$components/stack.svelte';
    import ProjectOverview from '$components/project-overview.svelte';

    import githubIcon from '$lib/assets/github-logo.svg';
    import linkedinIcon from '$lib/assets/linkedin-logo.svg';

    import pythonIcon from '$lib/assets/python-icon.svg';
    type StackProps = {
        label: string;
        iconSrc: string;
    }
    let stack = [
        { label: "TEST", iconSrc: "" },
        { label: "TEST", iconSrc: "" }
    ]
</script>

<header>
    <section class="page">
        <section class="section-view">
            <div class="text-container">
                <h1>Hi! This is Bilèle El Haddadi. 👋</h1>
                <h2 class="color-text-muted">software engineer student</h2>
                <div class="align-horizontal gap1">
                    <CtaButton
                            label="TooLoss"
                            iconSrc={githubIcon}
                    ></CtaButton>
                    <CtaButton
                            label="bilele-elhaddadi"
                            iconSrc={linkedinIcon}
                    ></CtaButton>
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
        </div>
        <div class="new-section">
            <h3>Projects</h3>
            <div class="align-horizontal gap1">
                <ProjectOverview
                    projectImage="https://github.com/TooLoss/document-scan-python/raw/main/showcase-images/before-after.jpg"
                    stackComponents = {stack}>
                </ProjectOverview>
            </div>
        </div>
    </section>
</section>


<style lang="css">
    @import "../app.css";
</style>
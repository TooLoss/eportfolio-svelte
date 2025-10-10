<script>
    import CtaButton from '$components/cta-tag.svelte';
    import Stack from '$components/stack.svelte';

    import githubIcon from '$lib/assets/github-logo.svg';
    import linkedinIcon from '$lib/assets/linkedin-logo.svg';

    import pythonIcon from '$lib/assets/python-icon.svg';
</script>

<header>
    <section class="page">
        <section class="new-section">
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
            <h3>Education</h3>
            <h3>Projects</h3>
            <h3>Skills</h3>
        </section>
    </section>
</header>

<Stack
label="unreal engine"
iconSrc={pythonIcon}
>

</Stack>

<style>
    @import "../app.css";
</style>
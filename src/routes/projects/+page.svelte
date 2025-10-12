<script lang="ts">
    import GithubProjects from "\$components/github-projects.svelte";
    import Footer from '$components/footer.svelte'
</script>

<section class="page">
    <section class="section-view">
        <section class="new-section">
            <a class="return" href="/">
                <img class="icon" src="https://www.svgrepo.com/show/533620/arrow-sm-left.svg" alt="←"/>
                <h2>previous</h2>
            </a>
            <div class="text-container">
                <h1>Projects</h1>
                <GithubProjects>

                </GithubProjects>
            </div>
        </section>
    </section>
</section>

<Footer></Footer>

<style>
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
</style>
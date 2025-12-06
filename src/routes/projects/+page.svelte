<script lang="ts">
    import GithubProjects from "\$components/github-projects.svelte";
    import CtaReturn from "\$components/cta-return.svelte";
    export const prerender = true;
</script>

<section class="page">
    <section class="section-view">
        <section class="new-section">
            <CtaReturn></CtaReturn>
            <div class="text-container">
                <h1>Projects</h1>
                <GithubProjects>

                </GithubProjects>
            </div>
        </section>
    </section>
</section>

<style>
</style>

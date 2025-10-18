<script lang="ts">
    import GithubProjects from "\$components/github-projects.svelte";
    import Footer from '$components/footer.svelte'
    import CtaReturn from "\$components/cta-return.svelte";
    import Navbar from "\$components/navbar.svelte";
    export const prerender = true;
</script>

<Navbar
    currentPage="projects"
></Navbar>

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

<Footer></Footer>

<style>
</style>

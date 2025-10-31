<script>
    import CtaReturn from "\$components/cta-return.svelte";
    import ListStack from "\$components/list-stack.svelte";
    import Footer from "\$components/footer.svelte";
    import Navbar from "\$components/navbar.svelte";
    import {getIconLanguages} from "$lib/iconLanguages.js";
    export const prerender = true;
</script>

<Navbar
    currentPage="courses"
></Navbar>

<section class="page">
    <section class="section-view">
        <section class="new-section">
            <CtaReturn></CtaReturn>
            <div class="text-container">
                <h1>Engineering course</h1>
                <h2 class="color-text-muted">key features</h2>
            </div>
            <h3>First Year</h3>
            <p>
            At ENSEEIHT, my first year covers math, algorithms,
            programming, and introduction courses in AI, data, and software.
            Later, I would likely focus on either software engineering or the
            specialized AI track.
            </p>
            <ListStack
                    name="Computer Science"
                    stackComponents={[
    { label: "Imperative programming", iconSrc: "" },
    { label: "Modeling", iconSrc: "" },
    { label: "Architecture", iconSrc: "" },
    { label: "Data Analysis", iconSrc: "" },
    { label: "Systems", iconSrc: "" },
    { label: "Signal Processing ", iconSrc: "" },
    { label: "Object-Oriented", iconSrc: "" },
    { label: "Machine Learning", iconSrc: "" },
  ]}
            />
            <ListStack
                    name="Programming Languages"
                    stackComponents={[
    { label: "Ada", iconSrc: getIconLanguages("Ada") },
    { label: "C", iconSrc: getIconLanguages("C") },
  ]}
            />
            <ListStack
                    name="Mathematics"
                    stackComponents={[
    { label: "Probability", iconSrc: "" },
    { label: "Statistics", iconSrc: "" },
    { label: "Numerical Analysis ", iconSrc: "" },
    { label: "Optimization", iconSrc: "" }
  ]}
            />
        </section>
    </section>
</section>

<Footer/>

<style>
</style>

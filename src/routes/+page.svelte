<script lang="ts">
    import {revealText} from "$lib/revealHashAction";
    import {onMount} from "svelte";

    let titleRef: HTMLElement;

    import CtaTag from '$components/cta-tag.svelte';
    import ProjectOverview from '$components/project-overview.svelte';
    import Education from '$components/education.svelte';
    import CtaButton from '$components/cta-button.svelte';
    import Footer from '$components/footer.svelte'
    import Navbar from '$components/navbar.svelte'
    import Swiper from "\$components/swiper.svelte";

    import GithubProjects from "\$components/github-projects.svelte";

    import emailLogo from '$lib/assets/email-logo.svg'
    import lossLogo from "$lib/assets/loss-logo.jpg"

    import resumeEN from "/static/ResumeCS-EN.pdf"
    import resumeFR from "/static/ResumeCS-FR.pdf"

    let pinnedStack = [
        {label: "Python", iconSrc: "https://www.svgrepo.com/show/452091/python.svg"},
    ]


    import showcaseArt from "$data/showcase-art.json";

    const {swiperImages} = showcaseArt;

    onMount(() => {
        revealText(titleRef, {duration: 1500});
    });

</script>

<Navbar
        currentPage="home"
></Navbar>

<header>
    <section class="page">
        <section class="section-view">
            <div class="text-container">
                <h1 id="main-title" bind:this={titleRef}>Hi! This is Bilèle El Haddadi. 👋</h1>
                <h2 class="color-text-muted">software engineer student · first year</h2>
                <h2 class="color-text-muted">
                    <a href="https://www.enseeiht.fr/fr/index.html" target="_blank" class="color-text-muted hover-link">enseeiht</a>
                </h2>
                <h2 class="color-text-muted">toulouse · france 🇫🇷</h2>
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
                </div>
                <p class="margin-top1">I enjoy writing code and creating digital art. It lets me shape ideas into
                    something concrete. When I code, I focus on solving specific problems and building tools that
                    simplify daily tasks. The best part is seeing others find my work useful or inspiring. That makes it
                    even more meaningful.
                </p>
                <div class="margin-top1 two-grid">
                    <CtaButton
                            url="{resumeFR}"
                            label="French Resume"></CtaButton>
                    <CtaButton
                            url="{resumeEN}"
                            label="English Resume"></CtaButton>
                    <CtaButton
                            url="https://youtu.be/AakWdjNBZW4"
                            newpage={true}
                            label="Video Pitch"></CtaButton>
                </div>
            </div>
        </section>
    </section>
</header>

<article class="page">
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
            <div class="box-filled">
                <div class="text-container">
                    <h3>Learn More</h3>
                    <p class="color-text-muted">learn more about engineering courses</p>
                    <div class="margin-top1">
                        <CtaButton
                                url="/education"
                                label="Engineering Courses"></CtaButton>
                    </div>
                </div>
            </div>
        </div>
        <div class="new-section">
            <div class="text-container">
                <h3>Projects</h3>
                <p>Explore my projects below and learn more about goal, strategy and outcome for each one.</p>
            </div>
            <div class="grid-2 margin-top1">
                <div class="project-overview">
                    <ProjectOverview
                            projectTitle="document scan"
                            projectLink="/projects"
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
                                    url="/projects"
                                    label="More Projects"
                            ></CtaButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="new-section">
            <h3>Career Development</h3>
            <div class="no-gap margin-top1">
                <Education
                        name="Freelancer"
                        date="2018 - 2021"
                        subsection="Improved my communication and managment skills, key strenghts for a future software engineer. It also reinforced my adaptability and autonomy to deliver projects on time, preparing me for real-world challenges in tech."
                ></Education>
                <Education
                        name="Observational Internship - Alcatel Lucent Entreprise"
                        date="jan. 2019 - feb. 2019"
                        subsection="Early 3rd Year internship introduced me to corporate environments and team dynamics and also raise my interest in technology and engineering. It help me understand the importance of collaboration in a compagny, values I now apply to my studies."
                        end={true}
                ></Education>
            </div>
        </div>
        <div class="new-section">
            <div class="text-container">
                <h3>Interests</h3>
                <p>Engineering student & artist: I solve technical problems methodically and create digital art, 3D
                    models, and games sometimes for clients. This balance keeps me sharp, reliable, and ready to build
                    practical software as a developer.</p>
            </div>
            <div class="align-horizontal">
                <CtaTag
                        label="LossGraphiste"
                        url="https://linktr.ee/LossGraphiste"
                        iconSrc="https://cdn.brandfetch.io/id_tNIm05N/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B"
                ></CtaTag>
                <CtaTag
                        label="loss-graph"
                        url="https://www.artstation.com/loss_graph"
                        iconSrc="https://www.svgrepo.com/show/341618/artstation.svg"
                ></CtaTag>
                <CtaTag
                        label="Losss"
                        url="https://sketchfab.com/lossgraph"
                        iconSrc="https://www.svgrepo.com/show/443422/brand-sketchfab.svg"
                ></CtaTag>
                <CtaTag
                        label="Loss_"
                        url="https://www.behance.net/loss_"
                        iconSrc="https://www.svgrepo.com/show/521502/behance.svg"
                ></CtaTag>
            </div>
            <div class="logo-center">
                <img src={lossLogo} class="rounded-image container" alt="loss logo">
            </div>
            <div class="text-container">
                <p>
                    I’m studying engineering, where I’ve learned to solve technical problems methodically. Alongside
                    my studies, I create digital art, 3D models, and video games work. Sometimes for clients,
                    sometimes just for the joy of it.
                </p>
                <div class="section-view">
                    <Swiper>
                        {#each swiperImages as img}
                            <img class="swiper-image" src={img}>
                        {/each}
                    </Swiper>
                </div>
                <p>
                    These experiences have taught me how to communicate effectively, meet deadlines, and collaborate
                    with different kinds of people. They also help me step back, recharge through creativity, and
                    return to technical projects with a fresh perspective and improved focus.
                </p>
                <p>
                    Most of my creations are free to use to benefit most
                    people. I also benefit from the free work of others in my
                    projects, so I had to make my own contribution. I'm in
                    favor of a free open source web to keep the circle of
                    creativity alive.
                </p>
                <div class="align-horizontal justify-center">
                    <div class="sketchfab-embed-wrapper">
                        <iframe title="Blastech B1-NA | Star Wars Blaster" frameborder="0" allowfullscreen
                                mozallowfullscreen="true"
                                webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking"
                                xr-spatial-tracking
                                execution-while-out-of-viewport execution-while-not-rendered web-share
                                src="https://sketchfab.com/models/a815aa634beb4aba8316b5850c20a00b/embed?camera=0"></iframe>
                    </div>
                    <div class="sketchfab-embed-wrapper">
                        <iframe title="SoroSuub F-187 Fusioncutter : Star Wars Tool" frameborder="0" allowfullscreen
                                mozallowfullscreen="true" webkitallowfullscreen="true"
                                allow="autoplay; fullscreen; xr-spatial-tracking"
                                xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered
                                web-share
                                src="https://sketchfab.com/models/bc79e0fb25ea40528eac5da073f941a1/embed?camera=0"></iframe>
                    </div>
                    <div class="sketchfab-embed-wrapper">
                        <iframe title="Heckler &amp; Koch G3 Wooden [Free]" frameborder="0" allowfullscreen
                                mozallowfullscreen="true"
                                webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking"
                                xr-spatial-tracking
                                execution-while-out-of-viewport execution-while-not-rendered web-share
                                src="https://sketchfab.com/models/46c61eb1e59c44dba8c273f4b2828f65/embed?camera=0"></iframe>
                    </div>
                </div>
                <p>
                    Now, I want to apply these skills as a software developer, building practical tools that address
                    real needs.
                </p>
            </div>
        </div>
        <div class="new-section">
            <h3>Civic Engagement</h3>
            <a class="logo-center" href="https://net7.dev" target="_blank">
                <img src="https://net7.dev/net7.svg" class="heading-image container" alt="net7 logo">
            </a>
            <p>
            I am interested in joining Net7, ENSEEIHT’s student association specializing in
            digital projects and collaborative development. My goal is to
            expand my expertise in computer science while contributing to the
            association’s initiatives, including workshops, hackathons, and
            team-based projects. I hope this experience will allows me to engage with peers
            and address technical challenges.
            </p>
            <a class="logo-center" href="https://capitoledulibre.org/" target="_blank">
                <img src="https://capitoledulibre.org//img/logo-capitoledulibre.png" class="heading-images container" alt="capitale du libre logo">
            </a>
            <p>
            With Net7, I’m also involved in Capitole du Libre 2025, an
            open-source event organized at the school in collaboration with the
            association. I’m looking forward to contribute to the projects, as the
            event is still upcoming. Open source matters to me because it
            aligns with how I like to work: building projects that can
            help others. It’s rewarding when someone finds value in what I
            contribute.
            </p>
        </div>
        <div class="new-section">
            <div class="text-container">
                <h3>Mobility</h3>
                <p>
                Mobility is a mandatory part of French engineering training (1 semester at least),
                pushing students to gain international experience through
                exchanges, internships, or projects abroad. At ENSEEIHT, it’s a
                chance to grow both professionally and personally. Here my mobility projects for the
                upcomming years :
                </p>
                <p>
                The UK is a major center for technology and innovation, with top universities
                and a fast-growing tech scene and cosmopolitan cities. It’s a place where I can explore advanced fields
                like AI, cybersecurity, and fintech while experiencing a mix of rich history
                and modern creativity.
                </p>
                <p>
                Germany is well known for it's strong engineering tradition, focusing on precision,
                sustainability, and industry leadership. By learning German and working in this
                environment, I want to improve my skills in science and software
                development, turning ideas into practical and efficient solutions.
                </p>
                <p>
                China is leading the way in fast-paced technological progress,
                especially in AI and smart infrastructure. It’s a country where
                big ideas become reality quickly. I’m excited to see how
                technology is changing industries and society, and to learn
                from this dynamic environment.
                </p>
            </div>
        </div>
    </section>
</article>

<Footer></Footer>

<style lang="css">
    @import "../app.css";
</style>

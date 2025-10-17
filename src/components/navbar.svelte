<script lang="ts">
    let {
        currentPage=""
    } = $props();

    const pages = [
        {name: "home", url:'/', selected:false},
        {name: "projects", url:'/projects', selected:false},
        {name: "about", url:'', selected:false},
    ]

    pages.forEach(page => {
        page.selected = page.name === currentPage;
    });

</script>

<nav>
    <div class="fill">
        <section class="content">
            <a href="/">
                <p id="main-title">Bilèle EL HADDADI</p>
            </a>
            <div class="center">
                {#each pages as page}
                <a href={page.url}>
                    <p class="{page.selected ? 'selected' : ''}">{page.name}</p>
                </a>
                {/each}
            </div>
        </section>
    </div>
</nav>

<style>
    :root {
        --navbar-padding: 1rem;
        --navbar-margin-horizontal: 1rem;
        --navbar-margin-vertical: 1rem;
        --navbar-maxwidth: 1700px;
    }

    .selected {
        outline: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 7px;
        padding: 0.4rem 1rem;
    }

    #main-title {
        font-family: monospace;
        word-wrap: break-word;
        white-space: pre-wrap;
        word-break: break-word;
        transition: all 0.1s ease;
        text-overflow: fade;
    }

    .fill {
        height: 100%;
        width: 100%;
        padding: var(--navbar-margin-vertical) var(--navbar-margin-horizontal);

        /*background-color: var(--color-bg-2);*/
        border-radius: 7px;
        margin: var(--navbar-margin-vertical) var(--navbar-margin-horizontal);
        background: var(--color-bg-2) 0.2;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);

        max-width: var(--navbar-maxwidth);
    }

    nav {
        position: sticky;
        top: 0;
        z-index: 1000;
        padding: 1rem var(--navbar-padding);

        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
    }

    .content {
        display: flex;
        justify-content: left;
        gap: var(--size-section-gap);
    }

    p {
        font-family: monospace;
        color: var(--color-text);
        font-variant: small-caps slashed-zero;
        font-size: var(--size-text-subtitle);
        flex-grow: 1;
    }

    a {
        cursor: pointer;
        align-content: center;
    }

    .center {
        display: flex;
        gap: 4rem;
        align-items: center;
        justify-content: center;
    }
</style>
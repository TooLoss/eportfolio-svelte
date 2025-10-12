<script>
</script>

<nav>
    <section class="content">
        <div class="left">
            <a>
                <p>Bilèle EL HADDADI</p>
            </a>
        </div>
        <div class="center">
            <a>
                <p>education</p>
            </a>
            <a>
                <p>projects</p>
            </a>
            <a>
                <p>about</p>
            </a>
        </div>
        <div class="right">
        </div>
    </section>
</nav>

<style>
    nav {
        padding: 1rem;
        background-color: var(--color-bg-2);
        border: 1px solid var(--color-border);

        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;

        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    }

    .content {
        max-width: 2500px;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }

    p {
        font-family: monospace;
        color: var(--color-text);
        font-variant: small-caps slashed-zero;
        font-size: var(--size-text-subtitle);
    }

    a {
        cursor: pointer;
    }

    .left {
        grid-area: 1 / 1 / 2 / 2;
        display: flex;
        gap: 1rem;
        align-items: start;
        justify-content: left;
    }

    .center {
        grid-area: 1 / 2 / 2 / 3;
        display: flex;
        gap: 4rem;
        align-items: center;
        justify-content: center;
    }

    .right {
        grid-area: 1 / 3 / 2 / 4;
        display: flex;
        gap: 1rem;
        align-items: end;
        justify-content: right;
    }
</style>
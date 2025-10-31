<script>
</script>

<footer>
    <section id="no-margin" class="margin-top1">
        <div class="bar"></div>

        <section class="contact-section">
            <div class="text-container">
                <h3>Contacts</h3>
                <h2>bilèle el haddadi</h2>
            </div>
            <div class="contacts">
                <a href="mailto:bilele.elhaddadi@gmail.com" class="gray"
                   rel="noopener noreferrer" target="_blank">· Email</a>
                <a href="https://www.linkedin.com/in/bilele-elhaddadi/" class="gray"
                   rel="noopener noreferrer" target="_blank">· LinkedIn</a>
                <a href="https://github.com/TooLoss/" class="gray"
                   rel="noopener noreferrer" target="_blank">· GitHub</a>
            </div>
        </section>

        <div class="bar"></div>
        <div class="footer-container center">
            <p>Made with Svelte.</p>
            <p>&copy; {new Date().getFullYear()} Bilèle EL HADDADI. MIT License.</p>
        </div>
    </section>
</footer>

<style lang="css">

    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        justify-content: center;
        margin: 0 2rem 2rem;
    }

    h2 {
        color: var(--color-text-muted)
    }

    #no-margin {
        gap: 0;
        width: 100%;
        max-width: 1200px;
    }

    .footer-container {
        padding-bottom: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
    }

    .contacts {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        margin-left: 1rem;
    }

    .bar {
        margin: 4rem 0;
        height: 0;
        background-color: var(--color-border);
        border: 1px solid var(--color-border);
    }

    .contact-section {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-content: start;
        justify-content: start;
        align-items: start;
        margin: 0 4rem;
        gap: 2rem
    }

    .gray {
        color: var(--color-text-muted);
        font-size: var(--size-text-subtitle);
        font-family: monospace;
    }

    @media (max-width: 782px) {
        .contacts {
            gap: 1rem;
        }

        .contact-section {
            margin: 0 1rem;
        }
    }
</style>

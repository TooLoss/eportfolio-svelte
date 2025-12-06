<script lang="ts">
    let {
        name = "Lycée Alfred Kaster",
        subsection = "Baccalauréat Général",
        date = "2022-2023",
        end = false,
    } = $props();
</script>

<section class="education-section">
    <div class="education-form">
        <div class="education-form-circle">
        </div>
        <div class="education-form-stick" class:education-form-stick-end={end}>
        </div>
    </div>
    <div class="flex-grow text-container margin-down">
        <div class="education-text-align">
            <div class="text-container">
                <h3>{name}</h3>
            </div>
            <div class="education-bar">
            </div>
            <div class="text-container date">
                <h3 class="date-text">{date}</h3>
            </div>
        </div>
        <div>
            <p>{subsection}</p>
        </div>
    </div>
</section>

<style>
    :root {
        --education-circlesize: 2rem;
        --education-border: 5px;
        --education-border-stick: 3px;
        --education-spacing: 5rem;
    }

    .education-section {
        display: flex;
        gap: 2rem;
    }

    .education-text-align {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
        align-items: center;
        gap: 1rem;
    }

    h3 {
        font-size: var(--size-text-subtitle);
    }

    .margin-down {
        margin-bottom: var(--education-spacing);
        animation: 1s ease-in-out 0s 1 marginSlide;
    }

    @keyframes marginSlide {
        0% {
            margin-bottom: 10rem;
        }
        20% {
            margin-bottom: 10rem;
        }
        100% {
            margin-bottom: var(--education-spacing);
        }
    }

    .education-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .education-form-circle {
        border-radius: 50%;
        height: var(--education-circlesize);
        width: var(--education-circlesize);
        border: var(--education-border) solid var(--color-text);
    }

    .education-form-stick {
        background-color: var(--color-text);
        width: 0;
        border: var(--education-border-stick) solid var(--color-text);
        flex-grow: 1;
        align-content: center;
        justify-content: center;
    }

    .education-form-stick-end {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, var(--color-text) 100%);
        border-width: var(--education-border-stick);
        border-style: solid;
        border-image: linear-gradient(0deg, rgba(0, 0, 0, 0), var(--color-text)) 1;
    }

    .education-bar {
        flex-grow: 1;
        border: 1px solid var(--color-bg-2);
        width: 0;
        height: 1px;
    }

    .date {
        float: right;
        justify-content: right;
    }

    .date-text {
        color: var(--color-text-muted);
        font-weight: 500;
        font-size: var(--size-text-smalltext);
        font-style: italic;
    }

    @media (max-width: 1280px) {
        :root {
        }
    }

    @media (max-width: 768px) {
        :root {
            --education-circlesize: 1.5rem;
            --education-border: 3px;
            --education-border-stick: 2px;
        }

        .education-bar {
            display: none;
        }

        .education-text-align {
            flex-direction: column;
            justify-content: left;
            align-items: start;
        }
    }
</style>
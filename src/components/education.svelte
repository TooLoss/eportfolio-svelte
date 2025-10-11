<script lang="ts">
    let {
        name="Lycée Alfred Kaster",
        subsection="Baccalauréat Général",
        date="2022-2023",
    } = $props();
</script>

<section class="education-section">
    <div class="education-form">
        <div class="education-form-circle">

        </div>
        <div class="education-form-stick">

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
    .education-section {
        display: flex;
        gap: 2rem;
    }

    .education-text-align {
        display: flex;
        flex-grow: 1;
        align-items: center;
        gap: 1rem;
    }

    .margin-down {
        margin-bottom: 3rem;
    }

    .education-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .education-form-circle {
        border-radius: 50%;
        height: 2rem;
        width: 2rem;
        border: 5px solid var(--color-text);
    }

    .education-form-stick {
        width: 1px;
        border: 3px solid var(--color-text);
        flex-grow: 1;
        align-content: center;
        justify-content: center;
    }

    .education-bar {
        flex-grow: 1;
        border: 1px solid var(--color-bg-2);
        height: 1px;
    }

    .date {
        float: right;
        justify-content: right;
    }

    .date-text {
        color: var(--color-text-muted);
        font-weight: 500;
    }
</style>
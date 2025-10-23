<div class="gallery-container">
    <div class="gallery">
        <slot />
    </div>
</div>

<style>
    .gallery-container {
        width: 100%;
        overflow-x: auto;
        padding: 1rem 0;
    }

    .gallery {
        display: flex;
        gap: 1rem;
        padding: 0 1rem;
        width: max-content;
    }

    ::slotted(img) {
        height: 200px;
        flex-shrink: 0;
        border-radius: 8px;
        object-fit: cover;
    }
</style>

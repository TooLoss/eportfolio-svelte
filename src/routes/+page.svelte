<script>
  import CtaButton from '$components/cta-tag.svelte';
  import githubIcon from '$lib/assets/github-logo.svg'; 
</script>

<header>
    <section class="new-section">
        <div class="text-container">
            <h1>TEST</h1>
        </div>
    </section>
</header>

<CtaButton
  label="TooLoss"
  iconSrc={githubIcon}
></CtaButton>

<style>
	@import "../app.css";
</style>
<script>
  import CtaButton from '$components/cta-tag.svelte';
  import githubIcon from '$lib/assets/github-logo.svg'; 
</script>



<CtaButton
  label="View Source" 
  iconSrc={githubIcon}
></CtaButton>

<style>
	@import "../app.css";
</style>
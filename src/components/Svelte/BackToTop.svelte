<script>
    import { fade } from 'svelte/transition'
    export let track;
    
    let visible = false;

    new IntersectionObserver(entries => {
        entries[0].intersectionRatio > 0 ?
        visible = false :
        visible = true
    }).observe(document.querySelector(`#content`))

    function scrollUp() {
        document.body.scrollIntoView({ behavior: 'smooth'})
    }
</script>

{#if visible}
    <button
        transition:fade
        on:click={scrollUp}
    >
        Back to top
    </button>
{/if}
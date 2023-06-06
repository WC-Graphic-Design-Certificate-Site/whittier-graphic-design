<script>
    import { slide } from 'svelte/transition';
    import { Popover, PopoverButton, PopoverPanel } from "@rgossiaux/svelte-headlessui";

    const styles = {
        brand: {
            menuColor: "var(--color-neutral-light)",
            menuBg: "var(--color-brand-primary-dark)"
        },
        "brand-reverse": {
            menuColor: "var(--color-brand-primary)",
            menuBg: "var(--color-brand-primary-light)"
        }
    }

    export let theme = "brand";
</script>

<nav class="nav">
    <Popover let:open>
        <PopoverButton class="menu-toggle">
            <div class="menu-toggle-container" class:open style="--menu-color:{styles[theme].menuColor}; --menu-bg:{styles[theme].menuBg}">
                {#if open}
                    <span class="sr-only">Close Panel</span>
                {:else}
                    <span class="sr-only">Open Panel</span>
                {/if}
                {#if open}
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" class="close"><path d="M345 137l17-17L328 86.1l-17 17-119 119L73 103l-17-17L22.1 120l17 17 119 119L39 375l-17 17L56 425.9l17-17 119-119L311 409l17 17L361.9 392l-17-17-119-119L345 137z"/></svg>
                {:else}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" height="1em" class="hamburger"><rect x="6.67" y="8.62" width="82" height="6"/><rect x="6.67" y="26.87" width="82" height="6"/><rect x="6.67" y="45.12" width="82" height="6"/></svg>
                {/if}
                <!-- <div class="menu-bars" class:open>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> -->
            </div>
        </PopoverButton>
        {#if open}
            <div class="nav-panel" transition:slide={{ duration: 300 }}>
                <PopoverPanel static>
                    <slot></slot>
                </PopoverPanel>
            </div>
        {/if}
    </Popover>
</nav>

<style>
    .nav {
        position: relative;
    }

    .menu-toggle-container {
        padding: 0.25rem;
        background-color: transparent;
        width: 6rem;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* .menu-toggle-container:hover {
        background-color: var(--menu-bg);
    } */

    .menu-toggle-container.open {
        background-color: var(--menu-bg);
    }

    .menu-toggle-container svg {
        fill: var(--menu-color);
    }

    .hamburger {
        height: 90%;
        width: auto;
    }

    .close {
        height: 70%;
        width: auto;
    }

    .nav-panel {
        position: absolute;
        top: 64px;
        right: 0;
        /* background: var(--color-neutral-dark); */
        background: rgb(74 40 93 / 75%);
        backdrop-filter: blur(12px);
        color: white;
        min-width: 25rem;
        padding: 3rem;
    }

    @media (max-width: 768px) {
        .nav-panel {
            min-width: 300px;
            max-width: 95%;
            padding: 3rem 3rem 2rem 2rem;
        }
    }
</style>
<script>
    import { slide } from 'svelte/transition';
    import { Popover, PopoverButton, PopoverPanel } from "@rgossiaux/svelte-headlessui";

    const styles = {
        brand: {
            menuColor: "var(--color-neutral-light)",
            menuBg: "var(--color-brand-primary-dark)"
        },
        "brand-reverse": {
            menuColor: "var(--color-brand-secondary-light)",
            menuBg: "#ebe2f3" // #e4dbdf4f
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="close"><path d="M345 137l17-17L328 86.1l-17 17-119 119L73 103l-17-17L22.1 120l17 17 119 119L39 375l-17 17L56 425.9l17-17 119-119L311 409l17 17L361.9 392l-17-17-119-119L345 137z"/></svg>
                {:else}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" class="hamburger"><rect x="6.67" y="4" width="90" height="6"/><rect x="6.67" y="25" width="90" height="6"/><rect x="6.67" y="46" width="90" height="6"/></svg>
                {/if}
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
        position: relative;
        padding: 0.25rem;
        background-color: transparent;
        width: 3rem;
        height: 2.5rem;
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
        height: 1.25em;
        width: auto;
    }

    .close {
        height: 1.25em;
        width: auto;
    }

    @media (max-width: 768px) {
        .nav-panel {
            min-width: 300px;
            max-width: 95%;
            padding: 3rem 3rem 2rem 2rem;
        }
    }

    @media (max-width: 640px) {
        .menu-toggle-container {
            width: 4rem;
            height: 3rem;
        }

        .nav-panel {
            top: 0px;
        }
    }
</style>
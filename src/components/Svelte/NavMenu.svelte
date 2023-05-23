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
                <div class="menu-bars" class:open>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
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
        padding: 1rem;
        background-color: transparent;
        transition: background-color 0.2s ease;
        width: 6rem;
        height: 4rem;
    }

    .menu-toggle-container:hover {
        background-color: var(--menu-bg);
    }

    .menu-toggle-container.open {
        background-color: var(--menu-bg);
    }

    .menu-bars {
        position: relative;
        height: 100%;
    }

    .menu-bars > * {
        display: block;
        position: absolute;
        height: 2px;
        width: 100%;
        background: var(--menu-color);
        opacity: 1;
        transition: top 0.2s ease, left 0.2s ease, opacity 0.2s ease 0.1s,
            transform 0.2s ease 0.2s, height 0.2s ease 0.2s;
    }

    .menu-bars > :nth-child(1) {
        top: 0rem;
    }

    .menu-bars > :nth-child(2) {
        top: calc(3rem / 3 - 2.25px);
    }

    .menu-bars > :nth-child(3) {
        top: calc(3rem / 3 - 2.25px);
    }

    .menu-bars > :nth-child(4) {
        top: calc(3rem / 3 * 2 - 2.25px);
    }

    .menu-bars.open > :nth-child(1) {
        top: calc(3rem / 3 - 2px);
        opacity: 0;
    }

    .menu-bars.open > :nth-child(2) {
        transform: rotate(45deg) scale(0.6);
        height: 4px;
        transition-delay: 0.2s;
    }

    .menu-bars.open > :nth-child(3) {
        transform: rotate(-45deg) scale(0.6);
        height: 4px;
        transition-delay: 0.2s;
    }

    .menu-bars.open > :nth-child(4) {
        top: calc(3rem / 3 - 2px);
        opacity: 0;
    }

    .nav-panel {
        position: absolute;
        top: 0;
        right: 0;
        background: var(--color-neutral-dark);
        color: white;
        min-width: 25rem;
        padding: 5rem 5rem 3rem 3rem;
    }
</style>
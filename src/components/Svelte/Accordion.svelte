<script>
    import { slide } from "svelte/transition"
    import { sineInOut } from "svelte/easing"
    import {
        Disclosure,
        DisclosureButton,
        DisclosurePanel
    } from "@rgossiaux/svelte-headlessui"

    export let startsOpen = false;
    export let gradientStyle;
</script>

<Disclosure as="article" let:open defaultOpen={startsOpen}>
    <h2>
        <DisclosureButton class="accordion-button" style={gradientStyle}>
            <slot name="title">Course Title</slot>
                <div class="icon">
                    <span></span>
                    <span style={open ? "height: 0px" : ""}></span>
                </div>
        </DisclosureButton>
    </h2>
    {#if open}
        <div transition:slide="{{ duration: 500, easing: sineInOut }}" >
            <DisclosurePanel static class="accordion-panel">
                <slot name="panel">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam commodi adipisci consequatur ducimus repudiandae nam sint, molestias voluptatem exercitationem impedit!</slot>
            </DisclosurePanel>
        </div>
    {/if}
</Disclosure>

<style>
    .icon {
        position: relative;
        width: 1.75rem;
        height: 1.75rem;
    }

    .icon > * {
        position: absolute;
        background: white;
        border-radius: 2px;
        transition: all 0.2s ease;
    }

    .icon > :first-child {
        top: 50%;
        left: 0;
        right: 0;
        transform: translateY(-50%);
        height: 4px;
    }

    .icon > :last-child {
        width: 4px;
        height: 100%;
        left: 50%;
        top: 50%;
        bottom: 0;
        transform: translate(-50%, -50%);
    }

    /* svg {
        position: relative;
        transition: all 0.2s ease;
    } */
</style>
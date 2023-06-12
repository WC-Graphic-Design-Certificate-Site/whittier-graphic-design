<script>
    import { slide } from "svelte/transition"
    import {
        Disclosure,
        DisclosureButton,
        DisclosurePanel
    } from "@rgossiaux/svelte-headlessui"

</script>

<Disclosure as="article" let:open>
    <h2>
        <DisclosureButton class="accordion-button">
            <slot name="title">Course Title</slot>
                <div class="icon">
                    <span></span>
                    <span style={open ? "height: 0px" : ""}></span>
                </div>
                <!-- <svg xmlns="http://www.w3.org/2000/svg" 
                    width="32" 
                    height="32" 
                    stroke="var(--color-neutral-light)" 
                    viewBox="0 0 24 24"
                    style={open ? "top: 6px;" : "top: 0px;"}
                >
                    <defs>
                        <style>
                            .cls-1 {
                                fill: none;
                                stroke-miterlimit: 10;
                                stroke-width: 2px;
                            }
                        </style>
                    </defs>
                    <polyline class="cls-1" points={`2.87 7.5 11.96 ${open ? "7.5" : "16.5"} 21.13 7.5`}>
                    </polyline>
                </svg> -->
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--color-brand-primary-light)" style={open ? "transform: rotate(90deg);" : ""} viewBox="0 0 320 512"><path d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"/></svg> -->
        </DisclosureButton>
    </h2>
    {#if open}
        <div transition:slide="{{ duration: 500 }}" >
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
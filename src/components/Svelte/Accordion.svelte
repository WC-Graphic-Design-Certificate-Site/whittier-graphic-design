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
                <svg xmlns="http://www.w3.org/2000/svg" 
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
                        <!-- <animate
                            dur="1s"
                            attributeName="points"
                            values="2.87 7.5 11.96 16.5 21.13 7.5;2.87 7.5 11.96 7.5 21.13 7.5;2.87 7.5 11.96 16.5 21.13 7.5"
                            fill="freeze"
                            calcMode="spline"
                            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1">
                        </animate> -->
                    </polyline>
                </svg>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--color-brand-primary-light)" style={open ? "transform: rotate(90deg);" : ""} viewBox="0 0 320 512"><path d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"/></svg> -->
        </DisclosureButton>
    </h2>
    {#if open}
        <div transition:slide>
            <DisclosurePanel static class="accordion-panel">
                <slot name="panel">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam commodi adipisci consequatur ducimus repudiandae nam sint, molestias voluptatem exercitationem impedit!</slot>
            </DisclosurePanel>
        </div>
    {/if}
</Disclosure>

<style>
    svg {
        position: relative;
        transition: all 0.2s ease;
    }
</style>
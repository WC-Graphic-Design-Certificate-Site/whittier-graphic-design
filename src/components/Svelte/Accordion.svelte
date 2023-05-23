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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--color-brand-primary-light)" style={open ? "transform: rotate(90deg);" : ""} viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"/></svg>
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
        transition: all 0.2s ease;
    }
</style>
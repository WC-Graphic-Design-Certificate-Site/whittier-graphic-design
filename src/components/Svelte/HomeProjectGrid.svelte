<script>
    import { onMount } from 'svelte';
    import { urlFor } from "../../utils/sanity"
    export let projects;

    function prepareImage(image) {
        const src = urlFor(image).width(900).height(900).fit('crop').crop('center').auto('format').url();
        return src
    }

    function handleEnter(e) {
        const target = e.currentTarget;
        const imgList = [];
        const imgs = target.querySelectorAll("img");
        imgs.forEach(img => imgList.push(img));
        let currentlyDisplayed = imgList.find(img => img.getAttribute("data-visible") == "true");
        let index = imgList.findIndex(img => img.getAttribute("data-visible") == "true");
        if (index < 2) {
            index = index + 1
        } else {
            index = 0
        }

        const nextItem = imgList[index];

        currentlyDisplayed.setAttribute("data-visible", "false");
        nextItem.setAttribute("data-visible", "true");
    }

    onMount(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        let intervalId;
        const imgWrappers = document.querySelectorAll('.gallery-img-wrapper');

        function animatePhotos() {
          // const imgList = [];
          // const imgs = document.querySelectorAll(".gallery-img")
          imgWrappers.forEach(img => {
            const imgList = [];
            const imgs = img.querySelectorAll('img')
            imgs.forEach(item => imgList.push(item));

          let currentlyDisplayed = imgList.find(img => img.getAttribute("data-visible") == "true");
          let index = imgList.findIndex(img => img.getAttribute("data-visible") == "true");
          if (index < 2) {
              index = index + 1
          } else {
              index = 0
          }

          const nextItem = imgList[index];

          currentlyDisplayed.setAttribute("data-visible", "false");
          nextItem.setAttribute("data-visible", "true");
        });
        }

        function startAnimation() {
          if (!intervalId) {
            intervalId = setInterval(animatePhotos, 1500);
          }
        }

        function stopAnimation() {
          clearInterval(intervalId);
          intervalId = null;
        }

        if (mediaQuery.matches) {
          startAnimation();
        } else {
          stopAnimation();
        }

        mediaQuery.addEventListener("change", (e) => {
          if (e.matches) {
            startAnimation();
          } else {
            stopAnimation();
          }
        });
    });
</script>

<div class="interactive-projects grid">
    {#each projects.set as set}
    <div class="relative grid-item" on:mouseenter={handleEnter}>
        <a class="gallery-img-wrapper" href="/gallery">
            {#each set.entries as project, i}
                <img
                    src={prepareImage(project.image)}
                    class="gallery-img"
                    alt={project.image.alt || ""}
                    width={900}
                    height={900}
                    data-index={i}
                    data-visible={i == 0 ? "true" : ""}
                />
            {/each}
        </a>
      </div>
      {/each}
</div>

<style>
    .interactive-projects.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-columns: repeat(auto-fit, minmax(min(480px, 100%), 1fr)); */
    /* margin-inline: calc(var(--gutter) * -1); */
  }

  .interactive-projects .grid-item {
    overflow: hidden;
  }

  .interactive-projects .grid-item .gallery-img-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: block;
  }

  .interactive-projects .grid-item img {
    position: absolute;
    inset: 0;
    aspect-ratio: 1/1;
    object-fit: cover;
    opacity: 0;
    /* transform: scale(0.8);
    transition: all 0.4s ease-in-out; */
  }

  .interactive-projects .grid-item img[data-index="0"] {
    position: relative;
  }

  .interactive-projects .grid-item img[data-visible="true"] {
    opacity: 1;
    /* transform: scale(1); */
  }

  @media (max-width: 768px) {
    .interactive-projects.grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

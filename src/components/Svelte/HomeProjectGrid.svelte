<script>
    import {urlFor} from "../../utils/sanity"
    export let projects;

    const projectSets = [];
    for (let i = 0; i < 6; i++) {
        const arr = [];
        projectSets.push(arr)
    }

    projectSets.forEach(set => {
        for (let i = 0; i < 3; i++) {
            set.push(getRandom(projects));
        }
    })

    console.log(projectSets)

    function getRandom(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

function getNextItem(item) {
    const currentIndex = projects.indexOf(item);
    // Use the remainder operator to return to start of array
    const nextIndex = (currentIndex + 1) % projects.length;
    // console.log(themes[nextIndex]);
    console.log(projects[nextIndex])
    return projects[nextIndex];
  }

//   getNextImg(projects[0])
// console.log(projects[0])


    function prepareImage(image) {
        const src = urlFor(image).width(900).height(900).fit('crop').crop('center').format('webp').url();
        return src
    }

    function handleEnter(e) {
        const target = e.currentTarget;
        const imgList = [];
        const imgs = target.querySelectorAll("img");
        imgs.forEach(img => imgList.push(img));
        console.log(imgs)
        let currentlyDisplayed = imgList.find(img => img.getAttribute("data-visible") == "true");
        let index = imgList.findIndex(img => img.getAttribute("data-visible") == "true");
        console.log(index)
        if (index < 2) {
            index = index + 1
        } else {
            index = 0
        }
        console.log(index)

        const nextItem = imgList[index];

        currentlyDisplayed.setAttribute("data-visible", "false");
        nextItem.setAttribute("data-visible", "true");

        // const currentItem = target.getAttribute('data-id');
        // const matched = projects.find(item => item._id === currentItem);
        // const nextItem = getNextItem(matched);
        // console.log(currentItem + " " + matched._id);
        // console.log(nextItem._id);

        // img.setAttribute('src', nextImage)
        // console.log(img.getAttribute('src'))
    }
</script>

<div class="interactive-projects grid">
    {#each projectSets as set}
    <div class="relative grid-item" on:mouseenter={handleEnter}>
        <div class="img-wrapper">
            {#each set as project, i}
                <img
                    src={prepareImage(project.image)}
                    alt={project.name}
                    width={900}
                    height={900}
                    data-index={i}
                    data-visible={i == 0 ? "true" : ""}
                />
            {/each}
        </div>
        
      </div>
      {/each}
</div>

<style>
    .interactive-projects.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
    margin-inline: calc(var(--gutter) * -1);
  }

  .interactive-projects .grid-item {
    overflow: hidden;
  }

  .interactive-projects .grid-item .img-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .interactive-projects .grid-item img {
    position: absolute;
    inset: 0;
    aspect-ratio: 1/1;
    object-fit: cover;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.4s ease-in-out;
  }

  .interactive-projects .grid-item img[data-index="0"] {
    position: relative;
  }

  .interactive-projects .grid-item img[data-visible="true"] {
    opacity: 1;
    transform: scale(1);
  }
</style>

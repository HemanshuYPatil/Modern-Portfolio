<script lang="ts">
	
import slickScroll from "slickscrolljs";
import { onMount } from "svelte";
import { imgPromises, loaderAnimationPromise, loadPageResolve, slickScrollInstance, workItemsFetch, siteDataFetch } from "$lib/store";
import { devMsg, fetchJsonData } from "$lib/utils";
import HomeSection from "$lib/sections/home.svelte";
import WorkSection from "$lib/sections/work.svelte";
import AboutSection from "$lib/sections/about.svelte";
import NavComponent from "$lib/components/nav.svelte"
import Footer from "$lib/components/footer.svelte";
import CursorDot from "$lib/components/cursor-dot.svelte"
import Loader from "$lib/components/loader.svelte";
  import { Toaster } from "svelte-french-toast";


let scrollContainer: HTMLElement, navBar: HTMLElement;
let loading: boolean = true;

async function fetchData() {
    const response = await fetch("/api/work");
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return await response.json();
}


onMount(async () => {
    // Disable scrolling on initial load
    scrollContainer.style.overflowY = "hidden";
    scrollContainer.scrollTo(0, 0);

    // Initialize loader
    loading = true;

    try {
        // Fetch work items and wait for all images to load
        const workItems = await fetchData();

        // Update state with fetched data
        workItemsFetch.set(workItems);

        // Wait for all images to load
        await Promise.allSettled($imgPromises);

        // Wait until loading animation is complete
        await loaderAnimationPromise;

        // Resolve loadPagePromise after loading is complete
        loadPageResolve();

        // Initialize slickScroll instance
        $slickScrollInstance = new (slickScroll as any)({
            root: scrollContainer,
            easing: "easeOutCirc",
            duration: 1500,
            fixedOffsets: [navBar]
        });

        // Dev message for debugging
        devMsg();
    } catch (error) {
        // Handle any errors that may occur during fetching or loading
        console.error("An error occurred during the loading process:", error);
    } finally {
        // Ensure that the loader is hidden and scrolling is enabled in case of error
        loading = false;
        scrollContainer.style.overflowY = "auto";
    }
});


</script>



<!-- Cursor dot tracking when mouse moves inside the body -->
<CursorDot></CursorDot>

<!-- Page loading progress bar -->
{#if loading} <Loader></Loader> {/if}

<Toaster ></Toaster>

<div id="scroll-frame" bind:this={scrollContainer}>
	<!-- Top nav-bar and mobile nav-bar -->
	<div id="nav-bar" bind:this={navBar}>
		<NavComponent scrollContainer={scrollContainer}></NavComponent>
	</div>
	<!-- page sections -->
	<HomeSection></HomeSection>
	<WorkSection></WorkSection>
	<AboutSection></AboutSection>
	<Footer></Footer>
</div>




<style lang="sass">

@import "$lib/consts"

:global(canvas)
	position: absolute
	top: 0
	left: 0
	z-index: -1
	
:global(body)
	background-color: #222224
	overflow: hidden
	color: white
	margin: 0
	padding: 0
	-moz-osx-font-smoothing: grayscale
	-webkit-font-smoothing: antialiased
	font-family: "Questrial", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif

:global(*)
	margin: 0
	padding: 0
	-moz-osx-font-smoothing: grayscale
	-webkit-font-smoothing: antialiased

#scroll-frame
	top: 0
	left: 0
	width: 100%
	height: 100vh
	position: relative
	overflow: hidden auto

#nav-bar
	position: fixed
	top: 10vh
	z-index: 100

</style>
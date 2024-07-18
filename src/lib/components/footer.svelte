<script lang="ts">

    import { onMount } from "svelte";
    import { letterSlideIn, maskSlideIn } from "$lib/animations";
    import { loadPagePromise, siteDataFetch } from "$lib/store";
    import { onScrolledIntoView } from "$lib/utils";
    import type { SiteData } from "$lib/types";

    let footerContainerElement: HTMLElement, logoElement: HTMLElement, creditsElement: HTMLElement, statusElement: HTMLElement, fullEmailLinkElement: HTMLElement;
    let signaturePath1: SVGPathElement, signaturePath2: SVGPathElement, signaturePath3: SVGPathElement, signaturePath4: SVGPathElement; 

    let siteData: SiteData = { availablity_date: "" };

    siteDataFetch.subscribe(val => {
        if (val !== undefined)
            siteData = val;
    });

    const currentYear = new Date().getFullYear();
    
    function introAnimations() {

        // Scroll activated animations powered by anime instead of svelte transitions
        const logoAnimate = maskSlideIn(logoElement, {});
        const fullEmailLinkAnimate = letterSlideIn(fullEmailLinkElement, { delay: 6, initDelay: 150 });
        const creditsAnimate = maskSlideIn(creditsElement, { delay: 150 });
        const statusAnimate = letterSlideIn(statusElement, { delay: 6, initDelay: 100 });

        // Intersection observer to run animations when footer is in scroll view
        onScrolledIntoView(footerContainerElement, () => {
            logoAnimate.anime();
            creditsAnimate.anime();
            fullEmailLinkAnimate.anime();
            statusAnimate.anime();

            // Signature SVG animation
            let animation = [{ strokeDashoffset: '0' }];

            // Signature animation using svg strokDashOffset
            signaturePath1.animate(animation, {
                duration: 1000,
                delay: 0,
                easing: 'cubic-bezier(.72,.3,.25,1)',
                fill: 'forwards' 
            });
            signaturePath2.animate(animation, {
                duration: 300,
                delay: 1000,
                easing: 'cubic-bezier(.47,.41,.26,1)',
                fill: 'forwards' 
            });
            signaturePath3.animate(animation, {
                duration: 200,
                delay: 1300,
                easing: 'cubic-bezier(.47,.41,.26,1)',
                fill: 'forwards' 
            });
            signaturePath4.animate(animation, {
                duration: 1000,
                delay: 1500,
                easing: 'cubic-bezier(.47,.41,.26,1)',
                fill: 'forwards' 
            });
        });
    }

    onMount(async () => {
        await loadPagePromise;
        introAnimations();
    });

</script>



<div class="footer-wrapper" bind:this={footerContainerElement}>
    <!-- Left side -->
    <div class="flex-wrapper">
        <div class="logo-wrapper">
            <div class="inline-flex" bind:this={logoElement}>
                <img src="assets/imgs/patil.svg" alt="mh logo" class="logo">
            </div>
        </div>

        <div class="status-wrapper">
                {#if siteData.availablity_date === ""}
                    <p class="large-text" bind:this={statusElement}>
                        i am currently accepting freelance work, <br>you may reach me on my email or contact number.
                    </p>
                {:else}
                    <p class="large-text" bind:this={statusElement}>
                        i am available for freelance work after <br> {siteData.availablity_date}.
                    </p>
                {/if}
            <a class="button large-text" bind:this={fullEmailLinkElement} href="mailto:hemanshuypatil@gmail.com" target="_blank">hemanshuypatil@gmail.com</a>
            <br><br><p>+91 7058026892</p>

        </div>
        
        <div class="credits-wrapper" bind:this={creditsElement}>
            <p class="year">© {currentYear}</p>
            <p class="credits">
                designed and developed by Hemanshu Patil<br>
                
                
               
            </p>
        </div>
    </div>

   
	<div class="flex-wrapper decor">
        
        <!-- <svg id="signature" class="name-signature" x="0px" y="0px" viewBox="0 0 190 136.9" style="stroke: rgb(79, 78, 85);">
            <g>
                <path
                    bind:this={signaturePath1}
                    class="path-1"
                    style="fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;"
                    d="M38.1,51c0,0,4.9-34.4,39.6-37.7c11.1-1.1-11.5,86.2-48.9,87.5c-18.5,0.6,19-69.3,51.7-84.4c21.3-9.8,15.3,26,15.3,26s6.2-9.3,7.9-6.1c1.7,3.1,0.1,5.1,6.9-1.9c1-1.2,13.9,3.3,18.8-1.3c1.4-1.3,6.4,1.3,6.4,1.3"/>
                <path
                    bind:this={signaturePath2}
                    class="path-2"
                    style="fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;"
                    d="M132.2,48.3l-23.9,78.8"/>
                <path
                    bind:this={signaturePath3}
                    class="path-3"
                    style="fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;"
                    d="M110.3,55.3c0,0-0.7,11.7-2.8,18s-6.7,20.2-6.9,24.1"/>
                <path
                    bind:this={signaturePath4}
                    class="path-4"
                    style="fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;"
                    d="M122,74.4c0,0-5.9-8-17.1-6.7c-11.1,1.3-20.2,11.3-21.1,12.6c-0.9,1.3-10,9.6,2.2,15s38.9-7.2,38.9-7.2s17.8-10,18.9-10s-4.6,5.9-4.3,7.2c0.4,1.3,2.8,2,7.2-1.5c1-0.8,17.2-0.8,22.2,1c1.9,0.7,3.5-0.2,5-1.4c1-0.8,9.4,2,9.4,2"/>
            </g>
        </svg> -->

        <svg id="signature" class="name-signature" x="0px" y="0px" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="1000"  viewBox="0 0 2000 686"><g transform="matrix(1,0,0,1,-1.2121212121212466,-2.3818077474892334)"><svg viewBox="0 0 396 136" data-background-color="#d2d6dc" preserveAspectRatio="xMidYMid meet" height="686" width="2000" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="tight-bounds" transform="matrix(1,0,0,1,0.2400000000000091,0.4721951219512164)"><svg viewBox="0 0 395.52 135.05560975609754" height="135.05560975609754" width="395.52"><g><svg viewBox="0 0 395.52 135.05560975609754" height="135.05560975609754" width="395.52"><g><svg viewBox="0 0 395.52 135.05560975609754" height="135.05560975609754" width="395.52"><g id="textblocktransform"><svg viewBox="0 0 395.52 135.05560975609754" height="135.05560975609754" width="395.52" id="textblock"><g><svg viewBox="0 0 395.52 135.05560975609754" height="135.05560975609754" width="395.52"><g transform="matrix(1,0,0,1,0,0)"><svg width="395.52" viewBox="1.6 -29.6 92.24000000000001 31.5" height="135.05560975609754" data-palette-color="#ffffff"><g class="wordmark-text-0" data-fill-palette-color="primary" id="text-0"><path d="M8.7-0.85Q8.7-0.2 9.35-0.2 10-0.2 11.1-1.58 12.2-2.95 12.6-2.9L12.6-2.9Q12.9-2.6 11.95-1.6L11.95-1.6Q11.85-1.5 11.6-1.07 11.35-0.65 11.18-0.4 11-0.15 10.7 0.25 10.4 0.65 10.15 0.9 9.9 1.15 9.6 1.4L9.6 1.4Q9 1.9 8.55 1.9 8.1 1.9 7.33 1.73 6.55 1.55 6.53 1.35 6.5 1.15 6.5 1L6.5 1Q6.5-1.6 10.75-9.65L10.75-9.65Q10.1-9.65 9.73-9.7 9.35-9.75 9.28-10.1 9.2-10.45 9.47-10.5 9.75-10.55 10.05-10.5 10.35-10.45 11.1-10.45L11.1-10.45Q13.65-15.05 14.15-16.07 14.65-17.1 14.65-17.55 14.65-18 14.6-18.25L14.6-18.25Q14.8-19.65 17.03-21.93 19.25-24.2 21.05-24.2L21.05-24.2Q21.65-24.2 22.68-23.75 23.7-23.3 23.85-22.73 24-22.15 23.93-22.08 23.85-22 23.6-22.1 23.35-22.2 23.3-22.2L23.3-22.2Q19.7-22.2 13.05-10.45L13.05-10.45Q18.5-10.7 24.23-12.63 29.95-14.55 33-17.7L33-17.7Q34.75-19.4 34.75-21.3L34.75-21.3Q34.75-26.9 23.3-26.9L23.3-26.9Q16.75-26.9 10.8-24.9L10.8-24.9Q7.7-23.8 5.53-21.95 3.35-20.1 2.95-17.75L2.95-17.75Q2.9-17.5 2.9-17.1 2.9-16.7 3.23-16.13 3.55-15.55 4-15.25 4.45-14.95 5.28-14.55 6.1-14.15 6.38-13.95 6.65-13.75 6.5-13.53 6.35-13.3 5.85-13.4L5.85-13.4Q4.3-13.65 2.95-14.95 1.6-16.25 1.6-17.75L1.6-17.75Q1.6-18.2 1.7-18.65L1.7-18.65Q1.6-19.3 1.6-19.45L1.6-19.45Q2.3-23.2 8.95-26.6L8.95-26.6Q14.2-29.05 21.35-29.05L21.35-29.05Q25.75-29.05 30.05-27.85L30.05-27.85Q32.95-26.85 34.45-25 35.95-23.15 35.95-21.25L35.95-21.25Q35.95-18.35 33.65-16.13 31.35-13.9 28.5-12.7L28.5-12.7Q21.75-9.8 12.6-9.6L12.6-9.6Q10.65-6 9.68-3.75 8.7-1.5 8.7-0.85ZM31.45 0.55L31.45 0.55Q30.65 0.55 29.72 0.08 28.8-0.4 28.15-1.28 27.5-2.15 27.5-3.15 27.5-4.15 27.95-5.05L27.95-5.05Q28.95-7.15 31.17-9.13 33.4-11.1 35.8-12.5 38.2-13.9 39.6-14.25 41-14.6 42.32-14.6 43.65-14.6 44.6-13.93 45.55-13.25 45.55-12.5L45.55-12.5Q45.55-12.25 45.5-12.2 45.45-12.15 45.25-12.25L45.25-12.25Q44.65-13.2 42.77-13.2 40.9-13.2 38.52-11.98 36.15-10.75 34.05-8.9L34.05-8.9Q32.3-7.25 30.97-5.18 29.65-3.1 29.65-2.15L29.65-2.15Q29.65-0.3 30.7-0.3 31.75-0.3 33.9-2L33.9-2Q37.45-5 38.75-6.4L38.75-6.4Q43.35-11.35 43.7-11.35L43.7-11.35Q44.3-11.35 45.15-11 46-10.65 45.7-10.15L45.7-10.15Q43.15-6.55 42.7-2.9L42.7-2.9Q42.65-2.45 42.65-1.75 42.65-1.05 43.05-0.6L43.05-0.6Q43.8 0.2 45.1-0.5 46.4-1.2 48.72-3.3 51.05-5.4 52.45-7.4L52.45-7.4Q52.65-7.65 52.9-7.53 53.15-7.4 53.15-7.3L53.15-7.3Q53.15-6.55 50.77-4.03 48.4-1.5 47.15-0.6L47.15-0.6Q44.8 1.15 42.8 1.15L42.8 1.15Q40.9 1.15 40.25-0.75L40.25-0.75Q40.1-1.35 40.1-2.1L40.1-2.1Q40.1-4.35 41.05-6.85L41.05-6.85Q40.85-6.75 39.2-4.85 37.55-2.95 35.37-1.2 33.2 0.55 31.45 0.55ZM59.15-13.95L59.8-14Q63.65-14.35 64.47-14.35 65.3-14.35 65.3-14.1L65.3-14.1Q65.3-13.8 64.12-13.48 62.95-13.15 58.4-12.65L58.4-12.65Q58.15-12.2 57.8-11.6L57.8-11.6Q57.05-10.4 57-10.15L57-10.15Q54.15-4.45 54-2.9L54-2.9Q53.95-2.45 53.95-1.75 53.95-1.05 54.34-0.6L54.34-0.6Q55.05 0.2 56.34-0.5 57.65-1.2 59.97-3.3 62.3-5.4 63.75-7.4L63.75-7.4Q63.95-7.65 64.25-7.5L64.25-7.5Q65-7.15 61.65-3.55L61.65-3.55Q58.45-0.1 56.3 0.7L56.3 0.7Q55.05 1.15 54.2 1.15L54.2 1.15Q52.2 1.15 51.55-0.75L51.55-0.75Q51.45-1.1 51.45-1.6L51.45-1.6Q51.45-3.35 53.05-6.9L53.05-6.9Q52.8-6.35 51.09-4.4L51.09-4.4Q50.65-3.9 50.4-4.4L50.4-4.4Q50.34-4.5 50.34-4.67 50.34-4.85 50.55-5.1L50.55-5.1Q53-8.15 54.4-10.25L54.4-10.25Q54.4-10.3 55.5-12.35L55.5-12.35Q55-12.25 54.47-12.25 53.95-12.25 53.7-12.58 53.45-12.9 53.65-13.35L53.65-13.35Q54-14.15 56.3-14.25L56.3-14.25Q56.34-14.35 56.5-14.35L56.5-14.35 59-19Q59.2-19.4 59.45-19.83 59.7-20.25 59.82-20.48 59.95-20.7 60.09-20.95 60.25-21.2 60.34-21.3 60.45-21.4 60.55-21.5L60.55-21.5Q60.75-21.8 61.72-21.8 62.7-21.8 63.05-21.25L63.05-21.25Q63.2-21.05 63.2-20.58 63.2-20.1 62.84-19.53 62.5-18.95 62.09-18.7 61.7-18.45 61.55-18.15L61.55-18.15 59.15-13.95ZM67.89-13.85L67.89-13.85Q69.14-13.85 69.39-13.05L69.39-13.05Q69.49-12.6 69.27-12.18 69.04-11.75 68.94-11.5 68.84-11.25 68.79-11.1L68.79-11.1Q68.54-10.6 68.29-10.15L68.29-10.15Q65.44-4.45 65.29-2.9L65.29-2.9Q65.24-2.45 65.24-1.75 65.24-1.05 65.64-0.6L65.64-0.6Q66.34 0.2 67.64-0.5 68.94-1.2 71.27-3.3 73.59-5.4 75.04-7.4L75.04-7.4Q75.24-7.65 75.49-7.53 75.74-7.4 75.74-7.28 75.74-7.15 75.64-7L75.64-7Q74.89-5.65 72.94-3.55L72.94-3.55Q69.74-0.1 67.59 0.7L67.59 0.7Q66.34 1.15 65.49 1.15L65.49 1.15Q63.49 1.15 62.84-0.75L62.84-0.75Q62.74-1.1 62.74-1.6L62.74-1.6Q62.74-3.35 64.34-6.9L64.34-6.9Q64.09-6.35 62.39-4.4L62.39-4.4Q61.94-3.9 61.69-4.4L61.69-4.4Q61.64-4.5 61.64-4.67 61.64-4.85 61.84-5.1L61.84-5.1Q64.29-8.15 65.69-10.25L65.69-10.25Q65.59-10.5 65.79-10.9L65.79-10.9Q66.79-13.7 67.54-13.85L67.54-13.85Q67.69-13.85 67.89-13.85ZM71.84-20.5L71.84-20.5 71.44-18.9Q71.44-18.45 70.79-17.45 70.14-16.45 69.79-16.45L69.79-16.45Q67.64-16.45 67.64-17.5L67.64-17.5Q67.64-17.7 69.79-19.35L69.79-19.35 70.64-20Q71.44-20.7 71.64-20.7 71.84-20.7 71.84-20.5ZM91.74-25.5L91.74-25.5Q92.34-26.6 92.34-27.2L92.34-27.2Q92.34-28.25 91.49-28.25L91.49-28.25Q90.79-28.25 89.74-27.45L89.74-27.45Q85.74-24.35 81.99-17.65L81.99-17.65Q78.99-12.25 77.59-8.4L77.59-8.4Q81.04-10.75 85.31-16.05 89.59-21.35 91.74-25.5ZM76.84-6.4L76.84-6.4Q76.24-4.7 76.19-4.13 76.14-3.55 76.14-2.58 76.14-1.6 76.64-0.8L76.64-0.8Q77.49 0.55 79.49-0.6L79.49-0.6Q80.99-1.4 83.29-3.53 85.59-5.65 86.84-7.4L86.84-7.4Q86.94-7.55 87.14-7.55L87.14-7.55Q87.59-7.55 87.39-6.9L87.39-6.9Q86.64-5.55 84.62-3.45 82.59-1.35 80.94-0.13 79.29 1.1 77.64 1.1L77.64 1.1Q73.84 1.1 73.84-2.6L73.84-2.6Q73.84-2.75 73.84-2.9L73.84-2.9Q74.04-6.4 77.39-13.48 80.74-20.55 83.44-24.15L83.44-24.15 84.99-26.1Q85.54-26.75 86.59-27.7L86.59-27.7Q88.59-29.6 90.72-29.6 92.84-29.6 93.59-28.3L93.59-28.3Q93.84-27.85 93.84-27 93.84-26.15 93.09-24.6L93.09-24.6Q87.94-15.65 76.84-6.4Z" fill="#ffffff" data-fill-palette-color="primary"></path></g></svg></g></svg></g></svg></g></svg></g></svg></g><defs></defs></svg><rect width="395.52" height="135.05560975609754" fill="none" stroke="none" visibility="hidden"></rect></g></svg></g></svg>
    </div>
</div>



<style lang="sass">

@import "../consts.sass"
@include textStyles()

.footer-wrapper
    width: 100vw
    background-color: #131314
    display: flex
    flex-direction: row
    justify-content: space-between
    padding: 15vh 13vw
    margin-top: 25vh
    box-sizing: border-box

    @media only screen and (max-width: 950px)
        .flex-wrapper.decor
            display: none !important

    @media only screen and (max-width: 950px)
        flex-direction: column-reverse

        .flex-wrapper:not(:first-child)
            margin-bottom: 15vh

    .inline-flex
        flex-grow: 1
        display: flex
        flex-direction: row
        align-items: center


    .logo-wrapper
        margin-bottom: 5vh

        .logo
            display: inline-block
            height: 6vh

    .status-wrapper
        .button.large-text
            margin-top: 2vh

    .credits-wrapper
        margin-top: 5vh
        color: rgba(255,255,255,0.3)

        p.year
            margin-bottom: 1vh
            font-family: $font
            font-size: 1.8vh
            font-weight: normal
            color: rgba(255,255,255,0.3)

        .credits
            font-size: 1.5vh
            line-height: 125%
            white-space: nowrap
            color: rgba(255,255,255,0.3)

            .button
                color: rgba(255,255,255,0.3)

    .large-text
        font-size: 2.5vh

        @media only screen and (max-width: 950px)
            br
                display: none

    .flex-wrapper.decor
        display: flex
        flex-direction: column
        justify-content: center

        .name-signature
            width: 20vh

#signature
    .path-1
        stroke-dasharray: 365
        stroke-dashoffset: 365
    
    .path-2
        stroke-dasharray: 85
        stroke-dashoffset: 85

    .path-3
        stroke-dasharray: 45
        stroke-dashoffset: 45

    .path-4
        stroke-dasharray: 180
        stroke-dashoffset: 180

</style>
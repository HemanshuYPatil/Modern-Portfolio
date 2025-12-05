<script lang="ts">
	import { onMount } from "svelte";
	import { letterSlideIn, maskSlideIn } from "$lib/animations";
	import { onScrolledIntoView, loadImage } from "$lib/utils";

	let sectionElement: HTMLElement;
	let services: any[] = [];
    
    // Promise which when resolved will trigger svelte animations
	let sectionResolve: (value?: any) => void;
	let sectionPromise = new Promise(
		(resolve) => (sectionResolve = resolve),
	);

	onMount(async () => {
        try {
            const res = await fetch("/api/services");
            if (res.ok) {
                services = await res.json();
            }
        } catch (error) {
            console.error("Failed to fetch services", error);
        }

		onScrolledIntoView(sectionElement, () => sectionResolve(true));
	});

</script>

<div class="services-container" bind:this={sectionElement}>
	{#await sectionPromise then _}
        <div class="header">
            <h1 class="title" in:letterSlideIn={{ initDelay: 100 }}>
                Services
            </h1>
        </div>
        
        <div class="services-grid">
            {#each services as service, i}
                <div class="service-card" in:maskSlideIn={{ delay: 200 + (i * 100), reverse: true }}>
                    <div class="icon-wrapper">
                        {#if service.iconUrl}
                            {#await loadImage(service.iconUrl) then src}
                                <img src={src} alt={service.title} />
                            {/await}
                        {/if}
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            {/each}
        </div>
	{/await}
</div>

<style lang="sass">
@import "../consts.sass"
@include textStyles()

.services-container
    padding: 0 13vw
    margin-top: 20vh
    margin-bottom: 10vh
    position: relative

    @media only screen and (max-width: 1080px)
        padding: 0 8vw

    .header
        margin-bottom: 10vh
        
        h1.title
            font-size: 10vh
            font-weight: 400
            text-transform: lowercase
            font-family: $titleFont

            @media only screen and (max-width: 750px)
                font-size: 6vh

    .services-grid
        display: grid
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
        gap: 5vw
        
        @media only screen and (max-width: 750px)
            grid-template-columns: 1fr
            gap: 5vh

        .service-card
            padding: 3vh
            border: 1px solid rgba(255, 255, 255, 0.1)
            border-radius: 1vh
            background: rgba(255, 255, 255, 0.02)
            transition: transform 0.3s ease

            &:hover
                transform: translateY(-1vh)
                background: rgba(255, 255, 255, 0.05)

            .icon-wrapper
                height: 8vh
                width: 8vh
                margin-bottom: 3vh
                
                img
                    height: 100%
                    width: 100%
                    object-fit: contain
                    filter: invert(1) // Assuming icons are black, invert to white for dark theme

            h3
                font-family: $font
                font-size: 3vh
                margin-bottom: 2vh
                text-transform: uppercase
                letter-spacing: 0.2vh

            p
                font-family: $font
                font-size: 1.8vh
                line-height: 1.6
                color: rgba(255, 255, 255, 0.7)

</style>

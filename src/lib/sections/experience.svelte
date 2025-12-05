<script lang="ts">
	import { onMount } from "svelte";
	import { letterSlideIn, maskSlideIn } from "$lib/animations";
	import { onScrolledIntoView } from "$lib/utils";

	let sectionElement: HTMLElement;
	let experiences: any[] = [];
    
    // Promise which when resolved will trigger svelte animations
	let sectionResolve: (value?: any) => void;
	let sectionPromise = new Promise(
		(resolve) => (sectionResolve = resolve),
	);

	onMount(async () => {
        try {
            const res = await fetch("/api/experience");
            if (res.ok) {
                experiences = await res.json();
            }
        } catch (error) {
            console.error("Failed to fetch experience", error);
        }

		onScrolledIntoView(sectionElement, () => sectionResolve(true));
	});

</script>

<div class="experience-container" bind:this={sectionElement}>
	{#await sectionPromise then _}
        <div class="header">
            <h1 class="title" in:letterSlideIn={{ initDelay: 100 }}>
                Experience
            </h1>
        </div>
        
        <div class="experience-list">
            {#each experiences as exp, i}
                <div class="experience-item" in:maskSlideIn={{ delay: 200 + (i * 100), reverse: true }}>
                    <div class="left">
                        <h3 class="role">{exp.role}</h3>
                        <h4 class="company">{exp.company}</h4>
                    </div>
                    <div class="right">
                        <span class="duration">{exp.duration}</span>
                        <p class="description">{exp.description}</p>
                    </div>
                </div>
            {/each}
        </div>
	{/await}
</div>

<style lang="sass">
@import "../consts.sass"
@include textStyles()

.experience-container
    padding: 0 13vw
    margin-top: 10vh
    margin-bottom: 20vh
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

    .experience-list
        display: flex
        flex-direction: column
        gap: 8vh

        .experience-item
            display: flex
            flex-direction: row
            justify-content: space-between
            border-bottom: 1px solid rgba(255, 255, 255, 0.1)
            padding-bottom: 5vh
            
            @media only screen and (max-width: 750px)
                flex-direction: column
                gap: 2vh

            .left
                flex: 1
                
                .role
                    font-family: $font
                    font-size: 3.5vh
                    margin-bottom: 1vh
                    text-transform: uppercase
                    letter-spacing: 0.2vh
                    
                .company
                    font-family: $font
                    font-size: 2.5vh
                    color: rgba(255, 255, 255, 0.6)
                    font-weight: normal

            .right
                flex: 1.5
                display: flex
                flex-direction: column
                align-items: flex-end
                text-align: right
                
                @media only screen and (max-width: 750px)
                    align-items: flex-start
                    text-align: left
                    margin-top: 2vh

                .duration
                    font-family: $font
                    font-size: 2vh
                    margin-bottom: 2vh
                    color: rgba(255, 255, 255, 0.8)
                    border: 1px solid rgba(255, 255, 255, 0.3)
                    padding: 0.5vh 1.5vh
                    border-radius: 2vh

                .description
                    font-family: $font
                    font-size: 2vh
                    line-height: 1.6
                    color: rgba(255, 255, 255, 0.7)
                    max-width: 80%
                    
                    @media only screen and (max-width: 750px)
                        max-width: 100%

</style>

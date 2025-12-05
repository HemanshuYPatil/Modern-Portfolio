<script lang="ts">
	import { onMount } from "svelte";
	import {
		aboutAnchor,
		loadPagePromise,
		slickScrollInstance,
	} from "$lib/store";
	import { letterSlideIn, maskSlideIn } from "$lib/animations";
	import { loadImage, onScrolledIntoView } from "$lib/utils";

	let section1Element: HTMLElement, section2Element: HTMLElement;
	let profilePicContainer: HTMLElement;
	let img = "";
	let self = "";
	// Promise which when resolved will trigger svelte animations
	let sectionOneResolve: (value?: any) => void;
	let sectionOnePromise = new Promise(
		(resolve) => (sectionOneResolve = resolve),
	);
	let sectionTwoResolve: (value?: any) => void;
	let sectionTwoPromise = new Promise(
		(resolve) => (sectionTwoResolve = resolve),
	);
	let formattedself = "";
	onMount(async () => {
		// Wait for page to load
		await loadPagePromise;
		// Set navbar about link's y location to top of aboutContainer
		$aboutAnchor = section1Element;

		$slickScrollInstance.addOffset({
			element: profilePicContainer,
			speedY: 0.8,
		});

		onScrolledIntoView(section1Element, () => sectionOneResolve(true));
		onScrolledIntoView(section2Element, () => sectionTwoResolve(true));
	});

	onMount(async () => {
		try {
			const res = await fetch("/api/user"); // Replace with the actual endpoint
			if (!res.ok) {
				throw new Error("Failed to fetch developer details");
			}

			const data = await res.json();

			img = data.image;
			self = data.myself;
		} catch (error) {
			console.error(error);
		}
	});

	function titleIn(node: HTMLElement) {
		const titleAnimation = letterSlideIn(node, { delay: 15 });
		titleAnimation.anime();
	}

	// Add parallax scrolling offsets to slickScroll
	function addSlickScrollOffset(node: HTMLElement) {
		$slickScrollInstance.addOffset({
			element: node,
			speedY: 0.8,
		});
	}
	function MyComponent() {
		const renderWithLineBreaks = (text: string) => {
			return text.split("<br/>").map(
				(item: any, index: any) =>
					`<span key={index}>
						{item}
						<br />
					</span>`,
			);
		};

		return `<div>{renderWithLineBreaks(self)} </div>`;
	}
</script>

<div>
	<div id="content-container" class="about" bind:this={section1Element}>
		{#await sectionOnePromise then _}
			<div class="content-wrapper">
				<h1 class="title" use:titleIn>
					Hey I'm <br />Hemanshu
				</h1>
				<div
					in:maskSlideIn={{
						duration: 1200,
						reverse: true,
						delay: 150,
					}}
				>
					<p class="paragraph">
						{@html self || "I'm a full-stack web developer from Maharashtra, India. I specialize in designing and developing web applications, handling both the frontend and backend.<br/><br/>I work individuals to create beautiful, responsive, and scalable web products for them. Think we can make something great together? Let's talk over email."}
					</p>
				</div>
				<div class="social-button-wrapper">
					<div in:maskSlideIn={{ delay: 400, reverse: true }}>
						<span class="button"
							><a
								href="mailto:hemanshuypatil@gmail.com"
								target="_blank"
								class="clickable sublink link">Know More</a
							></span
						>
					</div>
					<div in:maskSlideIn={{ delay: 700, reverse: true }}>
						<span class="button"
							><a
								href="https://github.com/HemanshuYPatil"
								target="_blank"
								class="clickable sublink link">Github</a
							></span
						>
					</div>
					<div in:maskSlideIn={{ delay: 700, reverse: true }}>
						<span class="button"
							><a
								href="https://www.instagram.com/2806__hemanshu_patil__/?igsh=cndoOGd4MGNjN2Rn"
								target="_blank"
								class="clickable sublink link">Instagram</a
							></span
						>
					</div>
				</div>
			</div>
			<div class="profile-image" use:addSlickScrollOffset>
			{#await loadImage(img || "assets/imgs/profile.png") then src}
				<img src="{src}" in:maskSlideIn={{ duration: 1200,
					delay: 100,
					reverse: true,
					maskStyles: [
						{ property: "width", value: "100%"},
						{ property: "height", value: "100%"}
					]
				}} alt="Hemanshu's Profile" class="profile-pic">
			{/await}
		</div>
		{/await}
	</div>
</div>

<div class="horizontal-flex" bind:this={section2Element}>
	{#await sectionTwoPromise then _}
		<ul class="list first">
			<li class="list-title">
				<div in:letterSlideIn={{ initDelay: 400 }}>
					technical expertise
				</div>
			</li>
			<li>
				<div in:letterSlideIn={{ initDelay: 550 }}>Front-end</div>
				<div class="flex-item" in:maskSlideIn={{ delay: 600 }}>
					<img src="assets/imgs/svg-icons/svelte.svg" alt="Svelte" />
					<img src="assets/imgs/svg-icons/react.svg" alt="React" />
				</div>
			</li>
			<li>
				<div in:letterSlideIn={{ initDelay: 650 }}>Back-end</div>
				<div class="flex-item" in:maskSlideIn={{ delay: 700 }}>
					<img src="assets/imgs/svg-icons/nodejs.svg" alt="node js" />
					<img src="assets/imgs/svg-icons/php.svg" alt="php" />
				</div>
			</li>
			<li>
				<div in:letterSlideIn={{ initDelay: 750 }}>Dev-ops</div>
				<div class="flex-item" in:maskSlideIn={{ delay: 800 }}>
					<img
						src="assets/imgs/svg-icons/firebase.svg"
						alt="Firebase"
					/>
					<img
						src="assets/imgs/svg-icons/gcp.svg"
						alt="Google Cloud Platform"
					/>
				</div>
			</li>
			<li>
				<div in:letterSlideIn={{ initDelay: 850 }}>Mobile</div>
				<div class="flex-item" in:maskSlideIn={{ delay: 900 }}>
					<img
						src="assets/imgs/svg-icons/flutter.svg"
						alt="flutter"
					/>
					<img
						src="assets/imgs/svg-icons/android.svg"
						alt="native android"
					/>
					<img src="assets/imgs/svg-icons/iOS.svg" alt="native ios" />
				</div>
			</li>
		</ul>
		<!-- <ul class="list">
			<li class="list-title">
				<div in:letterSlideIn={{ initDelay: 400 }}>
					awards
				</div>
			</li>
			<li>
				<div in:letterSlideIn={{ initDelay: 550 }}>
					1x — Awwwards Honors
				</div>
			</li>
		</ul> -->
	{/await}
</div>

<style lang="sass">

@import "../consts.sass"
@include textStyles()

#content-container.about
	display: flex
	flex-direction: row
	justify-content: space-between
	overflow: hidden
	padding: 0 5vw
	margin-top: 40vh
	position: relative
	padding-bottom: 5vh

	.profile-image
		width: 55%
		overflow: hidden
		margin-top: -40vh
		position: relative

		img
			
			width: 75%
			border-radius: 0.5vh
			object-fit: cover

	.content-wrapper
		box-sizing: border-box
		width: 50%
		height: 100%
		margin: 0 2vw
		padding-right: 4vw
		display: flex
		flex-direction: column
		justify-content: center
		margin-top: 5vh
		box-sizing: border-box
		z-index: 2

		@media only screen and (max-width: 950px)
			&
				width: 80%

				h1
					font-size: 25vw !important

		h1
			font-size: 20vh
			font-weight: 400

		.paragraph
			margin-top: 10vh
			margin-left: 13vw
			position: relative
			width: 60%
			line-height: 1.5rem

			@media only screen and (max-width: 750px)
				&
					width: 100%
					margin-left: 5vw

			&::before
				content: ""
				position: absolute
				height: 1px
				width: 10vw
				right: 115%
				top: 15%
				background-color: white
				

		.social-button-wrapper
			font-size: 3vh
			margin-left: 13vw
			margin-top: 4vh
			display: inline-block

			& :global(*:not(:last-child))
				margin-right: 2vw

			@media only screen and (max-width: 750px)
				&
					margin-left: 5vw


	@media only screen and (max-width: 950px)
		.profile-image
			display: none

.horizontal-flex
	display: flex
	flex-direction: row
	justify-content: space-between
	padding: 0 13vw
	margin-top: 12vh
	width: 100%
	box-sizing: border-box

	@media only screen and (max-width: 1080px)
		flex-direction: column
		padding: 0 8vw

	.list
		list-style-type: none
		text-align: left

		@media only screen and (max-width: 1080px)
			margin-top: 10vh

		li.list-title
			letter-spacing: 0.6vh
			font-size: 1.3vh
			font-weight: bold

		li
			font-family: $font
			text-transform: uppercase
			font-size: 2vh
			letter-spacing: 0.5vh
			padding: 2vh 0
			border-bottom: 1px solid #444
			display: flex
			flex-wrap: wrap
			flex-direction: row
			justify-content: space-between
			align-items: center
			column-gap: 10vw
			row-gap: 3vh

			img
				height: 2.3vh

</style>

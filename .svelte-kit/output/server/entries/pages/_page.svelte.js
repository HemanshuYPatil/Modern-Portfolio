import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, i as is_promise, n as noop, d as each, g as get_store_value, o as onDestroy, f as add_styles, v as validate_component, m as missing_component, h as spread, j as escape_object, k as merge_ssr_styles } from "../../chunks/ssr.js";
import "slickscrolljs";
import { w as writable, d as derived } from "../../chunks/index.js";
import "animejs";
import "detect-gpu";
import "bezier-easing";
import { p as page } from "../../chunks/stores.js";
let slickScrollInstance = writable();
let isWorkScroll = writable(false);
let isMobile = writable(false);
let homeAnchor = writable();
let workAnchor = writable();
let aboutAnchor = writable();
let imgPromises = writable([]);
let loadPagePromise = new Promise((resolve) => resolve);
new Promise((resolve) => resolve);
const workItemsFetch = writable();
const siteDataFetch = writable();
async function loadImage(src) {
  const promise = new Promise(async (resolve, reject) => {
    const blob = await (await fetch(src)).blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
  imgPromises.update((val) => [...val, promise]);
  return promise;
}
const css$f = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");@import url("https://use.typekit.net/goc4cow.css");@media only screen and (max-width: 750px){.paragraph.svelte-1c1or9.svelte-1c1or9{font-size:3.4vw !important}.title.svelte-1c1or9.svelte-1c1or9{font-size:22vw}}@media only screen and (min-width: 750px){.title.svelte-1c1or9.svelte-1c1or9{font-size:19vh}}@media only screen and (min-width: 950px){.paragraph.svelte-1c1or9.svelte-1c1or9{font-size:1.8vh;line-height:150%;width:60%;letter-spacing:0.05vw}}@media only screen and (max-width: 950px){.paragraph.svelte-1c1or9.svelte-1c1or9{font-size:2vw;line-height:180% !important;letter-spacing:0;width:100% !important}}.title.svelte-1c1or9.svelte-1c1or9{color:white;font-weight:700;font-style:normal;font-family:freight-big-pro, serif;text-transform:lowercase;line-height:80%}.paragraph.svelte-1c1or9.svelte-1c1or9{font-family:"Questrial", sans-serif;color:white}#content-container.svelte-1c1or9.svelte-1c1or9{height:100vh;width:100vw;padding:12vh 7vw;box-sizing:border-box;position:relative}#content-container.svelte-1c1or9 .content-wrapper.svelte-1c1or9{position:relative;height:100%;box-sizing:border-box;z-index:2}#content-container.svelte-1c1or9 .flex.svelte-1c1or9{z-index:2;width:95%;height:100%;display:flex;flex-direction:row;justify-content:space-between;position:relative;box-sizing:border-box}#content-container.svelte-1c1or9 .flex .flex-wrapper.svelte-1c1or9{position:relative;height:100%;display:flex;flex-direction:column;justify-content:center}#content-container.svelte-1c1or9 .flex .flex-wrapper.second.svelte-1c1or9{margin-right:-1vw;justify-content:flex-end}#content-container.svelte-1c1or9 .flex .flex-wrapper h1.svelte-1c1or9{font-weight:400;text-shadow:0px 5px 10px rgba(0, 0, 0, 0.3)}#content-container.svelte-1c1or9 .flex .flex-wrapper .title-mask.svelte-1c1or9{overflow:hidden;display:inline-flex}#content-container.svelte-1c1or9 .flex .flex-wrapper .mask.svelte-1c1or9{overflow:hidden}#content-container.svelte-1c1or9 .flex .flex-wrapper .h-signature.svelte-1c1or9{width:35vh;margin-left:-6vh}#content-container.svelte-1c1or9 .flex .flex-wrapper .occupation.svelte-1c1or9{position:relative;margin-top:8vh}#content-container.svelte-1c1or9 .flex .flex-wrapper .action-mask.svelte-1c1or9{margin-top:10vh;margin-right:7vw;display:inline-flex;overflow:hidden}#content-container.svelte-1c1or9 .flex .flex-wrapper .action-mask .action.svelte-1c1or9{font-size:2vh;letter-spacing:0.5vh;font-family:"Questrial", sans-serif;text-transform:uppercase;color:white;position:relative;display:inline-flex;flex-direction:row;align-items:center}#content-container.svelte-1c1or9 .flex .flex-wrapper .action-mask .action .mask.svelte-1c1or9{overflow:hidden;height:2vh}#content-container.svelte-1c1or9 .flex .flex-wrapper .action-mask .action .mask img.svelte-1c1or9{height:2.3vh;margin-right:1.5vh;animation:svelte-1c1or9-scrollArrowLoop 3s ease infinite}#content-container.svelte-1c1or9 .parallax-wrapper.svelte-1c1or9{position:absolute;left:0;z-index:-1;width:80%;height:100%;margin-left:5%;border-radius:1.5vh;overflow:hidden;box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:box-shadow 0.6s ease;-webkit-transition:box-shadow 0.6s ease}@media only screen and (max-width: 1250px){#content-container.svelte-1c1or9 .parallax-wrapper.svelte-1c1or9{opacity:0.7}}@media only screen and (max-width: 750px){#content-container.svelte-1c1or9 .parallax-wrapper.svelte-1c1or9{opacity:0.3}}#content-container.svelte-1c1or9 .parallax-wrapper img.svelte-1c1or9{height:100%;width:100%;object-fit:cover;border-radius:1.5vh}@media only screen and (min-width: 1250px){.h-signature.svelte-1c1or9.svelte-1c1or9{display:block}.occupation.svelte-1c1or9.svelte-1c1or9{width:100%}#content-container.svelte-1c1or9 .flex .svelte-1c1or9{text-align:left}}@media only screen and (max-width: 1250px){#content-container.svelte-1c1or9 .flex .svelte-1c1or9{text-align:left}.flex.svelte-1c1or9.svelte-1c1or9{justify-content:center !important;width:100% !important}.flex.svelte-1c1or9 .flex-wrapper.first.svelte-1c1or9{display:none !important}.flex.svelte-1c1or9 .flex-wrapper.second.svelte-1c1or9{justify-content:center !important;margin:0}.parallax-wrapper.svelte-1c1or9.svelte-1c1or9{width:100% !important;margin-left:0 !important}}@media only screen and (max-width: 750px){.occupation.svelte-1c1or9.svelte-1c1or9{width:70%}}#signature.svelte-1c1or9 .path-1.svelte-1c1or9{stroke-dasharray:365;stroke-dashoffset:365}#signature.svelte-1c1or9 .path-2.svelte-1c1or9{stroke-dasharray:85;stroke-dashoffset:85}#signature.svelte-1c1or9 .path-3.svelte-1c1or9{stroke-dasharray:45;stroke-dashoffset:45}#signature.svelte-1c1or9 .path-4.svelte-1c1or9{stroke-dasharray:180;stroke-dashoffset:180}@keyframes svelte-1c1or9-scrollArrowLoop{0%{transform:translateY(-120%)}30%{transform:translateY(0%)}70%{transform:translateY(0%)}100%{transform:translateY(120%)}}',
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_slickScrollInstance;
  let $$unsubscribe_homeAnchor;
  $$unsubscribe_slickScrollInstance = subscribe(slickScrollInstance, (value) => value);
  $$unsubscribe_homeAnchor = subscribe(homeAnchor, (value) => value);
  let homeContainerElement;
  let backgroundContainerElement, backgroundImageElement;
  let titleWord1Element, titleWord2Element, shortDetailsElement, callToActionElement;
  let signaturePath1, signaturePath2, signaturePath3, signaturePath4;
  let developerPosition = "";
  let developerPlace = "";
  $$result.css.add(css$f);
  $$unsubscribe_slickScrollInstance();
  $$unsubscribe_homeAnchor();
  return `  <div id="content-container" style="padding-top: 23vh" class="svelte-1c1or9"${add_attribute("this", homeContainerElement, 0)}><div class="content-wrapper svelte-1c1or9"><div class="flex svelte-1c1or9"><div class="flex-wrapper first svelte-1c1or9"><svg id="signature" class="h-signature svelte-1c1or9" x="0px" y="0px" viewBox="0 0 190 136.9"><g class="svelte-1c1or9"><path class="path-1 svelte-1c1or9" style="fill:none;stroke:#ffffff;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;" d="M38.1,51c0,0,4.9-34.4,39.6-37.7c11.1-1.1-11.5,86.2-48.9,87.5c-18.5,0.6,19-69.3,51.7-84.4c21.3-9.8,15.3,26,15.3,26s6.2-9.3,7.9-6.1c1.7,3.1,0.1,5.1,6.9-1.9c1-1.2,13.9,3.3,18.8-1.3c1.4-1.3,6.4,1.3,6.4,1.3"${add_attribute("this", signaturePath1, 0)}></path><path class="path-2 svelte-1c1or9" style="fill:none;stroke:#ffffff;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;" d="M132.2,48.3l-23.9,78.8"${add_attribute("this", signaturePath2, 0)}></path><path class="path-3 svelte-1c1or9" style="fill:none;stroke:#ffffff;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;" d="M110.3,55.3c0,0-0.7,11.7-2.8,18s-6.7,20.2-6.9,24.1"${add_attribute("this", signaturePath3, 0)}></path><path class="path-4 svelte-1c1or9" style="fill:none;stroke:#ffffff;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;" d="M122,74.4c0,0-5.9-8-17.1-6.7c-11.1,1.3-20.2,11.3-21.1,12.6c-0.9,1.3-10,9.6,2.2,15s38.9-7.2,38.9-7.2s17.8-10,18.9-10s-4.6,5.9-4.3,7.2c0.4,1.3,2.8,2,7.2-1.5c1-0.8,17.2-0.8,22.2,1c1.9,0.7,3.5-0.2,5-1.4c1-0.8,9.4,2,9.4,2"${add_attribute("this", signaturePath4, 0)}></path></g></svg></div> <div class="flex-wrapper second svelte-1c1or9"><h1 class="title svelte-1c1or9"><div class="title-mask svelte-1c1or9"><div class="word svelte-1c1or9"${add_attribute("this", titleWord1Element, 0)} data-svelte-h="svelte-mi1okw">Hemanshu</div></div> <br class="svelte-1c1or9"> <div class="title-mask svelte-1c1or9"><div class="word svelte-1c1or9"${add_attribute("this", titleWord2Element, 0)} data-svelte-h="svelte-qtury4">Patil</div></div></h1> <div class="occupation mask svelte-1c1or9"><p class="paragraph svelte-1c1or9"${add_attribute("this", shortDetailsElement, 0)}>${escape(developerPosition)} <br class="svelte-1c1or9"> ${escape(developerPlace)}</p></div> <div class="wrapper action-mask svelte-1c1or9"><div class="action svelte-1c1or9"${add_attribute("this", callToActionElement, 0)}><div class="mask svelte-1c1or9">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(src) {
      return ` <img${add_attribute("src", src, 0)} alt="" class="svelte-1c1or9"> `;
    }(__value);
  }(loadImage("assets/imgs/scroll_arrow.png"))}</div> <div class="svelte-1c1or9" data-svelte-h="svelte-z9r4gj">scroll</div></div></div></div> <div class="parallax-wrapper home-back svelte-1c1or9"${add_attribute("this", backgroundContainerElement, 0)}>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(src) {
      return ` <img${add_attribute("src", src, 0)} draggable="false" alt="Home Background" style="width:100%; height: 100%; object-fit: cover;" class="svelte-1c1or9"${add_attribute("this", backgroundImageElement, 0)}> `;
    }(__value);
  }(loadImage("assets/imgs/home-back.jpg"))}</div></div></div> </div>`;
});
const css$e = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");@import url("https://use.typekit.net/goc4cow.css");button.interactive.svelte-zppgex.svelte-zppgex{position:default;display:default;border:none;background-color:transparent;outline:none;color:inherit;font-family:inherit;font-weight:inherit;font-size:inherit}@media only screen and (max-width: 750px){.paragraph.svelte-zppgex.svelte-zppgex{font-size:3.4vw !important}.title.svelte-zppgex.svelte-zppgex{font-size:22vw}}@media only screen and (min-width: 750px){.title.svelte-zppgex.svelte-zppgex{font-size:19vh}}@media only screen and (min-width: 950px){.paragraph.svelte-zppgex.svelte-zppgex{font-size:1.8vh;line-height:150%;width:60%;letter-spacing:0.05vw}}@media only screen and (max-width: 950px){.paragraph.svelte-zppgex.svelte-zppgex{font-size:2vw;line-height:180% !important;letter-spacing:0;width:100% !important}}.title.svelte-zppgex.svelte-zppgex{color:white;font-weight:700;font-style:normal;font-family:freight-big-pro, serif;text-transform:lowercase;line-height:80%}.paragraph.svelte-zppgex.svelte-zppgex{font-family:"Questrial", sans-serif;color:white}.button.svelte-zppgex.svelte-zppgex{font-family:"Questrial", sans-serif;text-transform:lowercase;color:white;display:inline-block;position:relative;cursor:pointer;padding-bottom:1%;text-decoration:none}.button.svelte-zppgex.svelte-zppgex:not(.no-decor)::after,.button.svelte-zppgex.svelte-zppgex:not(.no-decor)::before{content:"";position:absolute;width:100%;height:2px;bottom:0;background-color:white}.button.svelte-zppgex.svelte-zppgex:not(.no-decor)::after{left:0;width:0%}.button.svelte-zppgex.svelte-zppgex:not(.no-decor)::before{right:0;width:100%}.button.svelte-zppgex.svelte-zppgex:not(.no-decor):hover::after{width:100%;transition:width 0.8s ease}.button.svelte-zppgex.svelte-zppgex:not(.no-decor):hover::before{width:0%;transition:width 0.5s ease}#content-container.work-click-area.svelte-zppgex.svelte-zppgex{margin-top:30vh}#content-container.work-click-area.svelte-zppgex .content-wrapper.svelte-zppgex{display:flex;flex-direction:column;cursor:grab;position:relative}#content-container.work-click-area.svelte-zppgex .content-wrapper.disabled.svelte-zppgex{cursor:default !important}#content-container.work-click-area.svelte-zppgex .content-wrapper.disabled .mobile ul.work-list.svelte-zppgex{opacity:0}#content-container.work-click-area.svelte-zppgex .content-wrapper .mobile.svelte-zppgex{width:100%;height:100%;overflow-x:auto}#content-container.work-click-area.svelte-zppgex .content-wrapper .svelte-zppgex{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container.svelte-zppgex{position:absolute;left:0;top:0;height:100%;width:100%;display:flex;flex-direction:row;justify-content:space-between;box-sizing:border-box;padding:0 14vw}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper.svelte-zppgex{text-align:left;position:relative;display:flex;flex-direction:column;justify-content:space-between;flex-basis:100%}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .top-align .wrapper.svelte-zppgex{display:inline-flex;flex-direction:row;align-items:center;justify-content:left;position:relative}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .top-align .wrapper h6.caption.svelte-zppgex{position:relative;font-family:"Questrial", sans-serif;text-transform:uppercase;font-weight:normal;font-size:1.9vh}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .top-align .wrapper .index.svelte-zppgex{font-family:"Questrial", sans-serif;position:relative;font-size:2.1vh}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .top-align .wrapper span.line.svelte-zppgex{width:300%;margin:0 10%;height:1.5px;background-color:white}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .mid-align.svelte-zppgex{display:flex;flex-direction:row;align-items:center;justify-content:space-between}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .mid-align h1.title.svelte-zppgex{position:relative;font-family:freight-big-pro, serif;font-size:7vw;text-transform:lowercase;font-weight:normal;word-wrap:break-word;white-space:normal;line-height:100%}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .mid-align h1.title.breakTitleWords.svelte-zppgex{display:inline-block;max-width:min-content}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .mid-align .close-button.svelte-zppgex{cursor:pointer;font-size:3.3vw}@media only screen and (max-width: 750px){#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .mid-align.svelte-zppgex{flex-direction:column;justify-content:flex-start;align-items:flex-start}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .mid-align h1.title.svelte-zppgex{font-size:16.5vw}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .mid-align .close-button-wrapper.svelte-zppgex{position:absolute;top:0;right:0}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .mid-align .close-button-wrapper .close-button.svelte-zppgex{font-size:5vh}}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align.svelte-zppgex{display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:5vh}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align .svelte-zppgex{flex-grow:1;flex-basis:0}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align p.svelte-zppgex{font-size:1.3vh;width:65%}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align .roles.svelte-zppgex{display:flex;flex-direction:column;align-items:center}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align .roles .descriptor.svelte-zppgex{line-height:270%;letter-spacing:0.5vh;font-family:"Questrial", sans-serif;text-transform:uppercase;font-weight:normal;font-size:1.4vh}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align .roles ul.svelte-zppgex{list-style-type:none;display:flex;flex-direction:column}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align .roles ul li.svelte-zppgex{font-family:"Questrial", sans-serif;text-transform:uppercase;font-weight:normal;font-size:1.7vh;line-height:160%}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align .links.svelte-zppgex{position:relative;display:flex;flex-direction:column;align-items:flex-end;gap:2vh}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align .links .button.svelte-zppgex{font-size:1.1vw;letter-spacing:0.2vw;text-transform:uppercase;text-decoration:none;line-height:160%}@media only screen and (max-width: 750px){#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align.svelte-zppgex{flex-direction:column;justify-content:flex-start;align-items:flex-start;gap:1vh}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align p.svelte-zppgex{font-size:1.6vh !important}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align .links.svelte-zppgex{margin:2vh 0;align-items:flex-start}#content-container.work-click-area.svelte-zppgex .content-wrapper .details-container .wrapper .bottom-align .links .button.svelte-zppgex{font-size:2vh;position:relative}}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list.svelte-zppgex{margin-top:auto;margin:auto 0;padding:0 5vw;list-style-type:none;display:flex;flex-direction:row;align-items:center;height:75vh;min-width:min-content;opacity:1;transition:opacity 0.5s ease;-webkit-transition:opacity 0.5s ease}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list.hold .list-item.svelte-zppgex{height:45vh !important}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item.svelte-zppgex{display:inline-flex;justify-content:flex-end;overflow:hidden;height:55vh;width:23vw;box-sizing:border-box;position:relative;overflow:hidden;z-index:3;margin-right:6vw;transition:width 0.7s cubic-bezier(0.25, 1, 0.5, 1), height 0.7s cubic-bezier(0.25, 1, 0.5, 1), margin 0.8s cubic-bezier(0.25, 1, 0.5, 1)}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .svelte-zppgex{transition:opacity 0.3s ease;-webkit-transition:opacity 0.3s ease}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item.active.svelte-zppgex{height:60vh;width:50vw;margin-right:16vw;margin-left:10vw}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item.active .img-wrapper.svelte-zppgex{width:100%}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item.ambient.svelte-zppgex{height:45vh}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .hidden.svelte-zppgex{opacity:0}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .img-wrapper.svelte-zppgex{overflow:hidden;height:100%;z-index:1;position:relative;width:85%;margin-right:15%;box-shadow:3px 9px 18px rgba(0, 0, 0, 0.2)}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .img-wrapper img.svelte-zppgex{height:110%;width:110%;object-fit:cover;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);-webkit-transform:translate(-50%, -50%);opacity:0.5}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-top-wrapper.svelte-zppgex{position:absolute;top:6vh;right:0;z-index:2;word-wrap:break-word;white-space:normal;text-align:right}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-top-wrapper .item-index.svelte-zppgex{font-size:1vw;letter-spacing:0.1vw;text-transform:uppercase;font-family:"Questrial", sans-serif}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-wrapper.svelte-zppgex{box-sizing:border-box;display:flex;flex-direction:column;justify-content:flex-end;position:absolute;bottom:10vh;right:0;text-align:right;z-index:2}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-wrapper .button.svelte-zppgex{font-size:1.3vw;letter-spacing:0.1vw;margin-top:2vh;text-transform:uppercase}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-wrapper .item-title.svelte-zppgex{font-family:"Questrial", sans-serif;font-weight:normal;font-size:2.5vw;z-index:0;opacity:1;letter-spacing:0.1vw;line-height:110%;word-spacing:80vw;text-transform:lowercase;word-wrap:break-word;white-space:normal}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-wrapper .inline-wrapper .svelte-zppgex{display:inline-block}@media only screen and (max-width: 1450px){#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item.svelte-zppgex{width:25vw}}@media only screen and (max-width: 1110px){#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item.svelte-zppgex{width:40vw}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-top-wrapper .item-index.svelte-zppgex{font-size:2vh}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-wrapper.svelte-zppgex{width:calc(55vw - 10vh)}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-wrapper .item-title.svelte-zppgex{font-size:5vw}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-wrapper .item-link.svelte-zppgex{font-size:2vh}}@media only screen and (max-width: 650px){#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item.svelte-zppgex{width:75vw}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-wrapper.svelte-zppgex{width:calc(70vw - 10vh)}#content-container.work-click-area.svelte-zppgex .content-wrapper ul.work-list .list-item .text-wrapper .item-title.svelte-zppgex{font-size:4.5vh}}',
  map: null
};
const Work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_workAnchor;
  let $isMobile, $$unsubscribe_isMobile;
  $$unsubscribe_workAnchor = subscribe(workAnchor, (value) => value);
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  let data = [];
  workItemsFetch.subscribe((val) => {
    if (val !== void 0)
      data = val;
  });
  let isMouseDown = false;
  isWorkScroll.subscribe((val) => isMouseDown = val);
  let workContainer;
  let container, listContainer;
  let images = [];
  let workItems = [];
  let currentActive = -1;
  const inViewPromise = new Promise((resolve) => {
  });
  $$result.css.add(css$e);
  $$unsubscribe_workAnchor();
  $$unsubscribe_isMobile();
  return `<div id="content-container" class="work-click-area svelte-zppgex"${add_attribute("this", workContainer, 0)}><div class="${["content-wrapper svelte-zppgex", ""].join(" ").trim()}" role="listbox" tabindex="0"${add_attribute("this", container, 0)}><div class="${["svelte-zppgex", $isMobile ? "mobile" : ""].join(" ").trim()}"><ul class="${["work-list svelte-zppgex", isMouseDown ? "hold" : ""].join(" ").trim()}"${add_attribute("this", listContainer, 0)}> ${each(data, (item, i) => {
    return `<li class="svelte-zppgex"><div class="${[
      "list-item clickable passive svelte-zppgex",
      " " + (currentActive === i ? "active" : "")
    ].join(" ").trim()}"${add_attribute("this", workItems[i], 0)}><div class="img-wrapper svelte-zppgex">${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ``;
      }
      return function(src) {
        return ` <img${add_attribute("src", src, 0)} draggable="false" alt="${escape(item.title, true) + " Background"}" class="svelte-zppgex"${add_attribute("this", images[i], 0)}> `;
      }(__value);
    }(loadImage(item.coverImageUrl || "assets/imgs/home-back.jpg"))}</div> ${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ``;
      }
      return function(_) {
        return ` <div class="${[
          "text-top-wrapper svelte-zppgex",
          isMouseDown ? "hidden" : ""
        ].join(" ").trim()}"><p class="item-index svelte-zppgex">${escape(i.toString().length > 1 ? i + 1 : "0" + (i + 1).toString())} </p></div> <div class="${[
          "text-wrapper svelte-zppgex",
          isMouseDown ? "hidden" : ""
        ].join(" ").trim()}"><h1 class="item-title svelte-zppgex"><span class="svelte-zppgex">${escape(item.title)} </span></h1> <button class="button item-link interactive svelte-zppgex" data-svelte-h="svelte-6jg3a6">view
									</button></div> `;
      }();
    }(inViewPromise)}</div> </li>`;
  })}</ul></div>  ${``}</div> </div>`;
});
const css$d = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");@import url("https://use.typekit.net/goc4cow.css");@media only screen and (max-width: 750px){.paragraph.svelte-a57kpz.svelte-a57kpz{font-size:3.4vw !important}.title.svelte-a57kpz.svelte-a57kpz{font-size:22vw}}@media only screen and (min-width: 750px){.title.svelte-a57kpz.svelte-a57kpz{font-size:19vh}}@media only screen and (min-width: 950px){.paragraph.svelte-a57kpz.svelte-a57kpz{font-size:1.8vh;line-height:150%;width:60%;letter-spacing:0.05vw}}@media only screen and (max-width: 950px){.paragraph.svelte-a57kpz.svelte-a57kpz{font-size:2vw;line-height:180% !important;letter-spacing:0;width:100% !important}}.title.svelte-a57kpz.svelte-a57kpz{color:white;font-weight:700;font-style:normal;font-family:freight-big-pro, serif;text-transform:lowercase;line-height:80%}.paragraph.svelte-a57kpz.svelte-a57kpz{font-family:"Questrial", sans-serif;color:white}.button.svelte-a57kpz.svelte-a57kpz{font-family:"Questrial", sans-serif;text-transform:lowercase;color:white;display:inline-block;position:relative;cursor:pointer;padding-bottom:1%;text-decoration:none}.button.svelte-a57kpz a.svelte-a57kpz{text-decoration:none;color:inherit;display:inline-block}.button.svelte-a57kpz.svelte-a57kpz:not(.no-decor)::after,.button.svelte-a57kpz.svelte-a57kpz:not(.no-decor)::before{content:"";position:absolute;width:100%;height:2px;bottom:0;background-color:white}.button.svelte-a57kpz.svelte-a57kpz:not(.no-decor)::after{left:0;width:0%}.button.svelte-a57kpz.svelte-a57kpz:not(.no-decor)::before{right:0;width:100%}.button.svelte-a57kpz.svelte-a57kpz:not(.no-decor):hover::after{width:100%;transition:width 0.8s ease}.button.svelte-a57kpz.svelte-a57kpz:not(.no-decor):hover::before{width:0%;transition:width 0.5s ease}#content-container.about.svelte-a57kpz.svelte-a57kpz{display:flex;flex-direction:row;justify-content:space-between;overflow:hidden;padding:0 5vw;margin-top:40vh;position:relative;padding-bottom:5vh}#content-container.about.svelte-a57kpz .profile-image.svelte-a57kpz{width:55%;overflow:hidden;margin-top:-40vh;position:relative}#content-container.about.svelte-a57kpz .profile-image img.svelte-a57kpz{width:75%;border-radius:0.5vh;object-fit:cover}#content-container.about.svelte-a57kpz .content-wrapper.svelte-a57kpz{box-sizing:border-box;width:50%;height:100%;margin:0 2vw;padding-right:4vw;display:flex;flex-direction:column;justify-content:center;margin-top:5vh;box-sizing:border-box;z-index:2}@media only screen and (max-width: 950px){#content-container.about.svelte-a57kpz .content-wrapper.svelte-a57kpz{width:80%}#content-container.about.svelte-a57kpz .content-wrapper h1.svelte-a57kpz{font-size:25vw !important}}#content-container.about.svelte-a57kpz .content-wrapper h1.svelte-a57kpz{font-size:20vh;font-weight:400}#content-container.about.svelte-a57kpz .content-wrapper .paragraph.svelte-a57kpz{margin-top:10vh;margin-left:13vw;position:relative;width:60%;line-height:1.5rem}@media only screen and (max-width: 750px){#content-container.about.svelte-a57kpz .content-wrapper .paragraph.svelte-a57kpz{width:100%;margin-left:5vw}}#content-container.about.svelte-a57kpz .content-wrapper .paragraph.svelte-a57kpz::before{content:"";position:absolute;height:1px;width:10vw;right:115%;top:15%;background-color:white}#content-container.about.svelte-a57kpz .content-wrapper .social-button-wrapper.svelte-a57kpz{font-size:3vh;margin-left:13vw;margin-top:4vh;display:inline-block}#content-container.about.svelte-a57kpz .content-wrapper .social-button-wrapper.svelte-a57kpz *:not(:last-child){margin-right:2vw}@media only screen and (max-width: 750px){#content-container.about.svelte-a57kpz .content-wrapper .social-button-wrapper.svelte-a57kpz{margin-left:5vw}}@media only screen and (max-width: 950px){#content-container.about.svelte-a57kpz .profile-image.svelte-a57kpz{display:none}}.horizontal-flex.svelte-a57kpz.svelte-a57kpz{display:flex;flex-direction:row;justify-content:space-between;padding:0 13vw;margin-top:12vh;width:100%;box-sizing:border-box}@media only screen and (max-width: 1080px){.horizontal-flex.svelte-a57kpz.svelte-a57kpz{flex-direction:column;padding:0 8vw}}.horizontal-flex.svelte-a57kpz .list.svelte-a57kpz{list-style-type:none;text-align:left}@media only screen and (max-width: 1080px){.horizontal-flex.svelte-a57kpz .list.svelte-a57kpz{margin-top:10vh}}.horizontal-flex.svelte-a57kpz .list li.list-title.svelte-a57kpz{letter-spacing:0.6vh;font-size:1.3vh;font-weight:bold}.horizontal-flex.svelte-a57kpz .list li.svelte-a57kpz{font-family:"Questrial", sans-serif;text-transform:uppercase;font-size:2vh;letter-spacing:0.5vh;padding:2vh 0;border-bottom:1px solid #444;display:flex;flex-wrap:wrap;flex-direction:row;justify-content:space-between;align-items:center;column-gap:10vw;row-gap:3vh}.horizontal-flex.svelte-a57kpz .list li img.svelte-a57kpz{height:2.3vh}',
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_slickScrollInstance;
  let $$unsubscribe_aboutAnchor;
  $$unsubscribe_slickScrollInstance = subscribe(slickScrollInstance, (value) => value);
  $$unsubscribe_aboutAnchor = subscribe(aboutAnchor, (value) => value);
  let section1Element, section2Element;
  let sectionOnePromise = new Promise((resolve) => resolve);
  let sectionTwoPromise = new Promise((resolve) => resolve);
  $$result.css.add(css$d);
  $$unsubscribe_slickScrollInstance();
  $$unsubscribe_aboutAnchor();
  return `<div><div id="content-container" class="about svelte-a57kpz"${add_attribute("this", section1Element, 0)}>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(_) {
      return ` <div class="content-wrapper svelte-a57kpz"><h1 class="title svelte-a57kpz" data-svelte-h="svelte-1q0c2qz">Hey I&#39;m <br>Hemanshu</h1> <div><p class="paragraph svelte-a57kpz"><!-- HTML_TAG_START -->${"I'm a full-stack web developer from Maharashtra, India. I specialize in designing and developing web applications, handling both the frontend and backend.<br/><br/>I work individuals to create beautiful, responsive, and scalable web products for them. Think we can make something great together? Let's talk over email."}<!-- HTML_TAG_END --></p></div> <div class="social-button-wrapper svelte-a57kpz"><div data-svelte-h="svelte-1pnfer8"><span class="button svelte-a57kpz"><a href="mailto:hemanshuypatil@gmail.com" target="_blank" class="clickable sublink link svelte-a57kpz">Know More</a></span></div> <div data-svelte-h="svelte-1oya0gf"><span class="button svelte-a57kpz"><a href="https://github.com/HemanshuYPatil" target="_blank" class="clickable sublink link svelte-a57kpz">Github</a></span></div> <div data-svelte-h="svelte-ahfu0u"><span class="button svelte-a57kpz"><a href="https://www.instagram.com/2806__hemanshu_patil__/?igsh=cndoOGd4MGNjN2Rn" target="_blank" class="clickable sublink link svelte-a57kpz">Instagram</a></span></div></div></div> <div class="profile-image svelte-a57kpz">${function(__value2) {
        if (is_promise(__value2)) {
          __value2.then(null, noop);
          return ``;
        }
        return function(src) {
          return ` <img${add_attribute("src", src, 0)} alt="Hemanshu's Profile" class="profile-pic svelte-a57kpz"> `;
        }(__value2);
      }(loadImage("assets/imgs/profile.png"))}</div> `;
    }();
  }(sectionOnePromise)}</div></div> <div class="horizontal-flex svelte-a57kpz"${add_attribute("this", section2Element, 0)}>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return /* @__PURE__ */ function(_) {
      return ` <ul class="list first svelte-a57kpz"><li class="list-title svelte-a57kpz"><div data-svelte-h="svelte-qce6sw">technical expertise</div></li> <li class="svelte-a57kpz"><div data-svelte-h="svelte-1lohsvi">Front-end</div> <div class="flex-item" data-svelte-h="svelte-1moi7fz"><img src="assets/imgs/svg-icons/svelte.svg" alt="Svelte" class="svelte-a57kpz"> <img src="assets/imgs/svg-icons/react.svg" alt="React" class="svelte-a57kpz"></div></li> <li class="svelte-a57kpz"><div data-svelte-h="svelte-161z679">Back-end</div> <div class="flex-item" data-svelte-h="svelte-1nq2ybe"><img src="assets/imgs/svg-icons/nodejs.svg" alt="node js" class="svelte-a57kpz"> <img src="assets/imgs/svg-icons/php.svg" alt="php" class="svelte-a57kpz"></div></li> <li class="svelte-a57kpz"><div data-svelte-h="svelte-75rbwl">Dev-ops</div> <div class="flex-item" data-svelte-h="svelte-11b9xc"><img src="assets/imgs/svg-icons/firebase.svg" alt="Firebase" class="svelte-a57kpz"> <img src="assets/imgs/svg-icons/gcp.svg" alt="Google Cloud Platform" class="svelte-a57kpz"></div></li> <li class="svelte-a57kpz"><div data-svelte-h="svelte-g2tyo8">Mobile</div> <div class="flex-item" data-svelte-h="svelte-4nm7of"><img src="assets/imgs/svg-icons/flutter.svg" alt="flutter" class="svelte-a57kpz"> <img src="assets/imgs/svg-icons/android.svg" alt="native android" class="svelte-a57kpz"> <img src="assets/imgs/svg-icons/iOS.svg" alt="native ios" class="svelte-a57kpz"></div></li></ul>  `;
    }();
  }(sectionTwoPromise)} </div>`;
});
const css$c = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");@import url("https://use.typekit.net/goc4cow.css");button.interactive.svelte-11y6gr6.svelte-11y6gr6{border:none;background-color:transparent;cursor:pointer}.nav-wrapper.svelte-11y6gr6.svelte-11y6gr6{width:100vw;margin:0 auto;padding:0 7vw;box-sizing:border-box;display:block;z-index:100;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.nav-wrapper.svelte-11y6gr6 .flex-wrapper.ico.svelte-11y6gr6{overflow:hidden;height:6vh;width:7vh;mix-blend-mode:exclusion;cursor:pointer}.nav-wrapper.svelte-11y6gr6 .flex-wrapper.ico .svelte-11y6gr6{width:100%;height:100%}.nav-wrapper.svelte-11y6gr6 .flex-wrapper.ico .logo-icon.svelte-11y6gr6{position:relative;display:inline-block;height:100%;width:100%}@media only screen and (min-width: 950px){.nav-wrapper.svelte-11y6gr6 ul.nav-list.svelte-11y6gr6{list-style-type:none;mix-blend-mode:exclusion;overflow:hidden}.nav-wrapper.svelte-11y6gr6 ul.nav-list li.svelte-11y6gr6{font-family:"Questrial", sans-serif;text-transform:uppercase;font-size:2vh;letter-spacing:0.2vh;display:inline-flex}.nav-wrapper.svelte-11y6gr6 ul.nav-list li.mobile.svelte-11y6gr6{display:none}.nav-wrapper.svelte-11y6gr6 ul.nav-list li button.svelte-11y6gr6{display:inline-block;cursor:pointer;color:white;font-size:inherit;font-family:inherit;letter-spacing:inherit;text-transform:uppercase}.nav-wrapper.svelte-11y6gr6 ul.nav-list li a.svelte-11y6gr6{display:inline-block;color:white;text-decoration:none}.nav-wrapper.svelte-11y6gr6 ul.nav-list li.svelte-11y6gr6:not(.mobile):not(:last-child)::after{margin-right:0.3vw;margin-left:0.5vw;content:"-"}}@media only screen and (max-width: 950px){.nav-wrapper.svelte-11y6gr6 .wrapper.svelte-11y6gr6{position:fixed;top:-10.1vh;right:0;height:100vh;width:0vw;background-color:#131314;transition:0.9s cubic-bezier(0.58, 0.14, 0.06, 0.97) width;-webkit-transition:0.9s cubic-bezier(0.58, 0.14, 0.06, 0.97) width;-moz-transition:0.9s cubic-bezier(0.58, 0.14, 0.06, 0.97) width;overflow:hidden !important}.nav-wrapper.svelte-11y6gr6 .wrapper ul.nav-list.svelte-11y6gr6{list-style-type:none;display:flex;flex-direction:column;position:relative;justify-content:center;height:100%;width:100%;box-sizing:border-box;padding:0 10vw;padding-top:10vh;overflow:hidden !important}.nav-wrapper.svelte-11y6gr6 .wrapper.mobileMenuActive.svelte-11y6gr6{left:0;width:100vw}.nav-wrapper.svelte-11y6gr6 .wrapper li.svelte-11y6gr6{font-family:"Questrial", sans-serif;font-weight:bolder;text-transform:lowercase;font-size:9vw;display:inline-flex;box-sizing:border-box;padding:2vh 0}.nav-wrapper.svelte-11y6gr6 .wrapper li.svelte-11y6gr6:not(:last-child){border-bottom:1px solid rgba(255, 255, 255, 0.3)}.nav-wrapper.svelte-11y6gr6 .wrapper li button.svelte-11y6gr6{display:inline-block;cursor:pointer;font-size:inherit;font-family:inherit;color:white;text-transform:inherit;font-weight:inherit}.nav-wrapper.svelte-11y6gr6 .wrapper li a.svelte-11y6gr6{display:inline-block;color:white;cursor:pointer;text-decoration:none}}.nav-wrapper.svelte-11y6gr6 .mask.svelte-11y6gr6{overflow:hidden}.nav-wrapper.svelte-11y6gr6 .hb-button.svelte-11y6gr6{cursor:pointer;position:relative;z-index:21}.nav-wrapper.svelte-11y6gr6 .hb-button .svelte-11y6gr6{display:inline-block;vertical-align:middle;user-select:none;-ms-user-select:none;-moz-user-select:none}.nav-wrapper.svelte-11y6gr6 .hb-button .hb.svelte-11y6gr6{display:flex;flex-direction:column;justify-content:center;row-gap:5px;width:3vh;height:2.2vh;margin-right:1.5vh;transition:row-gap 1s ease;-webkit-transition:row-gap 1s ease;-moz-transition:row-gap 1s ease}.nav-wrapper.svelte-11y6gr6 .hb-button .hb span.svelte-11y6gr6{transition:1s ease;-webkit-transition:1s ease;-moz-transition:1s ease;display:block;position:relative;top:0;right:0;height:2px;width:100%;background-color:white}.nav-wrapper.svelte-11y6gr6 .hb-button.mobileMenuActive .hb.svelte-11y6gr6{row-gap:0px}.nav-wrapper.svelte-11y6gr6 .hb-button.mobileMenuActive .hb span.svelte-11y6gr6{background-color:white}.nav-wrapper.svelte-11y6gr6 .hb-button.mobileMenuActive .hb span.svelte-11y6gr6:nth-child(1){transform:translateY(100%) rotate(-45deg);width:100%}.nav-wrapper.svelte-11y6gr6 .hb-button.mobileMenuActive .hb span.svelte-11y6gr6:nth-child(2){width:0%}.nav-wrapper.svelte-11y6gr6 .hb-button.mobileMenuActive .hb span.svelte-11y6gr6:nth-child(3){transform:translateY(-100%) rotate(45deg);width:100%}@media only screen and (min-width: 950px){.hb-button.svelte-11y6gr6.svelte-11y6gr6{display:none}}@media only screen and (max-width: 950px){.hb-button.svelte-11y6gr6.svelte-11y6gr6{display:block}}',
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_homeAnchor;
  let $$unsubscribe_workAnchor;
  let $$unsubscribe_aboutAnchor;
  let $page, $$unsubscribe_page;
  $$unsubscribe_homeAnchor = subscribe(homeAnchor, (value) => value);
  $$unsubscribe_workAnchor = subscribe(workAnchor, (value) => value);
  $$unsubscribe_aboutAnchor = subscribe(aboutAnchor, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { scrollContainer } = $$props;
  if ($$props.scrollContainer === void 0 && $$bindings.scrollContainer && scrollContainer !== void 0)
    $$bindings.scrollContainer(scrollContainer);
  $$result.css.add(css$c);
  $$unsubscribe_homeAnchor();
  $$unsubscribe_workAnchor();
  $$unsubscribe_aboutAnchor();
  $$unsubscribe_page();
  return ` ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(_) {
      return ` <div class="nav-wrapper svelte-11y6gr6" style="transform: translate(0px);"> <div class="flex-wrapper ico svelte-11y6gr6" style="z-index: 21;"><button class="interactive clickable svelte-11y6gr6"><img src="assets/imgs/patil.svg" class="logo-icon svelte-11y6gr6" alt="Logo" draggable="false"></button></div> <div class="flex-wrapper svelte-11y6gr6"> <div class="${["wrapper svelte-11y6gr6", ""].join(" ").trim()}"><ul class="nav-list svelte-11y6gr6"><li class="svelte-11y6gr6"><button class="interactive clickable svelte-11y6gr6" data-svelte-h="svelte-1unzo50">Home</button></li> <li class="svelte-11y6gr6"><button class="interactive clickable svelte-11y6gr6" data-svelte-h="svelte-1y15d6s"><p class="svelte-11y6gr6">Work</p></button></li> <li class="svelte-11y6gr6"><button class="interactive clickable svelte-11y6gr6" data-svelte-h="svelte-1e2bqcf">About</button></li> <li class="mobile svelte-11y6gr6"><a href="mailto:hemanshuypatil@gmail.com" target="_blank" class="svelte-11y6gr6" data-svelte-h="svelte-7ypf1f">Email</a></li> <li class="svelte-11y6gr6"><a href="https://github.com/HemanshuYPatil" target="_blank" class="svelte-11y6gr6" data-svelte-h="svelte-g4obcx">Github</a></li> ${$page.url.searchParams.get("dev") === "e4b1c7a93f5d4e1298ab77cd9130ff62" ? `<li class="svelte-11y6gr6"><a href="/studio" target="_blank" class="svelte-11y6gr6" data-svelte-h="svelte-1argvv8">Developer</a></li>` : ``}</ul></div>  <div class="mask svelte-11y6gr6"><button class="${[
        "interactive hb-button clickable svelte-11y6gr6",
        ""
      ].join(" ").trim()}" data-svelte-h="svelte-ddta8z"><div class="hb svelte-11y6gr6"><span class="svelte-11y6gr6"></span> <span class="svelte-11y6gr6"></span> <span class="svelte-11y6gr6"></span></div></button></div></div></div> `;
    }();
  }(loadPagePromise)}`;
});
function writableDerived(origins, derive, reflect, initial) {
  var childDerivedSetter, originValues, blockNextDerive = false;
  var reflectOldValues = reflect.length >= 2;
  var wrappedDerive = (got, set, update3) => {
    childDerivedSetter = set;
    if (reflectOldValues) {
      originValues = got;
    }
    if (!blockNextDerive) {
      let returned = derive(got, set, update3);
      if (derive.length < 2) {
        set(returned);
      } else {
        return returned;
      }
    }
    blockNextDerive = false;
  };
  var childDerived = derived(origins, wrappedDerive, initial);
  var singleOrigin = !Array.isArray(origins);
  function doReflect(reflecting) {
    var setWith = reflect(reflecting, originValues);
    if (singleOrigin) {
      blockNextDerive = true;
      origins.set(setWith);
    } else {
      setWith.forEach((value, i) => {
        blockNextDerive = true;
        origins[i].set(value);
      });
    }
    blockNextDerive = false;
  }
  var tryingSet = false;
  function update2(fn) {
    var isUpdated, mutatedBySubscriptions, oldValue, newValue;
    if (tryingSet) {
      newValue = fn(get_store_value(childDerived));
      childDerivedSetter(newValue);
      return;
    }
    var unsubscribe = childDerived.subscribe((value) => {
      if (!tryingSet) {
        oldValue = value;
      } else if (!isUpdated) {
        isUpdated = true;
      } else {
        mutatedBySubscriptions = true;
      }
    });
    newValue = fn(oldValue);
    tryingSet = true;
    childDerivedSetter(newValue);
    unsubscribe();
    tryingSet = false;
    if (mutatedBySubscriptions) {
      newValue = get_store_value(childDerived);
    }
    if (isUpdated) {
      doReflect(newValue);
    }
  }
  return {
    subscribe: childDerived.subscribe,
    set(value) {
      update2(() => value);
    },
    update: update2
  };
}
const TOAST_LIMIT = 20;
const toasts = writable([]);
const pausedAt = writable(null);
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    remove(toastId);
  }, 1e3);
  toastTimeouts.set(toastId, timeout);
};
const clearFromRemoveQueue = (toastId) => {
  const timeout = toastTimeouts.get(toastId);
  if (timeout) {
    clearTimeout(timeout);
  }
};
function update(toast2) {
  if (toast2.id) {
    clearFromRemoveQueue(toast2.id);
  }
  toasts.update(($toasts) => $toasts.map((t) => t.id === toast2.id ? { ...t, ...toast2 } : t));
}
function add(toast2) {
  toasts.update(($toasts) => [toast2, ...$toasts].slice(0, TOAST_LIMIT));
}
function upsert(toast2) {
  if (get_store_value(toasts).find((t) => t.id === toast2.id)) {
    update(toast2);
  } else {
    add(toast2);
  }
}
function dismiss(toastId) {
  toasts.update(($toasts) => {
    if (toastId) {
      addToRemoveQueue(toastId);
    } else {
      $toasts.forEach((toast2) => {
        addToRemoveQueue(toast2.id);
      });
    }
    return $toasts.map((t) => t.id === toastId || toastId === void 0 ? { ...t, visible: false } : t);
  });
}
function remove(toastId) {
  toasts.update(($toasts) => {
    if (toastId === void 0) {
      return [];
    }
    return $toasts.filter((t) => t.id !== toastId);
  });
}
function startPause(time) {
  pausedAt.set(time);
}
function endPause(time) {
  let diff;
  pausedAt.update(($pausedAt) => {
    diff = time - ($pausedAt || 0);
    return null;
  });
  toasts.update(($toasts) => $toasts.map((t) => ({
    ...t,
    pauseDuration: t.pauseDuration + diff
  })));
}
const defaultTimeouts = {
  blank: 4e3,
  error: 4e3,
  success: 2e3,
  loading: Infinity,
  custom: 4e3
};
function useToasterStore(toastOptions = {}) {
  const mergedToasts = writableDerived(toasts, ($toasts) => $toasts.map((t) => ({
    ...toastOptions,
    ...toastOptions[t.type],
    ...t,
    duration: t.duration || toastOptions[t.type]?.duration || toastOptions?.duration || defaultTimeouts[t.type],
    style: [toastOptions.style, toastOptions[t.type]?.style, t.style].join(";")
  })), ($toasts) => $toasts);
  return {
    toasts: mergedToasts,
    pausedAt
  };
}
const isFunction = (valOrFunction) => typeof valOrFunction === "function";
const resolveValue = (valOrFunction, arg) => isFunction(valOrFunction) ? valOrFunction(arg) : valOrFunction;
const genId = /* @__PURE__ */ (() => {
  let count = 0;
  return () => {
    count += 1;
    return count.toString();
  };
})();
const prefersReducedMotion = /* @__PURE__ */ (() => {
  let shouldReduceMotion;
  return () => {
    if (shouldReduceMotion === void 0 && typeof window !== "undefined") {
      const mediaQuery = matchMedia("(prefers-reduced-motion: reduce)");
      shouldReduceMotion = !mediaQuery || mediaQuery.matches;
    }
    return shouldReduceMotion;
  };
})();
const createToast = (message, type = "blank", opts) => ({
  createdAt: Date.now(),
  visible: true,
  type,
  ariaProps: {
    role: "status",
    "aria-live": "polite"
  },
  message,
  pauseDuration: 0,
  ...opts,
  id: opts?.id || genId()
});
const createHandler = (type) => (message, options) => {
  const toast2 = createToast(message, type, options);
  upsert(toast2);
  return toast2.id;
};
const toast = (message, opts) => createHandler("blank")(message, opts);
toast.error = createHandler("error");
toast.success = createHandler("success");
toast.loading = createHandler("loading");
toast.custom = createHandler("custom");
toast.dismiss = (toastId) => {
  dismiss(toastId);
};
toast.remove = (toastId) => remove(toastId);
toast.promise = (promise, msgs, opts) => {
  const id = toast.loading(msgs.loading, { ...opts, ...opts?.loading });
  promise.then((p) => {
    toast.success(resolveValue(msgs.success, p), {
      id,
      ...opts,
      ...opts?.success
    });
    return p;
  }).catch((e) => {
    toast.error(resolveValue(msgs.error, e), {
      id,
      ...opts,
      ...opts?.error
    });
  });
  return promise;
};
function calculateOffset(toast2, $toasts, opts) {
  const { reverseOrder, gutter = 8, defaultPosition } = opts || {};
  const relevantToasts = $toasts.filter((t) => (t.position || defaultPosition) === (toast2.position || defaultPosition) && t.height);
  const toastIndex = relevantToasts.findIndex((t) => t.id === toast2.id);
  const toastsBefore = relevantToasts.filter((toast3, i) => i < toastIndex && toast3.visible).length;
  const offset = relevantToasts.filter((t) => t.visible).slice(...reverseOrder ? [toastsBefore + 1] : [0, toastsBefore]).reduce((acc, t) => acc + (t.height || 0) + gutter, 0);
  return offset;
}
const handlers = {
  startPause() {
    startPause(Date.now());
  },
  endPause() {
    endPause(Date.now());
  },
  updateHeight: (toastId, height) => {
    update({ id: toastId, height });
  },
  calculateOffset
};
function useToaster(toastOptions) {
  const { toasts: toasts2, pausedAt: pausedAt2 } = useToasterStore(toastOptions);
  const timeouts = /* @__PURE__ */ new Map();
  let _pausedAt;
  const unsubscribes = [
    pausedAt2.subscribe(($pausedAt) => {
      if ($pausedAt) {
        for (const [, timeoutId] of timeouts) {
          clearTimeout(timeoutId);
        }
        timeouts.clear();
      }
      _pausedAt = $pausedAt;
    }),
    toasts2.subscribe(($toasts) => {
      if (_pausedAt) {
        return;
      }
      const now = Date.now();
      for (const t of $toasts) {
        if (timeouts.has(t.id)) {
          continue;
        }
        if (t.duration === Infinity) {
          continue;
        }
        const durationLeft = (t.duration || 0) + t.pauseDuration - (now - t.createdAt);
        if (durationLeft < 0) {
          if (t.visible) {
            toast.dismiss(t.id);
          }
          return null;
        }
        timeouts.set(t.id, setTimeout(() => toast.dismiss(t.id), durationLeft));
      }
    })
  ];
  onDestroy(() => {
    for (const unsubscribe of unsubscribes) {
      unsubscribe();
    }
  });
  return { toasts: toasts2, handlers };
}
const css$b = {
  code: "div.svelte-11kvm4p{width:20px;opacity:0;height:20px;border-radius:10px;background:var(--primary, #61d345);position:relative;transform:rotate(45deg);animation:svelte-11kvm4p-circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation-delay:100ms}div.svelte-11kvm4p::after{content:'';box-sizing:border-box;animation:svelte-11kvm4p-checkmarkAnimation 0.2s ease-out forwards;opacity:0;animation-delay:200ms;position:absolute;border-right:2px solid;border-bottom:2px solid;border-color:var(--secondary, #fff);bottom:6px;left:6px;height:10px;width:6px}@keyframes svelte-11kvm4p-circleAnimation{from{transform:scale(0) rotate(45deg);opacity:0}to{transform:scale(1) rotate(45deg);opacity:1}}@keyframes svelte-11kvm4p-checkmarkAnimation{0%{height:0;width:0;opacity:0}40%{height:0;width:6px;opacity:1}100%{opacity:1;height:10px}}",
  map: null
};
const CheckmarkIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#61d345" } = $$props;
  let { secondary = "#fff" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  $$result.css.add(css$b);
  return `  <div class="svelte-11kvm4p"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const css$a = {
  code: "div.svelte-1ee93ns{width:20px;opacity:0;height:20px;border-radius:10px;background:var(--primary, #ff4b4b);position:relative;transform:rotate(45deg);animation:svelte-1ee93ns-circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation-delay:100ms}div.svelte-1ee93ns::after,div.svelte-1ee93ns::before{content:'';animation:svelte-1ee93ns-firstLineAnimation 0.15s ease-out forwards;animation-delay:150ms;position:absolute;border-radius:3px;opacity:0;background:var(--secondary, #fff);bottom:9px;left:4px;height:2px;width:12px}div.svelte-1ee93ns:before{animation:svelte-1ee93ns-secondLineAnimation 0.15s ease-out forwards;animation-delay:180ms;transform:rotate(90deg)}@keyframes svelte-1ee93ns-circleAnimation{from{transform:scale(0) rotate(45deg);opacity:0}to{transform:scale(1) rotate(45deg);opacity:1}}@keyframes svelte-1ee93ns-firstLineAnimation{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes svelte-1ee93ns-secondLineAnimation{from{transform:scale(0) rotate(90deg);opacity:0}to{transform:scale(1) rotate(90deg);opacity:1}}",
  map: null
};
const ErrorIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#ff4b4b" } = $$props;
  let { secondary = "#fff" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  $$result.css.add(css$a);
  return `  <div class="svelte-1ee93ns"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const css$9 = {
  code: "div.svelte-1j7dflg{width:12px;height:12px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--secondary, #e0e0e0);border-right-color:var(--primary, #616161);animation:svelte-1j7dflg-rotate 1s linear infinite}@keyframes svelte-1j7dflg-rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",
  map: null
};
const LoaderIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#616161" } = $$props;
  let { secondary = "#e0e0e0" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  $$result.css.add(css$9);
  return `  <div class="svelte-1j7dflg"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const css$8 = {
  code: ".indicator.svelte-1kgeier{position:relative;display:flex;justify-content:center;align-items:center;min-width:20px;min-height:20px}.status.svelte-1kgeier{position:absolute}.animated.svelte-1kgeier{position:relative;transform:scale(0.6);opacity:0.4;min-width:20px;animation:svelte-1kgeier-enter 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards}@keyframes svelte-1kgeier-enter{from{transform:scale(0.6);opacity:0.4}to{transform:scale(1);opacity:1}}",
  map: null
};
const ToastIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let type;
  let icon;
  let iconTheme;
  let { toast: toast2 } = $$props;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  $$result.css.add(css$8);
  ({ type, icon, iconTheme } = toast2);
  return `${typeof icon === "string" ? `<div class="animated svelte-1kgeier">${escape(icon)}</div>` : `${typeof icon !== "undefined" ? `${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : `${type !== "blank" ? `<div class="indicator svelte-1kgeier">${validate_component(LoaderIcon, "LoaderIcon").$$render($$result, Object.assign({}, iconTheme), {}, {})} ${type !== "loading" ? `<div class="status svelte-1kgeier">${type === "error" ? `${validate_component(ErrorIcon, "ErrorIcon").$$render($$result, Object.assign({}, iconTheme), {}, {})}` : `${validate_component(CheckmarkIcon, "CheckmarkIcon").$$render($$result, Object.assign({}, iconTheme), {}, {})}`}</div>` : ``}</div>` : ``}`}`}`;
});
const css$7 = {
  code: ".message.svelte-1nauejd{display:flex;justify-content:center;margin:4px 10px;color:inherit;flex:1 1 auto;white-space:pre-line}",
  map: null
};
const ToastMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toast: toast2 } = $$props;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  $$result.css.add(css$7);
  return `<div${spread([{ class: "message" }, escape_object(toast2.ariaProps)], { classes: "svelte-1nauejd" })}>${typeof toast2.message === "string" ? `${escape(toast2.message)}` : `${validate_component(toast2.message || missing_component, "svelte:component").$$render($$result, { toast: toast2 }, {}, {})}`} </div>`;
});
const css$6 = {
  code: "@keyframes svelte-ug60r4-enterAnimation{0%{transform:translate3d(0, calc(var(--factor) * -200%), 0) scale(0.6);opacity:0.5}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes svelte-ug60r4-exitAnimation{0%{transform:translate3d(0, 0, -1px) scale(1);opacity:1}100%{transform:translate3d(0, calc(var(--factor) * -150%), -1px) scale(0.6);opacity:0}}@keyframes svelte-ug60r4-fadeInAnimation{0%{opacity:0}100%{opacity:1}}@keyframes svelte-ug60r4-fadeOutAnimation{0%{opacity:1}100%{opacity:0}}.base.svelte-ug60r4{display:flex;align-items:center;background:#fff;color:#363636;line-height:1.3;will-change:transform;box-shadow:0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);max-width:350px;pointer-events:auto;padding:8px 10px;border-radius:8px}.transparent.svelte-ug60r4{opacity:0}.enter.svelte-ug60r4{animation:svelte-ug60r4-enterAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards}.exit.svelte-ug60r4{animation:svelte-ug60r4-exitAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards}.fadeIn.svelte-ug60r4{animation:svelte-ug60r4-fadeInAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards}.fadeOut.svelte-ug60r4{animation:svelte-ug60r4-fadeOutAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards}",
  map: null
};
const ToastBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toast: toast2 } = $$props;
  let { position = void 0 } = $$props;
  let { style = "" } = $$props;
  let { Component = void 0 } = $$props;
  let factor;
  let animation;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.Component === void 0 && $$bindings.Component && Component !== void 0)
    $$bindings.Component(Component);
  $$result.css.add(css$6);
  {
    {
      const top = (toast2.position || position || "top-center").includes("top");
      factor = top ? 1 : -1;
      const [enter, exit] = prefersReducedMotion() ? ["fadeIn", "fadeOut"] : ["enter", "exit"];
      animation = toast2.visible ? enter : exit;
    }
  }
  return `<div class="${"base " + escape(toast2.height ? animation : "transparent", true) + " " + escape(toast2.className || "", true) + " svelte-ug60r4"}"${add_styles(merge_ssr_styles(escape(style, true) + "; " + escape(toast2.style, true), { "--factor": factor }))}>${Component ? `${validate_component(Component || missing_component, "svelte:component").$$render($$result, {}, {}, {
    message: () => {
      return `${validate_component(ToastMessage, "ToastMessage").$$render($$result, { toast: toast2, slot: "message" }, {}, {})}`;
    },
    icon: () => {
      return `${validate_component(ToastIcon, "ToastIcon").$$render($$result, { toast: toast2, slot: "icon" }, {}, {})}`;
    }
  })}` : `${slots.default ? slots.default({ ToastIcon, ToastMessage, toast: toast2 }) : ` ${validate_component(ToastIcon, "ToastIcon").$$render($$result, { toast: toast2 }, {}, {})} ${validate_component(ToastMessage, "ToastMessage").$$render($$result, { toast: toast2 }, {}, {})} `}`} </div>`;
});
const css$5 = {
  code: ".wrapper.svelte-v01oml{left:0;right:0;display:flex;position:absolute;transform:translateY(calc(var(--offset, 16px) * var(--factor) * 1px))}.transition.svelte-v01oml{transition:all 230ms cubic-bezier(0.21, 1.02, 0.73, 1)}.active.svelte-v01oml{z-index:9999}.active.svelte-v01oml>*{pointer-events:auto}",
  map: null
};
const ToastWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let top;
  let bottom;
  let factor;
  let justifyContent;
  let { toast: toast2 } = $$props;
  let { setHeight } = $$props;
  let wrapperEl;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  if ($$props.setHeight === void 0 && $$bindings.setHeight && setHeight !== void 0)
    $$bindings.setHeight(setHeight);
  $$result.css.add(css$5);
  top = toast2.position?.includes("top") ? 0 : null;
  bottom = toast2.position?.includes("bottom") ? 0 : null;
  factor = toast2.position?.includes("top") ? 1 : -1;
  justifyContent = toast2.position?.includes("center") && "center" || (toast2.position?.includes("right") || toast2.position?.includes("end")) && "flex-end" || null;
  return `<div class="${[
    "wrapper svelte-v01oml",
    (toast2.visible ? "active" : "") + " " + (!prefersReducedMotion() ? "transition" : "")
  ].join(" ").trim()}"${add_styles({
    "--factor": factor,
    "--offset": toast2.offset,
    top,
    bottom,
    "justify-content": justifyContent
  })}${add_attribute("this", wrapperEl, 0)}>${toast2.type === "custom" ? `${validate_component(ToastMessage, "ToastMessage").$$render($$result, { toast: toast2 }, {}, {})}` : `${slots.default ? slots.default({ toast: toast2 }) : ` ${validate_component(ToastBar, "ToastBar").$$render($$result, { toast: toast2, position: toast2.position }, {}, {})} `}`} </div>`;
});
const css$4 = {
  code: ".toaster.svelte-1phplh9{--default-offset:16px;position:fixed;z-index:9999;top:var(--default-offset);left:var(--default-offset);right:var(--default-offset);bottom:var(--default-offset);pointer-events:none}",
  map: null
};
const Toaster = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toasts, $$unsubscribe_toasts;
  let { reverseOrder = false } = $$props;
  let { position = "top-center" } = $$props;
  let { toastOptions = void 0 } = $$props;
  let { gutter = 8 } = $$props;
  let { containerStyle = void 0 } = $$props;
  let { containerClassName = void 0 } = $$props;
  const { toasts: toasts2, handlers: handlers2 } = useToaster(toastOptions);
  $$unsubscribe_toasts = subscribe(toasts2, (value) => $toasts = value);
  let _toasts;
  if ($$props.reverseOrder === void 0 && $$bindings.reverseOrder && reverseOrder !== void 0)
    $$bindings.reverseOrder(reverseOrder);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.toastOptions === void 0 && $$bindings.toastOptions && toastOptions !== void 0)
    $$bindings.toastOptions(toastOptions);
  if ($$props.gutter === void 0 && $$bindings.gutter && gutter !== void 0)
    $$bindings.gutter(gutter);
  if ($$props.containerStyle === void 0 && $$bindings.containerStyle && containerStyle !== void 0)
    $$bindings.containerStyle(containerStyle);
  if ($$props.containerClassName === void 0 && $$bindings.containerClassName && containerClassName !== void 0)
    $$bindings.containerClassName(containerClassName);
  $$result.css.add(css$4);
  _toasts = $toasts.map((toast2) => ({
    ...toast2,
    position: toast2.position || position,
    offset: handlers2.calculateOffset(toast2, $toasts, {
      reverseOrder,
      gutter,
      defaultPosition: position
    })
  }));
  $$unsubscribe_toasts();
  return `<div class="${"toaster " + escape(containerClassName || "", true) + " svelte-1phplh9"}"${add_attribute("style", containerStyle, 0)} role="alert">${each(_toasts, (toast2) => {
    return `${validate_component(ToastWrapper, "ToastWrapper").$$render(
      $$result,
      {
        toast: toast2,
        setHeight: (height) => handlers2.updateHeight(toast2.id, height)
      },
      {},
      {}
    )}`;
  })} </div>`;
});
const css$3 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");@import url("https://use.typekit.net/goc4cow.css");@media only screen and (max-width: 750px){}@media only screen and (min-width: 750px){}@media only screen and (min-width: 950px){}@media only screen and (max-width: 950px){}.button.svelte-g0q3jr.svelte-g0q3jr{font-family:"Questrial", sans-serif;text-transform:lowercase;color:white;display:inline-block;position:relative;cursor:pointer;padding-bottom:1%;text-decoration:none}.button.svelte-g0q3jr.svelte-g0q3jr:not(.no-decor)::after,.button.svelte-g0q3jr.svelte-g0q3jr:not(.no-decor)::before{content:"";position:absolute;width:100%;height:2px;bottom:0;background-color:white}.button.svelte-g0q3jr.svelte-g0q3jr:not(.no-decor)::after{left:0;width:0%}.button.svelte-g0q3jr.svelte-g0q3jr:not(.no-decor)::before{right:0;width:100%}.button.svelte-g0q3jr.svelte-g0q3jr:not(.no-decor):hover::after{width:100%;transition:width 0.8s ease}.button.svelte-g0q3jr.svelte-g0q3jr:not(.no-decor):hover::before{width:0%;transition:width 0.5s ease}.footer-wrapper.svelte-g0q3jr.svelte-g0q3jr{width:100vw;background-color:#131314;display:flex;flex-direction:row;justify-content:space-between;padding:15vh 13vw;margin-top:25vh;box-sizing:border-box}@media only screen and (max-width: 950px){.footer-wrapper.svelte-g0q3jr .flex-wrapper.decor.svelte-g0q3jr{display:none !important}}@media only screen and (max-width: 950px){.footer-wrapper.svelte-g0q3jr.svelte-g0q3jr{flex-direction:column-reverse}.footer-wrapper.svelte-g0q3jr .flex-wrapper.svelte-g0q3jr:not(:first-child){margin-bottom:15vh}}.footer-wrapper.svelte-g0q3jr .inline-flex.svelte-g0q3jr{flex-grow:1;display:flex;flex-direction:row;align-items:center}.footer-wrapper.svelte-g0q3jr .logo-wrapper.svelte-g0q3jr{margin-bottom:5vh}.footer-wrapper.svelte-g0q3jr .logo-wrapper .logo.svelte-g0q3jr{display:inline-block;height:6vh}.footer-wrapper.svelte-g0q3jr .status-wrapper .button.large-text.svelte-g0q3jr{margin-top:2vh}.footer-wrapper.svelte-g0q3jr .credits-wrapper.svelte-g0q3jr{margin-top:5vh;color:rgba(255, 255, 255, 0.3)}.footer-wrapper.svelte-g0q3jr .credits-wrapper p.year.svelte-g0q3jr{margin-bottom:1vh;font-family:"Questrial", sans-serif;font-size:1.8vh;font-weight:normal;color:rgba(255, 255, 255, 0.3)}.footer-wrapper.svelte-g0q3jr .credits-wrapper .credits.svelte-g0q3jr{font-size:1.5vh;line-height:125%;white-space:nowrap;color:rgba(255, 255, 255, 0.3)}.footer-wrapper.svelte-g0q3jr .credits-wrapper .credits .button.svelte-g0q3jr{color:rgba(255, 255, 255, 0.3)}.footer-wrapper.svelte-g0q3jr .large-text.svelte-g0q3jr{font-size:2.5vh}@media only screen and (max-width: 950px){.footer-wrapper.svelte-g0q3jr .large-text br.svelte-g0q3jr{display:none}}.footer-wrapper.svelte-g0q3jr .flex-wrapper.decor.svelte-g0q3jr{display:flex;flex-direction:column;justify-content:center}.footer-wrapper.svelte-g0q3jr .flex-wrapper.decor .name-signature.svelte-g0q3jr{width:20vh}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let footerContainerElement, logoElement, creditsElement, statusElement, fullEmailLinkElement, fullphonenuber;
  let siteData = { availablity_date: "" };
  let Demail = "";
  siteDataFetch.subscribe((val) => {
    if (val !== void 0)
      siteData = val;
  });
  const currentYear = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getFullYear();
  $$result.css.add(css$3);
  return `<div class="footer-wrapper svelte-g0q3jr"${add_attribute("this", footerContainerElement, 0)}> <div class="flex-wrapper svelte-g0q3jr"><div class="logo-wrapper svelte-g0q3jr"><div class="inline-flex svelte-g0q3jr"${add_attribute("this", logoElement, 0)} data-svelte-h="svelte-i4bork"><img src="assets/imgs/patil.svg" alt="mh logo" draggable="false" class="logo button svelte-g0q3jr"></div></div> <div class="status-wrapper">${siteData.availablity_date === "" ? `<p class="large-text svelte-g0q3jr"${add_attribute("this", statusElement, 0)} data-svelte-h="svelte-9ws320">i am currently accepting freelance work, <br class="svelte-g0q3jr">you may reach me on my
          email or contact number.</p>` : `<p class="large-text svelte-g0q3jr"${add_attribute("this", statusElement, 0)}>i am available for freelance work after <br class="svelte-g0q3jr"> ${escape(siteData.availablity_date)}.</p>`} <a class="button large-text svelte-g0q3jr" href="${"mailto:$" + escape(Demail, true)}" target="_blank"${add_attribute("this", fullEmailLinkElement, 0)}>hemanshuypatil@gmail.com</a> <br class="svelte-g0q3jr">   <p style="margin-top: 10px;" class="button large-text svelte-g0q3jr"${add_attribute("this", fullphonenuber, 0)} data-svelte-h="svelte-13cs72y">+91 7058026892</p></div> <div class="credits-wrapper svelte-g0q3jr"${add_attribute("this", creditsElement, 0)}><p class="year svelte-g0q3jr">© ${escape(currentYear)}</p> <p class="credits svelte-g0q3jr" data-svelte-h="svelte-17hd6tm">designed and developed by Hemanshu Patil<br class="svelte-g0q3jr"></p></div></div>  <div class="flex-wrapper decor svelte-g0q3jr"${add_attribute("this", statusElement, 0)} data-svelte-h="svelte-7lruud"><svg id="signature" color="#9fa1a3" class="name-signature svelte-g0q3jr" x="0px" y="0px" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="1000" viewBox="0 0 2000 686"><g transform="matrix(1,0,0,1,-1.2121212121212466,-2.3818077474892334)"><svg viewBox="0 0 396 136" data-background-color="#9fa1a3" preserveAspectRatio="xMidYMid meet" height="686" width="2000" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="tight-bounds" transform="matrix(1,0,0,1,0.2400000000000091,0.4721951219512164)"><svg viewBox="0 0 395.52 135.05560975609754" height="135.05560975609754" width="395.52"><g><svg viewBox="0 0 395.52 135.05560975609754" height="135.05560975609754" width="395.52"><g><svg viewBox="0 0 395.52 135.05560975609754" height="135.05560975609754" width="395.52"><g id="textblocktransform"><svg viewBox="0 0 395.52 135.05560975609754" height="135.05560975609754" width="395.52" id="textblock"><g><svg viewBox="0 0 395.52 135.05560975609754" height="135.05560975609754" width="395.52"><g transform="matrix(1,0,0,1,0,0)"><svg width="395.52" viewBox="1.6 -29.6 92.24000000000001 31.5" height="135.05560975609754" data-palette-color="#ffffff"><g class="wordmark-text-0" data-fill-palette-color="primary" id="text-0"><path fill="#9fa1a3" d="M8.7-0.85Q8.7-0.2 9.35-0.2 10-0.2 11.1-1.58 12.2-2.95 12.6-2.9L12.6-2.9Q12.9-2.6 11.95-1.6L11.95-1.6Q11.85-1.5 11.6-1.07 11.35-0.65 11.18-0.4 11-0.15 10.7 0.25 10.4 0.65 10.15 0.9 9.9 1.15 9.6 1.4L9.6 1.4Q9 1.9 8.55 1.9 8.1 1.9 7.33 1.73 6.55 1.55 6.53 1.35 6.5 1.15 6.5 1L6.5 1Q6.5-1.6 10.75-9.65L10.75-9.65Q10.1-9.65 9.73-9.7 9.35-9.75 9.28-10.1 9.2-10.45 9.47-10.5 9.75-10.55 10.05-10.5 10.35-10.45 11.1-10.45L11.1-10.45Q13.65-15.05 14.15-16.07 14.65-17.1 14.65-17.55 14.65-18 14.6-18.25L14.6-18.25Q14.8-19.65 17.03-21.93 19.25-24.2 21.05-24.2L21.05-24.2Q21.65-24.2 22.68-23.75 23.7-23.3 23.85-22.73 24-22.15 23.93-22.08 23.85-22 23.6-22.1 23.35-22.2 23.3-22.2L23.3-22.2Q19.7-22.2 13.05-10.45L13.05-10.45Q18.5-10.7 24.23-12.63 29.95-14.55 33-17.7L33-17.7Q34.75-19.4 34.75-21.3L34.75-21.3Q34.75-26.9 23.3-26.9L23.3-26.9Q16.75-26.9 10.8-24.9L10.8-24.9Q7.7-23.8 5.53-21.95 3.35-20.1 2.95-17.75L2.95-17.75Q2.9-17.5 2.9-17.1 2.9-16.7 3.23-16.13 3.55-15.55 4-15.25 4.45-14.95 5.28-14.55 6.1-14.15 6.38-13.95 6.65-13.75 6.5-13.53 6.35-13.3 5.85-13.4L5.85-13.4Q4.3-13.65 2.95-14.95 1.6-16.25 1.6-17.75L1.6-17.75Q1.6-18.2 1.7-18.65L1.7-18.65Q1.6-19.3 1.6-19.45L1.6-19.45Q2.3-23.2 8.95-26.6L8.95-26.6Q14.2-29.05 21.35-29.05L21.35-29.05Q25.75-29.05 30.05-27.85L30.05-27.85Q32.95-26.85 34.45-25 35.95-23.15 35.95-21.25L35.95-21.25Q35.95-18.35 33.65-16.13 31.35-13.9 28.5-12.7L28.5-12.7Q21.75-9.8 12.6-9.6L12.6-9.6Q10.65-6 9.68-3.75 8.7-1.5 8.7-0.85ZM31.45 0.55L31.45 0.55Q30.65 0.55 29.72 0.08 28.8-0.4 28.15-1.28 27.5-2.15 27.5-3.15 27.5-4.15 27.95-5.05L27.95-5.05Q28.95-7.15 31.17-9.13 33.4-11.1 35.8-12.5 38.2-13.9 39.6-14.25 41-14.6 42.32-14.6 43.65-14.6 44.6-13.93 45.55-13.25 45.55-12.5L45.55-12.5Q45.55-12.25 45.5-12.2 45.45-12.15 45.25-12.25L45.25-12.25Q44.65-13.2 42.77-13.2 40.9-13.2 38.52-11.98 36.15-10.75 34.05-8.9L34.05-8.9Q32.3-7.25 30.97-5.18 29.65-3.1 29.65-2.15L29.65-2.15Q29.65-0.3 30.7-0.3 31.75-0.3 33.9-2L33.9-2Q37.45-5 38.75-6.4L38.75-6.4Q43.35-11.35 43.7-11.35L43.7-11.35Q44.3-11.35 45.15-11 46-10.65 45.7-10.15L45.7-10.15Q43.15-6.55 42.7-2.9L42.7-2.9Q42.65-2.45 42.65-1.75 42.65-1.05 43.05-0.6L43.05-0.6Q43.8 0.2 45.1-0.5 46.4-1.2 48.72-3.3 51.05-5.4 52.45-7.4L52.45-7.4Q52.65-7.65 52.9-7.53 53.15-7.4 53.15-7.3L53.15-7.3Q53.15-6.55 50.77-4.03 48.4-1.5 47.15-0.6L47.15-0.6Q44.8 1.15 42.8 1.15L42.8 1.15Q40.9 1.15 40.25-0.75L40.25-0.75Q40.1-1.35 40.1-2.1L40.1-2.1Q40.1-4.35 41.05-6.85L41.05-6.85Q40.85-6.75 39.2-4.85 37.55-2.95 35.37-1.2 33.2 0.55 31.45 0.55ZM59.15-13.95L59.8-14Q63.65-14.35 64.47-14.35 65.3-14.35 65.3-14.1L65.3-14.1Q65.3-13.8 64.12-13.48 62.95-13.15 58.4-12.65L58.4-12.65Q58.15-12.2 57.8-11.6L57.8-11.6Q57.05-10.4 57-10.15L57-10.15Q54.15-4.45 54-2.9L54-2.9Q53.95-2.45 53.95-1.75 53.95-1.05 54.34-0.6L54.34-0.6Q55.05 0.2 56.34-0.5 57.65-1.2 59.97-3.3 62.3-5.4 63.75-7.4L63.75-7.4Q63.95-7.65 64.25-7.5L64.25-7.5Q65-7.15 61.65-3.55L61.65-3.55Q58.45-0.1 56.3 0.7L56.3 0.7Q55.05 1.15 54.2 1.15L54.2 1.15Q52.2 1.15 51.55-0.75L51.55-0.75Q51.45-1.1 51.45-1.6L51.45-1.6Q51.45-3.35 53.05-6.9L53.05-6.9Q52.8-6.35 51.09-4.4L51.09-4.4Q50.65-3.9 50.4-4.4L50.4-4.4Q50.34-4.5 50.34-4.67 50.34-4.85 50.55-5.1L50.55-5.1Q53-8.15 54.4-10.25L54.4-10.25Q54.4-10.3 55.5-12.35L55.5-12.35Q55-12.25 54.47-12.25 53.95-12.25 53.7-12.58 53.45-12.9 53.65-13.35L53.65-13.35Q54-14.15 56.3-14.25L56.3-14.25Q56.34-14.35 56.5-14.35L56.5-14.35 59-19Q59.2-19.4 59.45-19.83 59.7-20.25 59.82-20.48 59.95-20.7 60.09-20.95 60.25-21.2 60.34-21.3 60.45-21.4 60.55-21.5L60.55-21.5Q60.75-21.8 61.72-21.8 62.7-21.8 63.05-21.25L63.05-21.25Q63.2-21.05 63.2-20.58 63.2-20.1 62.84-19.53 62.5-18.95 62.09-18.7 61.7-18.45 61.55-18.15L61.55-18.15 59.15-13.95ZM67.89-13.85L67.89-13.85Q69.14-13.85 69.39-13.05L69.39-13.05Q69.49-12.6 69.27-12.18 69.04-11.75 68.94-11.5 68.84-11.25 68.79-11.1L68.79-11.1Q68.54-10.6 68.29-10.15L68.29-10.15Q65.44-4.45 65.29-2.9L65.29-2.9Q65.24-2.45 65.24-1.75 65.24-1.05 65.64-0.6L65.64-0.6Q66.34 0.2 67.64-0.5 68.94-1.2 71.27-3.3 73.59-5.4 75.04-7.4L75.04-7.4Q75.24-7.65 75.49-7.53 75.74-7.4 75.74-7.28 75.74-7.15 75.64-7L75.64-7Q74.89-5.65 72.94-3.55L72.94-3.55Q69.74-0.1 67.59 0.7L67.59 0.7Q66.34 1.15 65.49 1.15L65.49 1.15Q63.49 1.15 62.84-0.75L62.84-0.75Q62.74-1.1 62.74-1.6L62.74-1.6Q62.74-3.35 64.34-6.9L64.34-6.9Q64.09-6.35 62.39-4.4L62.39-4.4Q61.94-3.9 61.69-4.4L61.69-4.4Q61.64-4.5 61.64-4.67 61.64-4.85 61.84-5.1L61.84-5.1Q64.29-8.15 65.69-10.25L65.69-10.25Q65.59-10.5 65.79-10.9L65.79-10.9Q66.79-13.7 67.54-13.85L67.54-13.85Q67.69-13.85 67.89-13.85ZM71.84-20.5L71.84-20.5 71.44-18.9Q71.44-18.45 70.79-17.45 70.14-16.45 69.79-16.45L69.79-16.45Q67.64-16.45 67.64-17.5L67.64-17.5Q67.64-17.7 69.79-19.35L69.79-19.35 70.64-20Q71.44-20.7 71.64-20.7 71.84-20.7 71.84-20.5ZM91.74-25.5L91.74-25.5Q92.34-26.6 92.34-27.2L92.34-27.2Q92.34-28.25 91.49-28.25L91.49-28.25Q90.79-28.25 89.74-27.45L89.74-27.45Q85.74-24.35 81.99-17.65L81.99-17.65Q78.99-12.25 77.59-8.4L77.59-8.4Q81.04-10.75 85.31-16.05 89.59-21.35 91.74-25.5ZM76.84-6.4L76.84-6.4Q76.24-4.7 76.19-4.13 76.14-3.55 76.14-2.58 76.14-1.6 76.64-0.8L76.64-0.8Q77.49 0.55 79.49-0.6L79.49-0.6Q80.99-1.4 83.29-3.53 85.59-5.65 86.84-7.4L86.84-7.4Q86.94-7.55 87.14-7.55L87.14-7.55Q87.59-7.55 87.39-6.9L87.39-6.9Q86.64-5.55 84.62-3.45 82.59-1.35 80.94-0.13 79.29 1.1 77.64 1.1L77.64 1.1Q73.84 1.1 73.84-2.6L73.84-2.6Q73.84-2.75 73.84-2.9L73.84-2.9Q74.04-6.4 77.39-13.48 80.74-20.55 83.44-24.15L83.44-24.15 84.99-26.1Q85.54-26.75 86.59-27.7L86.59-27.7Q88.59-29.6 90.72-29.6 92.84-29.6 93.59-28.3L93.59-28.3Q93.84-27.85 93.84-27 93.84-26.15 93.09-24.6L93.09-24.6Q87.94-15.65 76.84-6.4Z" data-fill-palette-color="primary"></path></g></svg></g></svg></g></svg></g></svg></g></svg></g><defs></defs></svg><rect width="395.52" height="135.05560975609754" fill="none" stroke="none" visibility="hidden"></rect></g></svg></g></svg></div> </div>`;
});
const css$2 = {
  code: ".dot-container.svelte-1l3lcu7.svelte-1l3lcu7{position:fixed;display:block;top:0;left:0;z-index:1000;mix-blend-mode:exclusion;pointer-events:none;will-change:width, height}.dot-container.svelte-1l3lcu7 .dot.svelte-1l3lcu7{position:relative;width:0;height:0;border-radius:50%;background-color:white;transform:translate(-50%, -50%);transform:-webkit-translate(-50%, -50%);transform:-moz-translate(-50%, -50%);transition:width 0.5s ease, height 0.5s ease;-webkit-transition:width 0.5s ease, height 0.5s ease}.dot-container.active.svelte-1l3lcu7 .dot.svelte-1l3lcu7{width:4vh;height:4vh}.dot-container.disabled.svelte-1l3lcu7 .dot.svelte-1l3lcu7{width:0 !important;height:0 !important}.dot-container.hover.svelte-1l3lcu7 .dot.svelte-1l3lcu7{width:7.5vh;height:7.5vh}",
  map: null
};
const Cursor_dot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isMobile;
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => value);
  isWorkScroll.subscribe((val) => val);
  $$result.css.add(css$2);
  $$unsubscribe_isMobile();
  return ` ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(_) {
      return ` <div class="${[
        "dot-container active svelte-1l3lcu7",
        " disabled"
      ].join(" ").trim()}" data-svelte-h="svelte-1kqyv5l"><div class="dot svelte-1l3lcu7"></div></div> `;
    }();
  }(loadPagePromise)}`;
});
const css$1 = {
  code: ".page-cover.svelte-1995pyy.svelte-1995pyy{width:100vw;height:100vh;position:fixed;top:0;left:0;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:1000;background-color:#222224}.page-cover.svelte-1995pyy .loader-wrapper.svelte-1995pyy{position:relative;display:block;height:0.1rem;width:20rem}.page-cover.svelte-1995pyy .loader-wrapper .loader.svelte-1995pyy,.page-cover.svelte-1995pyy .loader-wrapper .loader-background.svelte-1995pyy{position:absolute;top:0;height:100%}.page-cover.svelte-1995pyy .loader-wrapper .loader-background.svelte-1995pyy{width:100%;background-color:rgba(255, 255, 255, 0.1)}.page-cover.svelte-1995pyy .loader-wrapper .loader.svelte-1995pyy{background-color:white;transition:width 0.8s ease}.page-cover.svelte-1995pyy .loader-wrapper .outro.svelte-1995pyy{transition:width 0.8s ease;right:0 !important;width:0}",
  map: null
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_imgPromises;
  $$unsubscribe_imgPromises = subscribe(imgPromises, (value) => value);
  let loader;
  let loadingPercentage = 0;
  $$result.css.add(css$1);
  $$unsubscribe_imgPromises();
  return `<div class="page-cover svelte-1995pyy"><div class="loader-wrapper svelte-1995pyy"><div class="${["loader-background svelte-1995pyy", ""].join(" ").trim()}"></div> <div class="${["loader svelte-1995pyy", ""].join(" ").trim()}" style="${"width: " + escape(loadingPercentage, true) + "%"}"${add_attribute("this", loader, 0)}></div></div> </div>`;
});
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");@import url("https://use.typekit.net/goc4cow.css");canvas{position:absolute;top:0;left:0;z-index:-1}body{background-color:#222224;overflow:hidden;color:white;margin:0;padding:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:"Questrial", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif}*{margin:0;padding:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}#nav-bar.svelte-1hhzgs1{position:fixed;top:10vh;z-index:100}.svelte-1hhzgs1::-webkit-scrollbar{width:8px;height:8px;background-color:transparent;transition:all 0.3s ease}.svelte-1hhzgs1::-webkit-scrollbar:hover{width:12px;height:12px}.svelte-1hhzgs1::-webkit-scrollbar-thumb{background-color:#FFFFFF;border-radius:10px;transition:background-color 0.3s ease}#scroll-frame.svelte-1hhzgs1{top:0;left:0;width:100%;height:100vh;position:relative;overflow:hidden auto}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_slickScrollInstance;
  let $$unsubscribe_imgPromises;
  $$unsubscribe_slickScrollInstance = subscribe(slickScrollInstance, (value) => value);
  $$unsubscribe_imgPromises = subscribe(imgPromises, (value) => value);
  let scrollContainer, navBar;
  $$result.css.add(css);
  $$unsubscribe_slickScrollInstance();
  $$unsubscribe_imgPromises();
  return ` ${validate_component(Cursor_dot, "CursorDot").$$render($$result, {}, {}, {})}  ${`${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}`} ${validate_component(Toaster, "Toaster").$$render($$result, {}, {}, {})} <div id="scroll-frame" class="svelte-1hhzgs1"${add_attribute("this", scrollContainer, 0)}> <div id="nav-bar" class="svelte-1hhzgs1"${add_attribute("this", navBar, 0)}>${validate_component(Nav, "NavComponent").$$render($$result, { scrollContainer }, {}, {})}</div>  ${validate_component(Home, "HomeSection").$$render($$result, {}, {}, {})} ${validate_component(Work, "WorkSection").$$render($$result, {}, {}, {})} ${validate_component(About, "AboutSection").$$render($$result, {}, {}, {})}    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};

import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.CoDCLcLh.js","_app/immutable/chunks/scheduler.BITu6n1W.js","_app/immutable/chunks/index.Dc_fS-S_.js","_app/immutable/chunks/entry.eRhOlaKv.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/stores.Bra80zKQ.js"];
export const stylesheets = ["_app/immutable/assets/2.CIUFa9hr.css"];
export const fonts = [];

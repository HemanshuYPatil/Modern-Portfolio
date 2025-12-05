

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Keg9qBPw.js","_app/immutable/chunks/scheduler.BITu6n1W.js","_app/immutable/chunks/index.Dc_fS-S_.js"];
export const stylesheets = [];
export const fonts = [];

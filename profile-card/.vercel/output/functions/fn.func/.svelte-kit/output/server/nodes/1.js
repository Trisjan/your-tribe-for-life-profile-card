

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4fcfe482.js","_app/immutable/chunks/scheduler.711bf361.js","_app/immutable/chunks/index.92c2b337.js","_app/immutable/chunks/stores.837691c8.js","_app/immutable/chunks/singletons.7725e21b.js"];
export const stylesheets = [];
export const fonts = [];

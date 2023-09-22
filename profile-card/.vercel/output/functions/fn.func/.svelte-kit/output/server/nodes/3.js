

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/slice-simulator/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.76c27dc9.js","_app/immutable/chunks/scheduler.711bf361.js","_app/immutable/chunks/index.92c2b337.js","_app/immutable/chunks/index.d3d65b7a.js"];
export const stylesheets = ["_app/immutable/assets/index.4dad6de6.css"];
export const fonts = [];

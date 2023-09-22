import * as server from '../entries/pages/_uid_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_uid_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[uid]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.63d3ab4e.js","_app/immutable/chunks/scheduler.711bf361.js","_app/immutable/chunks/index.92c2b337.js","_app/immutable/chunks/index.d3d65b7a.js"];
export const stylesheets = ["_app/immutable/assets/index.4dad6de6.css"];
export const fonts = [];

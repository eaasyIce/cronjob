/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
    async scheduled(event, env, ctx) {
        // console.log('hello world');
        ctx.waitUntil(callServer());
    },
};

const callServer = async () => {
    await fetch('https://flycat-backend.onrender.com/health')
        .then((response) => response.json())
        .then((data) => console.log(data));
};

import App from "./App.svelte";
import {serviceWorkerInstall} from "./service-worker-install";

serviceWorkerInstall()
    .catch(error => console.warn("Service worker failed:", error));

const app = new App({
    target: document.body,
    props: {},
});

export default app;

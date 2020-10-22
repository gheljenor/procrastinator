export async function serviceWorkerInstall() {
    if (!("serviceWorker" in navigator)) {
        throw new Error("No service worker support");
    }

    const registration = await navigator.serviceWorker.register("service-worker.js");
    console.log("ServiceWorker registration successful with scope: ", registration.scope);

    await registration.update();
    console.log("updated");
}



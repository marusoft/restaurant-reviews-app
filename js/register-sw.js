// This script checks if the browser supports service workers
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then( () => {
            console.log("Service Worker Registered");
        });
}

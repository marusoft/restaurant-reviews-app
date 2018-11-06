// This script checks if the browser supports service workers
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker
//         .register('/sw.js')
//         .then( () => {
//             console.log("Service Worker Registered");
//         });
// }


// This script checks if the browser supports service workers
  if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
          navigator.serviceWorker
          .register('/sw.js')
          .then((res) => {
              console.log(res);
              console.log("Service Worker has been Registered");
          })
          .catch((err) => {
              console.log(err);
              console.log("Couldn't register service worker...");
          })
      });
  }

  window.addEventListener('beforeinstallprompt', (e) => {
      // display prompt
      e.prompt();
  });
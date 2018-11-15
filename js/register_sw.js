"use strict";

window.addEventListener('load', function () {
  if (!navigator.serviceWorker) return;
  navigator.serviceWorker.register('/sw.js').then(() => {
    console.log("Service Worker Registered!");
  }).catch(() => {
    console.log("Registration failed");
  });
});


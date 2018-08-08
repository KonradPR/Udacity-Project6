document.addEventListener("DOMContentLoaded", event => {
if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("sw.js")
  }
})

// Simple navigation logic for the Cache‑Radar PWA.
// When a menu button is clicked, all containers are hidden
// and only the selected container is shown.
function navigateTo(containerId) {
  // Hide all containers
  const containers = document.querySelectorAll('.container');
  containers.forEach((c) => {
    c.classList.remove('active');
  });

  // Show the selected container
  const target = document.getElementById(containerId);
  if (target) {
    target.classList.add('active');
  }
}

// Register the service worker for offline capability
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(err => {
      console.error('Service Worker registration failed:', err);
    });
  });
}

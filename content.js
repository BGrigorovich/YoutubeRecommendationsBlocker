function modifyDOM() {
  if (window.location.pathname === '/') {
    let videos = document.querySelectorAll('ytd-rich-item-renderer.ytd-rich-grid-row');
    const VIDEOS_TO_SHOW = 3;

    for (let i = 0; i < videos.length; i++) {
      if (i >= VIDEOS_TO_SHOW) {
        videos[i].style.display = 'none';
      }
    }
  }
}

let observer = new MutationObserver(modifyDOM);

observer.observe(document.body, {childList: true, subtree: true});
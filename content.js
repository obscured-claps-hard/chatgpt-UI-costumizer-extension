chrome.storage.sync.get(['bgImage', 'fontColor', 'fontSize'], (settings) => {
  const body = document.body;

  if (settings.bgImage) {
    body.style.backgroundImage = `url(${settings.bgImage})`;
    body.style.backgroundSize = 'cover';
  }
  if (settings.fontColor) {
    body.style.color = settings.fontColor;
  }
  if (settings.fontSize) {
    body.style.fontSize = `${settings.fontSize}px`;
  }
});

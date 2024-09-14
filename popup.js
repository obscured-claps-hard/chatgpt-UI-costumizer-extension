document.getElementById('apply-settings').addEventListener('click', () => {
  const fileInput = document.getElementById('bg-image');
  const fontColor = document.getElementById('font-color').value;
  const fontSize = document.getElementById('font-size').value;

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
      const imageUrl = event.target.result;
      chrome.storage.sync.set({
        bgImage: imageUrl,
        fontColor,
        fontSize
      }, () => {
        console.log('Settings saved');
      });
    };

    reader.readAsDataURL(file);
  } else {
    chrome.storage.sync.set({
      fontColor,
      fontSize
    }, () => {
      console.log('Settings saved');
    });
  }
});

const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', function() {
  if (this.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function enableDarkMode() {
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled');
}

function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', 'disabled');
}

// Ellenőrizze, hogy a sötét mód be van-e kapcsolva a helyi tárolóban
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'enabled') {
  darkModeToggle.checked = true;
  enableDarkMode();
}

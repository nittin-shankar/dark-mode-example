// Looks at localStorage or OS setting to enable dark mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

function changeMode() {
  let darkModeEnabled = document.documentElement.classList.contains("dark")

  if (darkModeEnabled) {
    document.documentElement.classList.remove("dark")
    localStorage.theme = 'light' // Stores in localStorage that user chose light mode
  } else {
    document.documentElement.classList.add("dark")
    localStorage.theme = 'dark' // Stores in localStorage that user chose dark mode
  } 
}
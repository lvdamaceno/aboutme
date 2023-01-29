function toggleMode() {
  const html = document.documentElement
  // Change to light or dark mode
  html.classList.toggle('light')

  // Change the profile pic
  const img = document.querySelector("#profile img")
  if (html.classList.contains('light')) {
    img.setAttribute('src', '/assets/img/profile/profile_light.png')
  } else {
    img.setAttribute('src', '/assets/img/profile/profile_dark.png')
  }

}


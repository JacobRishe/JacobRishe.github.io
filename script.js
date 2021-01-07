let box = document.getElementById('skillsbutton')
  box.onclick = message
  function message () {
    box.style.background = '#333'
    box.style.color = '#D05A24'
    box.style.fontSize = 'xx-large'
    box.innerHTML = 'Yayy it works!'
  }

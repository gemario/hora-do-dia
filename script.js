function carregar() {
  let msg = document.getElementById('msg')
  let imagem = document.getElementById('imagem')
  let data = new Date()
  let hora = data.getHours()
  let minutos = data.getMinutes()

  msg.innerHTML = `Hora atual: <strong>${hora} Hr e ${minutos} Min</strong>`

  if (hora >= 0 && hora < 12) {
    imagem.src = 'fotodia.png'
    document.body.style.background =
      'linear-gradient(to right, #FF9C00, #FECF05)'
  } else if (hora >= 12 && hora <= 18) {
    imagem.src = 'fototarde.png'
    document.body.style.background =
      'linear-gradient(to right, #E9CC81, #384D85)'
  } else {
    imagem.src = 'fotonoite.png'
    document.body.style.background =
      'linear-gradient(to right, #0C1319, #343638)'
  }
}

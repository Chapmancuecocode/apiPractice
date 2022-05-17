const sounds = ['Feather Fall']

sounds.forEach((sound)=> {
  const btn = document.createElement('button')
  btn.classList.add('btn')

  btn.innerText = sound

  btn.addEventListener('click', ()=>{
    document.getElementById(sound).play()
  })

  document.getElementById('buttons').appendChild(btn)
})

// document.querySelector('button').addEventListener('click', sound)

// function sound(){
//   document.getElementById('buttons').play()
// }
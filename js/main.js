//THIS v IS A LOT CLEANER BUT IT MEANS I WILL HAVE TO CHANGE THE WAY I DID MY BUTTONS... WILL FIX LATER
//=================================================================
// const sounds = ['Feather_Fall']

// sounds.forEach((sound)=> {
//   const btn = document.createElement('button')
//   // btn.classList.add('btn')

//   btn.innerText = sound

//   btn.addEventListener('click', ()=>{
//     document.getElementById(sound).play()
//   })

//   document.getElementById('buttons').appendChild(btn)
// })
//===================================================================

//OW!
document.querySelector('#ouch').addEventListener('click', playOuch)

function playOuch(){
  document.getElementById('ow').play()
}
//============
//Healing Word
document.querySelector('#healingWord').addEventListener('click', playHealingWord)

function playHealingWord(){
  document.getElementById('healsAudio').play()
}
//============
//Feather Fall
document.querySelector('#featherFall').addEventListener('click', playfeatherFall)

function playfeatherFall(){
  document.getElementById('Feather_Fall').play()
}
//===============
//Tense/Heartbeat
document.querySelector('#tense').addEventListener('click', playTense)

function playTense(){
  document.getElementById('heartbeat').play()
}
//=========
//Got Item!
document.querySelector('#gotItem').addEventListener('click', playGotItem)

function playGotItem(){
  document.getElementById('zeldaSound').play()
}
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp')


function lampOn(){
  lamp.src = './img/ligada.PNG'
}

function lampOff(){
  lamp.src = './img/apagada.PNG'
}

function lampBroken(){
  lamp.src = './img/quebrada.PNG'
}


turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave',lampOff)
lamp.addEventListener('dblclick', lampBroken)



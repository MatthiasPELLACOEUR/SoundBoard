const keys = document.querySelectorAll('.key')

window.addEventListener("keydown", function(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return
    audio.currentTime = 0
    audio.play()
    key.classList.add('playing')
})

keys.forEach(key => key.addEventListener('transitionend', function (e){
    if(e.propertyName !== 'transform')
        return
        console.log(e.propertyName);
    this.classList.remove('playing')
    
}))
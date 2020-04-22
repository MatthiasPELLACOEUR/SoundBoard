/* DÉBUT DU DRUMPAD
 */
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

/* DÉBUT BEATBOX V1*/
function simulateKey(keyCode) {
    var evtName = "keydown";

	var event = document.createEvent("HTMLEvents");
	event.initEvent(evtName, true, false);
	event.keyCode = keyCode;

	document.dispatchEvent(event);
}


function ui(){
    return new Promise(
        function(resolve){
            setTimeout(function(){
               resolve(simulateKey(87))
            }, 2500)
        }
    )
}
function violent(){
    return new Promise(
        function(resolve){
            resolve(simulateKey(83))
        }
    )
}

function playBeat(){
    violent().then(function(result){
        return ui(result)
    })
}

let beat = document.querySelector('.beat')
beat.addEventListener("click", playBeat)

/* DÉBUT BEATBOX V2 */
/* function beatBox(){
    function simulateKey(keyCode) {
        var evtName = "keydown";
    
        var event = document.createEvent("HTMLEvents");
        event.initEvent(evtName, true, false);
        event.keyCode = keyCode;
    
        document.dispatchEvent(event);
    }

    
    function playBeat(keyCode) {
        return new Promise(
            function(resolve){
                resolve(simualteKey(83), simulateKey(87))
            }
        )
    }

    playBeat(simulateKey(83)).then(function(){
        setTimeout(function(){
            resolve(simulateKey(87))
        }, 2500)
    })
}

let beat = document.querySelector('.beat')
beat.addEventListener("click", beatBox) */
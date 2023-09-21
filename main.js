let title = document.querySelector('.title')
let keys = document.querySelectorAll('.key')

document.addEventListener('keyup' , function(event) {

    textTitle (event)

    let key = event.key.toUpperCase()

    let LisKey = document.getElementById(key)
    LisKey.classList.add('hit')
    LisKey.addEventListener('animationend' , function () {
        LisKey.classList.remove('hit')
    })
    
    console.log(event);
})

function textTitle (event) {

    keyValue = event.key

    if (event.key === 'Backspace') {
        title.innerHTML = title.innerHTML.slice(0,-1)
        return
    } else if (event.key === 'Enter') {
       title.innerHTML = title.innerHTML + '<br>'
       return
    } else if (event.key === 'Shift') {
         title.innerHTML += ''
            return
    } else if (event.key === 'CapsLock') {
        title.innerHTML += ''
            return
    }
    

    title.innerHTML += keyValue
}

keys.forEach(function (key) {
    key.addEventListener('click' , function (event) {
        eventTarget = event.target
        eventTarget.classList.add('hit')
        eventTarget.addEventListener('animationend' , function () {
            eventTarget.classList.remove('hit')
        })


        if (eventTarget.innerHTML === 'BACK') {
            title.innerHTML = title.innerHTML.slice(0,-1)
            return
        } else if (eventTarget.innerHTML === 'ENTER') {
           title.innerHTML = title.innerHTML + '<br>'
           return
        } else if (eventTarget.innerHTML === 'SPACE') {
            title.innerHTML += " "
            return
        } else if (eventTarget.innerHTML === 'SHIFT') {
            title.innerHTML += ''
            return
        } else if (eventTarget.innerHTML === 'CAPS') {
            title.innerHTML += ''
            return
        } else if (eventTarget.innerHTML === 'TAB') {
            title.innerHTML += ''
            return
        }


        title.innerHTML += eventTarget.innerHTML
    })
})
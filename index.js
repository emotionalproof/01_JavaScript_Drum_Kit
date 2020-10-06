document.addEventListener("DOMContentLoaded", () => {
   
    const keys = document.getElementsByTagName('kbd')
    const keyDivs = document.getElementsByTagName('div')
    let charBox
    const keydownHandler = () => {
        document.addEventListener('keydown', (e) => {
            let character = e.key
            charBox = [...keyDivs].filter(div => div.firstElementChild.textContent === character.toUpperCase())[0]
            charBox === undefined ? null : charBox.classList.add('playing')
            let dataKey = (charBox === undefined? null : charBox.dataset.key)
            let audioNode = document.querySelector(`audio[data-key='${dataKey}']`)
            let sound = (audioNode === null ? null : new Audio(audioNode.src))
            !!sound && sound.play()
            keyupHandler()
        })
    }

    //maybe try keycode

    const keyupHandler = () => {
        document.addEventListener('keyup', (e) => {
            charBox === undefined ? null : charBox.classList.remove('playing')
        })
    }
    

    keydownHandler()
    
})
// const encounter_background_img = new Image()
// encounter_background_img.src = './img/encounter.png'

// const encounter_background = new Sprite({
//     position: {x: 0, y: 0},
//     image: encounter_background_img
// })

let encounter_animation_id

function initiate_encounter(i) {
    
    // document.querySelector('#overlapping_div').style.displaay = 'block'
    if (i === 0) {alert('hello!')}
    if (i === 1) {alert('welcome to my mountain.')}
    if (i === 2) {alert('holidays can be a stressful time')}
    if (i === 3) {alert('some people don\'t celebrate')}
    if (i === 4) {alert('some aren\'t able to go home to family')}
    if (i === 5) {alert('some feel the immense pressure of hosting, or buying gifts, or getting work done before they are off on break')}
    if (i === 6) {alert('and with shorter days and colder weather...')}
    if (i === 7) {alert('even if you are with family...')}
    if (i === 8) {alert('you might be feeling HomeAlone.')}
    if (i === 9) {alert('come walk around. explore the outside. and explore within yourself.')}
    // gsap.to('#overlapping_div', {
    //     opacity: 1,
    //     onComplete: () => {
    //         cancelAnimationFrame(encounter_animation_id)
    //         animate()
    //         gsap.to('#overlapping_div', {
    //             opacity: 0
    //         })
    //     }
    // })
    cancelAnimationFrame(encounter_animation_id)
    animate()
}

function animate_encounter() {
    encounter_animation_id = window.requestAnimationFrame(animate_encounter)
    // encounter_background.draw()
}

animate()



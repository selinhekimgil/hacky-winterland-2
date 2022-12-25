const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

// create subarrays for collisions (map is 70 tiles wide)
const collision_map = []
for (let i = 0; i < collisions.length; i += 70) {
    collision_map.push(collisions.slice(i, 70 + i))
}

// similar process for coding in encounters
const encounter_map = []
for (let i = 0; i < encounters_data.length; i += 70) {
    encounter_map.push(encounters_data.slice(i, 70 + i))
}

const boundaries = []
const offset = {x: -495, y: -490}

collision_map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 948) {
            boundaries.push(new Boundary({
                position: {
                    x: j * Boundary.width + offset.x, 
                    y: i * Boundary.height + offset.y
                }
            }))
        }
    })
})

const encounters = []

encounter_map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 948) {
            encounters.push(new Boundary({
                position: {
                    x: j * Boundary.width + offset.x, 
                    y: i * Boundary.height + offset.y
                }
            }))
        }
    })
})

// background here 
const img = new Image()
img.src = './img/Hacky Winterland Game Map.png'

// foreground here 
// const foreground_img = new Image()
// img.src = './img/foreground.png'

// player here 
const player_down_img = new Image()
player_down_img.src = './img/character-down.png'

const player_up_img = new Image()
player_up_img.src = './img/character-up.png'

const player_left_img = new Image()
player_left_img.src = './img/character-left.png'

const player_right_img = new Image()
player_right_img.src = './img/character-right.png'

const player = new Sprite({
    position: {
        x: canvas.width / 2 - 192 / 4 / 2, // width of player iamge is 192
        y: canvas.height / 2 - 68 / 2 // height of player image is 68
    },
    image: player_down_img,
    frames: {
        max: 4
    },
    sprites: {
        up: player_up_img,
        left: player_left_img,
        right: player_right_img,
        down: player_down_img
    }
})

const background = new Sprite({
    position: {x: offset.x, y: offset.y}, 
    image: img
})

// const foreground = new Sprite({
//     position: {x: offset.x, y: offset.y}, 
//     image: foreground_img
// })

const keys = {
    w: {pressed: false}, 
    a: {pressed: false}, 
    s: {pressed: false}, 
    d: {pressed: false}
}

const movable_items = [background, ...boundaries, ...encounters]

function rect_collision({rect1, rect2}) {
    return (
        rect1.position.x + rect1.width >= rect2.position.x && 
        rect1.position.x <= rect2.position.x + rect2.width &&
        rect1.position.y <= rect2.position.y + rect2.height &&
        rect1.position.y + rect1.height >= rect2.position.y
    )
}

const dialogue = {
    initiated: false
}

e = 0

function animate() {
    const animation_id = window.requestAnimationFrame(animate)
    background.draw()
    boundaries.forEach(boundary => {
        boundary.draw()
        
    })
    encounters.forEach(encounter => {
        encounter.draw()
    })
    player.draw()
    // foreground.draw()

    let moving = true
    player.animate = false

    if (dialogue.initiated) {return}

    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
        for (let i = 0; i < encounters.length; i++) {
            const encounter = encounters[i]
            // const overlapping_area = 
            //     (Math.min(
            //         player.position.x + player.width, 
            //         encounter.position.x + encounter.width
            //     ) - Math.max(
            //         player.position.x, encounter.position.x
            //     )) * (Math.min(
            //         player.position.y + player.height, 
            //         encounter.position.y + encounter.height
            //     ) - Math.max(player.position.y, encounter.position.y))
            if (rect_collision({
                rect1: player, 
                rect2: encounter
            }) 
            // && overlapping_area > (player.width * player.height) / 2 
            && Math.random() < 0.00025
            ) 
            {
                console.log('encounter!!!!')
                
                // dialogue.initiated = true
                // // gsap.to('#overlapping_div', {
                // //     opacity: 1,
                // //     repeat: 3,
                // //     yoyo: true,
                // //     onComplete() {
                // //         gsap.to('#overlapping_div', {
                // //             opacity: 1,
                // //             onComplete() {
                // //                 initiate_encounter()
                // //                 animate_encounter()
                // //                 gsap.to('#overlapping_div', {opacity: 0})
                // //             }
                // //         })
                // //     }
                // // })

                // activate encounter, deactivate current animation loop
                window.cancelAnimationFrame(animation_id)
                initiate_encounter(e)
                animate_encounter()
                e += 1
                
                break
            }
        }
    }

    if (keys.w.pressed && last_key === 'w') {
        player.animate = true
        player.image = player.sprites.up

        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (rect_collision({
                rect1: player, 
                rect2: {
                    ...boundary, 
                    position: {
                        x: boundary.position.x,
                        y: boundary.position.y + 1.5
                    }
                }
            })) {
                moving = false
                break
            }
        }

        if (moving) {
            movable_items.forEach(movable => {movable.position.y += 1.5})
        }
    }
    else if (keys.a.pressed && last_key === 'a') {
        player.animate = true
        player.image = player.sprites.left

        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (rect_collision({
                rect1: player, 
                rect2: {
                    ...boundary, 
                    position: {
                        x: boundary.position.x + 1.5,
                        y: boundary.position.y
                    }
                }
            })) {
                moving = false
                break
            }
        }
        if (moving) {
            movable_items.forEach(movable => {movable.position.x += 1.5})
        }
    }
    else if (keys.s.pressed && last_key === 's') {
        player.animate = true
        player.image = player.sprites.down

        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (rect_collision({
                rect1: player, 
                rect2: {
                    ...boundary, 
                    position: {
                        x: boundary.position.x,
                        y: boundary.position.y - 1.5
                    }
                }
            })) {
                moving = false
                break
            }
        }
        if (moving) {
            movable_items.forEach(movable => {movable.position.y -= 1.5})
        }
    }
    else if (keys.d.pressed && last_key === 'd') {
        player.animate = true
        player.image = player.sprites.right

        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (rect_collision({
                rect1: player, 
                rect2: {
                    ...boundary, 
                    position: {
                        x: boundary.position.x - 1.5,
                        y: boundary.position.y
                    }
                }
            })) {
                moving = false
                break
            }
        }
        if (moving) {
            movable_items.forEach(movable => {movable.position.x -= 1.5})
        }
    }

}
// animate()

let last_key = ''
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            keys.w.pressed = true
            last_key = 'w'
            break
        case 'a':
            keys.a.pressed = true
            last_key = 'a'
            break
        case 's':
            keys.s.pressed = true
            last_key = 's'
            break
        case 'd':
            keys.d.pressed = true
            last_key = 'd'
            break
            
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'w':
            keys.w.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
            
    }
})

let clicked = false
addEventListener('click', () => {
  if (!clicked) {
    audio.Map.play()
    clicked = true
  }
})
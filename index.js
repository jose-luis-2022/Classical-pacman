const table = document.querySelector('.table')
const text = document.getElementById("text")
const score = document.getElementById("score")
const resetBtn = document.getElementById("reset-btn")
const num = 30
let totalSquares = []
let scorePlayer = 0
let reset = false




const design = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,
    1,0,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,0,1,
    1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,
    1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,1,
    4,4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,4,
    1,1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,0,1,
    1,1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,0,1,
    1,1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,1,
    1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,
    1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,
    1,0,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,0,1,
    1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,
    1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,
    1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,
    1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,
    1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

function createTable() {
    for (let i = 0; i < design.length; i++) {
        let grid = document.createElement('div')
        table.appendChild(grid)
        if (reset) table.removeChild(grid)
        totalSquares.push(grid)

        if(design[i]===0) {
            totalSquares[i].classList.add('pacman-dot')
        } else if(design[i]===1) {
            totalSquares[i].classList.add('walls')
        } else if(design[i]===2) {
            totalSquares[i].classList.add('ghost-lair')
        } else if(design[i]===3) {
            totalSquares[i].classList.add('peller')
        }
    }
}

createTable()



let pacmanCurrent = 421
totalSquares[pacmanCurrent].classList.add('pacman')

function controlSystem(j){
    totalSquares[pacmanCurrent].classList.remove('pacman')
    totalSquares[pacmanCurrent].classList.remove('pacman-1')
    totalSquares[pacmanCurrent].classList.remove('pacman-2')
    totalSquares[pacmanCurrent].classList.remove('pacman-3')
    
    switch(j.keyCode){
        case 40:
        totalSquares[pacmanCurrent].classList.remove('pacman')
        totalSquares[pacmanCurrent].classList.remove('pacman-1')
        totalSquares[pacmanCurrent].classList.remove('pacman-2')
        totalSquares[pacmanCurrent].classList.remove('pacman-3')
        if (!totalSquares[pacmanCurrent + num].classList.contains('ghost-lair') && !totalSquares[pacmanCurrent + num].classList.contains('walls') && pacmanCurrent + num < num * num) 
            {pacmanCurrent += num}
        totalSquares[pacmanCurrent].classList.add('pacman-1')
        break
        case 38:
        totalSquares[pacmanCurrent].classList.remove('pacman')
        totalSquares[pacmanCurrent].classList.remove('pacman-1')
        totalSquares[pacmanCurrent].classList.remove('pacman-2')
        totalSquares[pacmanCurrent].classList.remove('pacman-3')
        if (!totalSquares[pacmanCurrent - num].classList.contains('ghost-lair') && !totalSquares[pacmanCurrent - num].classList.contains('walls') && pacmanCurrent - num >=0) 
            {pacmanCurrent -= num}
        totalSquares[pacmanCurrent].classList.add('pacman-3')
        break
        case 37: 
        totalSquares[pacmanCurrent].classList.remove('pacman')
        totalSquares[pacmanCurrent].classList.remove('pacman-1')
        totalSquares[pacmanCurrent].classList.remove('pacman-2')
        totalSquares[pacmanCurrent].classList.remove('pacman-3')
        if(!totalSquares[pacmanCurrent - 1].classList.contains('ghost-lair') && !totalSquares[pacmanCurrent - 1].classList.contains('walls') && pacmanCurrent % num !==0) 
            {pacmanCurrent -= 1}
            if (pacmanCurrent % num === 0) {
                pacmanCurrent += num - 1
            }
        totalSquares[pacmanCurrent].classList.add('pacman-2')
        break
        case 39:
        totalSquares[pacmanCurrent].classList.remove('pacman')
        totalSquares[pacmanCurrent].classList.remove('pacman-1')
        totalSquares[pacmanCurrent].classList.remove('pacman-2')
        totalSquares[pacmanCurrent].classList.remove('pacman-3')
        if(!totalSquares[pacmanCurrent + 1].classList.contains('ghost-lair') && !totalSquares[pacmanCurrent + 1].classList.contains('walls') && pacmanCurrent % num < num - 1) 
            {pacmanCurrent += 1}
            if (pacmanCurrent % num === num-1) {
                pacmanCurrent -= num - 1
            }
        totalSquares[pacmanCurrent].classList.add('pacman')
        break
    }
    
    pacmanEaten()
    pacmanPeller()
    gameOver()
}

document.addEventListener("keyup", controlSystem)


function pacmanEaten() {
    if (totalSquares[pacmanCurrent].classList.contains('pacman-dot')) {
        totalSquares[pacmanCurrent].classList.remove('pacman-dot')
        scorePlayer++
        score.textContent = scorePlayer
    }
}


function pacmanPeller() {
    if (totalSquares[pacmanCurrent].classList.contains('peller')) {
        totalSquares[pacmanCurrent].classList.remove('peller')
        scorePlayer += 100
        score.textContent = scorePlayer
        ghostsPacman.forEach(ghosts => ghosts.isScared = true)
        setTimeout(unScareGhosts, 10000)
    }
}
  

    function unScareGhosts() {
        ghostsPacman.forEach(ghosts => ghosts.isScared = false)
    }
    
    
    class Ghosts {
        constructor(className, startIndex, speed) {
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            this.currentIndex = startIndex
            this.isScared = false
            this.timerId = NaN
        }
    }
    
    const ghostsPacman = [
        new Ghosts('blinky', 402, 300),
        new Ghosts('pinky', 407, 450),
        new Ghosts('inky', 467, 350),
        new Ghosts('clyde', 462, 600)
    ]
    
    ghostsPacman.forEach(ghosts => 
    {   totalSquares[ghosts.currentIndex].classList.add(ghosts.className) 
        totalSquares[ghosts.currentIndex].classList.add('ghosts')
    })
    

    ghostsPacman.forEach(ghosts => movementGhosts(ghosts))
    
    function movementGhosts(ghosts) {
        if (reset) {
            ghosts.currentIndex = ghosts.startIndex
        }
        const directions = [-1, +1, -num, +num]
        let direction = directions[Math.floor(Math.random() * directions.length)]
        
        ghosts.timerId = setInterval(function() {
            if (
                !totalSquares[ghosts.currentIndex + direction].classList.contains('walls') && !totalSquares[ghosts.currentIndex + direction].classList.contains('ghosts')
            ) {
                
            totalSquares[ghosts.currentIndex].classList.remove(ghosts.className)
            totalSquares[ghosts.currentIndex].classList.remove('ghosts', 'ghostScared')

            ghosts.currentIndex += direction

            totalSquares[ghosts.currentIndex].classList.add(ghosts.className)  
            totalSquares[ghosts.currentIndex].classList.add('ghosts')  
            } else direction = directions[Math.floor(Math.random() * directions.length)]
    
            if (ghosts.isScared) {
                totalSquares[ghosts.currentIndex].classList.add('ghostScared')
            }
            
            if (ghosts.isScared && totalSquares[ghosts.currentIndex].classList.contains('pacman') || ghosts.isScared && totalSquares[ghosts.currentIndex].classList.contains('pacman-1') || ghosts.isScared && totalSquares[ghosts.currentIndex].classList.contains('pacman-2') || ghosts.isScared && totalSquares[ghosts.currentIndex].classList.contains('pacman-3'))
            {

                totalSquares[ghosts.currentIndex].classList.remove(ghosts.className, 'ghosts', 'ghostScared')
                
                ghosts.currentIndex = ghosts.startIndex

                scorePlayer += 200

                score.textContent = scorePlayer

                totalSquares[ghosts.currentIndex].classList.add(ghosts.className, 'ghosts')
        }
        gameOver()
        
        }, ghosts.speed)
    }

    function gameOver() { 
        if (
            totalSquares[pacmanCurrent].classList.contains('ghosts') && 
            !totalSquares[pacmanCurrent].classList.contains('ghostScared') 
         ) {
        ghostsPacman.forEach(ghosts => clearInterval(ghosts.timerId))

        document.removeEventListener("keyup", controlSystem)
    
        score.textContent = "YOU LOSE THE GAME!"

        resetBtn.disabled = false

    }
    }

    function createGhost() {
    
        ghostsPacman.forEach(ghosts => 
            { totalSquares[ghosts.currentIndex].classList.remove(ghosts.className) 
                totalSquares[ghosts.currentIndex].classList.remove('ghosts')
            })
        ghostsPacman.forEach(ghosts => movementGhosts(ghosts))
        ghostsPacman.forEach(ghosts => 
            {totalSquares[ghosts.currentIndex].classList.add(ghosts.className) 
                    totalSquares[ghosts.currentIndex].classList.add('ghosts')
            })
    }

    resetBtn.addEventListener("click", function(){
        reset = true
        totalSquares[pacmanCurrent].classList.remove('pacman')
        totalSquares[pacmanCurrent].classList.remove('pacman-1')
        totalSquares[pacmanCurrent].classList.remove('pacman-2')
        totalSquares[pacmanCurrent].classList.remove('pacman-3')
        totalSquares[pacmanCurrent].classList.remove('pacman-dot')
        totalSquares[pacmanCurrent].classList.remove('walls')
        totalSquares[pacmanCurrent].classList.remove('ghost-lair')
        totalSquares[pacmanCurrent].classList.remove('peller')
        pacmanCurrent = 421
        totalSquares[pacmanCurrent].classList.add('pacman')
        document.addEventListener("keyup",controlSystem)
        scorePlayer = ""
        score.textContent = scorePlayer
        createGhost()
        pacmanEaten()
        pacmanPeller()
        createTable()
        resetBtn.disabled = true
        reset = false
    })






    


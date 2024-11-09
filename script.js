const keys = document.querySelectorAll('.key');

const keyPressed = () => {
    event.target.style.transform = 'translateY(0.2rem)';
    event.target.style.boxShadow = 'inset 0 0.2rem 0.5rem rgba(0, 0, 0, 0.3)';
}

const keyReleased = () => {
    event.target.style.transform = '';
    event.target.style.boxShadow = '';
}

keys.forEach(key => key.addEventListener('mousedown', keyPressed));

keys.forEach(key => key.addEventListener('mouseout', keyReleased))
keys.forEach(key => key.addEventListener('mouseup', keyReleased))

const keyC = new Audio("/sounds/c4.mp3");

console.log(keys)

const keysArray = Array.from(keys);


// Sound scripts

const keysObjectArray = [
    { id: 'c4', sound: 'sounds/c4.mp3' },
    { id: 'ciss4', sound: 'sounds/ciss4.mp3' },
    { id: 'd4', sound: 'sounds/d4.mp3' },
    { id: 'diss4', sound: 'sounds/diss4.mp3' },
    { id: 'e4', sound: 'sounds/e4.mp3' },
    { id: 'f4', sound: 'sounds/f4.mp3' },
    { id: 'fiss4', sound: 'sounds/fiss4.mp3' },
    { id: 'g4', sound: 'sounds/g4.mp3' },
    { id: 'giss4', sound: 'sounds/giss4.mp3' },
    { id: 'a4', sound: 'sounds/a4.mp3' },
    { id: 'aiss4', sound: 'sounds/aiss4.mp3' },
    { id: 'b4', sound: 'sounds/b4.mp3' },
    { id: 'c5', sound: 'sounds/c5.mp3' },
    { id: 'ciss5', sound: 'sounds/ciss5.mp3' },
    { id: 'd5', sound: 'sounds/d5.mp3' },
    { id: 'diss5', sound: 'sounds/diss5.mp3' },
    { id: 'e5', sound: 'sounds/e5.mp3' }
]

keysObjectArray.forEach(key => {
    const audio = new Audio(key.sound);

    const keyElement = document.getElementById(key.id);

    if (keyElement) {
        keyElement.addEventListener('mousedown', () => {
            audio.currentTime = 0;
            audio.play();


        })
    }

    
})
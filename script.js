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
import { animate } from './helpers.js'

const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const modalBox = modal.querySelector('.popup-content')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            animate({
                duration: 300,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    modal.style.display = 'block'
                    modalBox.style.top = (25 * progress) + "%"
                    modalBox.style.opacity = progress
                }
            });
        })
    })

    modal.addEventListener('click', (e) => {
        if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
        }
    })
}

export default modal
const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const modalBox = modal.querySelector('.popup-content')

    const isMobile = window.innerWidth < 768

    const animateOpen = () => {
        modal.style.display = 'block'

        if (isMobile) {
            modalBox.style.opacity = '1'
            modalBox.style.transform = 'translateY(0)'
            return
        }

        let opacity = 0
        let position = -50

        modalBox.style.opacity = opacity
        modalBox.style.transform = `translateY(${position}px)`

        const animation = setInterval(() => {
            opacity += 0.05
            position += 3

            modalBox.style.opacity = opacity
            modalBox.style.transform = `translateY(${position}px)`

            if (opacity >= 1) {
                clearInterval(animation)
                modalBox.style.transform = 'translateY(0)'
            }
        }, 10)
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', animateOpen)
    }) 

    modal.addEventListener('click', (e) => {
        if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
        }
    })
}

export default modal
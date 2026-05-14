const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    menuBtn.addEventListener('click', handleMenu)

    menu.addEventListener('click', (e) => {
        const target = e.target

        if (target.closest('.close-btn')) {
            handleMenu()
        }

        if (target.closest('ul > li > a')) {
            handleMenu()
        }
    })
}

export default menu
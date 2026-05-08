const smoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]')

    links.forEach(link => {
        link.addEventListener('click', (element) => {
            element.preventDefault()

            const targetId = link.getAttribute('href')
            const target = document.querySelector(targetId)

            if (!target) return

            const startPosition = window.pageYOffset
            const targetPosition = target.getBoundingClientRect().top
            const distance = targetPosition
            const duration = 800

            let start = null

            const ease = (t) => {
                return t < 0.5
                    ? 2 * t * t
                    : -1 + (4 - 2 * t) * t
            }

            const animation = (currentTime) => {
                if (!start) start = currentTime

                const timeElapsed = currentTime - start
                const progress = Math.min(timeElapsed / duration, 1)

                const run = distance * ease(progress)

                window.scrollTo(0, startPosition + run)

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation)
                }
            }

            requestAnimationFrame(animation)
        })
    })
}

export default smoothScroll
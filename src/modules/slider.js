const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content')
    const slides = document.querySelectorAll('.portfolio-item')
    const dotsContainer = document.querySelector('.portfolio-dots')

    let currentSlide = 0
    let interval
    let dots

    const timeInterval = 2000

    const createDots = () => {
        slides.forEach((_, index) => {
            const dot = document.createElement('li')
            dot.classList.add('dot')

            if (index === 0) {
                dot.classList.add('dot-active')
            }

            dotsContainer.append(dot)
        })
    }

    const removeClasses = (index) => {
        slides[index].classList.remove('portfolio-item-active')
        dots[index].classList.remove('dot-active')
    }

    const addClasses = (index) => {
        slides[index].classList.add('portfolio-item-active')
        dots[index].classList.add('dot-active')
    }

    const changeSlide = () => {
        removeClasses(currentSlide)

        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        addClasses(currentSlide)
    }

    const startSlide = (timer = timeInterval) => {
        clearInterval(interval)
        interval = setInterval(changeSlide, timer)
    }

    const stopSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()

        const dot = e.target.closest('.dot')
        const next = e.target.closest('#arrow-right')
        const prev = e.target.closest('#arrow-left')

        if (!dot && !next && !prev) return

        removeClasses(currentSlide)

        if (next) {
            currentSlide++
        } else if (prev) {
            currentSlide--
        } else if (dot) {
            dots.forEach((item, index) => {
                if (item === dot) {
                    currentSlide = index
                }
            })
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

        addClasses(currentSlide)
    })

    sliderBlock.addEventListener('mouseenter', stopSlide)
    sliderBlock.addEventListener('mouseleave', () => startSlide(timeInterval))

    createDots()
    dots = document.querySelectorAll('.dot')

    startSlide(timeInterval)
}

export default slider
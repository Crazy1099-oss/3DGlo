const timer = (deadLine) => {
    const timerDays = document.getElementById('timer-days')
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')

    const numberZero = (num) => String(num).padStart(2, '0')

    const getTimerRemaining = () => {
        let dateStop = new Date(deadLine).getTime()
        let dateNow = new Date().getTime()

        let timeRemaining = (dateStop - dateNow) / 1000

        if (timeRemaining <= 0) {
            return {
                timeRemaining: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            }
        }

        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor((timeRemaining / 60 / 60) % 24)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        return { timeRemaining, days, hours, minutes, seconds }
    }

    const updateClock = () => {
        const getTime = getTimerRemaining()

        timerDays.textContent = numberZero(getTime.days)
        timerHours.textContent = numberZero(getTime.hours)
        timerMinutes.textContent = numberZero(getTime.minutes)
        timerSeconds.textContent = numberZero(getTime.seconds)

        // если нужно показывать 00:00:00 — можно игнорировать дни
        if (getTime.timeRemaining <= 0) {
            clearInterval(interval)
        }
    }

    updateClock()

    const interval = setInterval(updateClock, 1000)
}

export default timer
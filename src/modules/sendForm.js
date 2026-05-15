const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка'
    const successText = 'Спасибо! Наш менеджер с вами свяжется'


    const validate = (list) => {
        let success = true

        list.forEach(input => {
            const name = input.name
            const value = input.value.trim()

            switch (name) {
                case 'user_name':
                    if (!/^[А-Яа-яЁё\s]+$/.test(value)) {
                        success = false
                        input.style.border = '1px solid red'
                    } else {
                        input.style.border = ''
                    }
                    break

                case 'user_phone':
                    if (!/^[0-9+\-\s()]+$/.test(value)) {
                        success = false
                        input.style.border = '1px solid red'
                    } else {
                        input.style.border = ''
                    }
                    break

                case 'user_message':
                    if (!/^[А-Яа-яЁё0-9\s.,!?;:()-]+$/.test(value)) {
                        success = false
                        input.style.border = '1px solid red'
                    } else {
                        input.style.border = ''
                    }
                    break
            }
        })

        return success
    }

    const sendDate = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formData = new FormData(form)
        const formBody = {}
        const formElements = form.querySelectorAll('input')

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'inpit') {
                formBody[elem.id] = element.value
            }
        })

        console.log('submit')

        if (validate(formElements)) {
            sendDate({ formBody })
                .then(data => {
                    statusBlock.textContent = successText

                    formElements.forEach(input => {
                        input.value = ""
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            alert('Данные не валидны!!!')
        }
    }

    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста!!!')
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault()

            submitForm()
        })
    } catch (error) {
        console.log(error.message)
    }
}

export default sendForm
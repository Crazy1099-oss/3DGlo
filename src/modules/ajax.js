const ajax = () => {

    const btnForm = document.getElementById('form1')

    btnForm.addEventListener('submit', (e) => {
        e.preventDefault()

        getData('./data.json')
            .then((dataFromFile) => {
                console.log('Получено из JSON:', dataFromFile)

                return sendData(
                    'https://jsonplaceholder.typicode.com/posts',
                    dataFromFile
                )
            })
            .then((result) => {
                console.log('Ответ сервера:', result)
            })
            .catch((error) => {
                console.error('Ошибка в цепочке:', error)
            })
    })

    const getData = (url) => {
        return fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`GET error: ${response.status}`)
                }
                return response.json()
            })
            .catch((error) => {
                console.error('Ошибка при GET запросе:', error)
                throw error
            })
    }

    const sendData = (url, data) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`POST error: ${response.status}`)
                }
                return response.json()
            })
            .catch((error) => {
                console.error('Ошибка при POST запросе:', error)
                throw error
            })
    }
}

export default ajax
// Функция валидации одного набора полей
const validateFields = (name, email, phone) => {
    const nameRegex = /^[А-Яа-яЁё\- ]+$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^[\d$$\-\+ ]+$/

    if (!nameRegex.test(name)) {
        alert('В имени разрешены только кириллица, дефис и пробел.');
        return false
    }
    if (!emailRegex.test(email)) {
        alert('Пожалуйста, введите корректный e-mail.');
        return false
    }
    if (!phoneRegex.test(phone)) {
        alert('В номере телефона разрешены только цифры, скобки, дефис и пробел.')
        return false
    }
    return true
}

const form = () => {
    document.getElementById('form1').addEventListener('submit', function (element) {
        element.preventDefault();

        const name1 = document.getElementById('form1-name').value;
        const email1 = document.getElementById('form1-email').value;
        const phone1 = document.getElementById('form1-phone').value;

        if (!validateFields(name1, email1, phone1)) return;

        alert('Форма успешно отправлена!');
    })

    document.getElementById('form2').addEventListener('submit', function (element) {
        element.preventDefault();

        const name2 = document.getElementById('form2-name').value;
        const email2 = document.getElementById('form2-email').value;
        const phone2 = document.getElementById('form2-phone').value;

        if (!validateFields(name2, email2, phone2)) return;

        alert('Форма успешно отправлена!');
    })

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.calc-item').forEach(input => {
            input.addEventListener('input', function () {
                this.value = this.value.replace(/\D/g, '');
            });
        });
    });
};

export default form
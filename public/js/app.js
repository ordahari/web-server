const weatherForm = document.querySelector('form')
const searchInput = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTow = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    messageOne.textContent = 'Loading...'
    messageTow.textContent = ''
    const url = '/weather?address=';

    fetch(url + searchInput.value).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            }
            else {
                messageOne.textContent = data.forecast;
                messageTow.textContent = data.location;
            }
        })

    })
})
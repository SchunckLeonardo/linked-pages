const toggleButton = document.querySelector('#switch button')
toggleButton.addEventListener('click', e => {
    const html = document.querySelector('html')
    if (html.classList.contains('light')) {
        html.classList.toggle('light')
    } else {
        html.classList.toggle('light')
    }
})
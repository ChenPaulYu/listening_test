$(document).ready(function () {

    urls = [
        'https://www.surveycake.com/s/WbXkZ', 
        'https://www.surveycake.com/s/YLmOV', 
        'https://www.surveycake.com/s/9vQPz',
        'https://www.surveycake.com/s/OK4pZ', 
        'https://www.surveycake.com/s/bWxVK', 
        'https://www.surveycake.com/s/4lba0'
    ]

    index = Math.floor(Math.random() * urls.length)
    window.location.href = urls[index]

})
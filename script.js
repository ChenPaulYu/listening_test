$(document).ready(function () {

    urls  = [
        'https://www.surveycake.com/s/69NLy',
        'https://www.surveycake.com/s/ZmNdq',
        'https://www.surveycake.com/s/M7kNB',
        'https://www.surveycake.com/s/loBX3',
        'https://www.surveycake.com/s/6WXOW', 
        'https://www.surveycake.com/s/nwPWa',
        'https://www.surveycake.com/s/amPoN',
        'https://www.surveycake.com/s/BQRXg',
    ]
    
    

    index = Math.floor(Math.random() * urls.length)

    $('#web').attr('src', urls[index])

})

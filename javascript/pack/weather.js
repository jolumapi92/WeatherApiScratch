var requestOptions = {
    method: 'GET'
  };

let bubble1 = document.querySelector('.bubble-1')
let bubble2 = document.querySelector('.bubble-2')
let bubble3 = document.querySelector('.bubble-3')

let bubble4 = document.querySelector('.bubble-4')
let bubble5 = document.querySelector('.bubble-5')
let bubble6 = document.querySelector('.bubble-6')

let bubble7 = document.querySelector('.bubble-7')
let bubble8 = document.querySelector('.bubble-8')
let bubble9 = document.querySelector('.bubble-9')

function changingColor(element) {
    if(element.innerText >= 24){
        element.style.backgroundColor = "#FD9A86"
    } else if(element.innerText <= 23) {
        element.style.backgroundColor = "#9CE1FC"
    }
}

  fetch("https://api.openweathermap.org/data/2.5/weather?q=Cuernavaca&units=metric&appid=430368649130258e7c6b83e8a7239432", requestOptions)
        .then(response =>
        response.text())
        .then(result => {
        console.log(JSON.parse(result), 'result')
        datosClima = JSON.parse(result)

        bubble1.innerText = datosClima.name
        bubble2.innerText = datosClima.main.temp
        bubble3.innerText = datosClima.weather[0].description

        
        changingColor(bubble2);
    })
    
    fetch("https://api.openweathermap.org/data/2.5/weather?q=San Francisco&units=metric&appid=430368649130258e7c6b83e8a7239432", requestOptions)
        .then(response =>
        response.text())
        .then(result => {
        console.log(JSON.parse(result), 'result')
        datosClima = JSON.parse(result)

        bubble4.innerText = datosClima.name
        bubble5.innerText = datosClima.main.temp
        bubble6.innerText = datosClima.weather[0].description

        changingColor(bubble5);
    })

    fetch("https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=430368649130258e7c6b83e8a7239432", requestOptions)
        .then(response =>
        response.text())
        .then(result => {
        console.log(JSON.parse(result), 'result')
        datosClima = JSON.parse(result)

        bubble7.innerText = datosClima.name
        bubble8.innerText = datosClima.main.temp
        bubble9.innerText = datosClima.weather[0].description

        changingColor(bubble8);
    })

    .catch(error => console.log('error', error));


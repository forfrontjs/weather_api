let btn = document.querySelector('button')
let inp = document.querySelector('input')
let weather = document.querySelector('.weather')

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&lang=en&appid=fc9e924c332f791cefe51a850b7c7cad&units=metric`)
    .then((res)=>res.json())
    .then((data)=>{
        if(data.cod >= 400 && data.cod < 500){
            return alert('Введите название города правильно')
        }
        weather.innerHTML = `
        <div class="weather_top">
        <div class="weather_left">
            <h3>Current</h3>
            <h3 class="city">${data.name}</h3>
        </div>
        <h2 class="temp">${data.main.temp} °C</h2>
    </div>
    <h1 class="desc">${data.weather[0].description.slice(0,1).toUpperCase() + data.weather[0].description.slice(1)}</h1>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    <div class="weather_bottom">
        <div class="weather_card">
            <p>High:</p>
            <p>Low:</p>
        </div>
        <div class="weather_card">
            <p>Wind 14</p>
            <p>mph E</p>
        </div>
        <div class="weather_card">
            <p>Cloud Cover</p>
            <p>5%</p>
        </div>
        <div class="weather_card">
            <p>Humidity</p>
            <p>54%</p>
        </div>
    </div>
        `
    })
    inp.value = ''
    
})

let url = `https://api.openweathermap.org/data/2.5/weather`
let api_key = `d2b53da8b037eef6381b632adc9aee66`
let ciudad = `boogota`
let diferenciakev =273.15



document.getElementById(`botonBusqueda`).addEventListener(`click`, () => {
    const ciudad = document.getElementById(`ciudadEntrada`).value
    if (ciudad) {
        fetchdatosclima(ciudad)    
    }
})
function fetchdatosclima(ciudad){
fetch(`${url}?q=${ciudad}&appid=${api_key}`)
.then(data => data.json())
.then(data => mostrardatosclima(response))
}

function mostrardatosclima (data){
    const divdatosclima = document.getElementById(`datosClima`)
    divdatosclima.innerHTML=``

    const ciudadNombre =data.name
    const ciudadTemperatura =data.temp
    const ciudadDescripcion =data.weather[0]

    const ciudadTitulo = document.createElement(`h2`)
    ciudadTitulo.textContent =ciudadNombre

    const temperaturaTitulo = document.createElement(`p`)
    temperaturaTitulo.textContent = ` La temperatura es ${ciudadTemperatura-diferenciakev}°C`

    const descripInf = document.createElement(`p`)
    descripInf.textContent = `la descripcon meteorologica es ${ciudadDescripcion}`

    divdatosclima.appendChild(ciudadNombre)
    divdatosclima.appendChild(ciudadTemperatura)
    divdatosclima.appendChild(ciudadDescripcion)
}
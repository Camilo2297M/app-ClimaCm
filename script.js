
//La url de donde traemos la informacion donde esta la informacion de la api
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
//api key que generalmos en openweathermap
let api_key = '605507acf87117e111e54a3ab5238541'
//al le decontamos este valor al los grados porque no dan exactos, realizamos la conversion con grado
let difKelvin = 273.15

//agregamos al boton un evento de escucha,
document.getElementById('botonBusqueda').addEventListener('click', () => {
    //creamos una variable donde se va almacenar los datos obtenidos en el imput
    const ciudad = document.getElementById('ciudadEntrada').value
    //se crea un condicional que si hay algo en ciudad ejecute el siguiente codigo:
    if (ciudad) {
        //se crea la funcion fetchDatosClima y le damos como parametro ciudad 
        fetchDatosClima(ciudad)
        //si no se obtuvo nada en ciudad mande el siguiete mensaje
    } else {
        document.getElementById(`lalo`).innerHTML = `No hay informacion en el recuadro`
    }
})

//se crea la funcion que se va a ejecutar cuando al escuchar el click. se le manda el parametro de ciudad
function fetchDatosClima(ciudad) {
    //con fetch vamon a invocar a la api, solo que se puso dinamica
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    // then nos traen la respuestad de la consulta
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data) {
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - difKelvin)}ºC`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)
}
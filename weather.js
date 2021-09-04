// document.getElementById('error-message').style.display = 'none';
function searchUpdate(){
    const inputField = document.getElementById('inputField');
    const inputValue = inputField.value;
    inputField.value = '';
    document.getElementById('weather-details').textContent = '';
    document.getElementById('error-not-found').style.display = 'none';
    document.getElementById('error-message').style.display = 'none';
    if(inputValue <= 0){
        document.getElementById('error-message').style.display = 'block';
    }
    else{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=b93f58788c6ca86ebb17344d0608f44f&units=metric`
        fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
        .catch(error => displaySearchNotFound(error));
    }
}

function displaySearchNotFound(error){
    document.getElementById('error-not-found').style.display = 'block';
    // document.getElementById('error-not-found').innerText = error;
}

function displayWeather(weather){
    console.log(weather);
    const weatherDetails = document.getElementById('weather-details');
    weatherDetails.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="weather-status text-white text-center">
        <img src="https://openweathermap.org/img/w/${weather.weather[0].icon}.png" alt="">
        <h1>${weather.sys.country}</h1>
        <h1>${weather.name}</h1>
        <h3><span>${weather.main.temp}</span>&deg;C</h3>
        <h3>${weather.weather[0].main}</h3>
    </div>`;
    weatherDetails.appendChild(div);
}



const API_KEY = "c0912ff66a6e4f46aa1aaa61dbb8089f";


function onGeoSuccess(position){
    const lat = position.coords.latitude; 
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`    // 

    fetch(url).then(response => response.json() ).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}


function onGeoError(){
    alert("Can't find you.")
}




navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)      // 좌표 주는 코드 





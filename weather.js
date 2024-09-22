const apiKey="1766f971ff372cd732c9191173a83109"
const city=document.querySelector("#city")
const weather=document.querySelector("#weather")

function geo(position){ //위치확인
    const posi=position.coords
    const lat=posi.latitude
    const lon=posi.longitude
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    fetch(url).then(response=>response.json()).then(data=>{
        console.log(data.name,data.weather[0].main)
        city.innerText=data.name;
        weather.innerText=data.weather[0].main;
        
    });

}

function noGeo(){
    alert("No Geolocation, No Weather!")
}

navigator.geolocation.getCurrentPosition(geo,noGeo)
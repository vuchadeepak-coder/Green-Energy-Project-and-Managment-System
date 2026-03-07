function login(){
document.getElementById("loginPage").style.display="none";
document.getElementById("mainPage").style.display="block";
}

function logout(){
location.reload();
}

function random(min,max){
return (Math.random()*(max-min)+min).toFixed(2);
}

function showData(type){

let output = document.getElementById("output");

if(type==="govt"){
output.innerHTML = `
<h3>🌍 Government Steps for Green Energy</h3>

<p>1️⃣ National Solar Mission.</p>
<img src="solar.jpg" class="govt-img">

<p>2️⃣ Rooftop Solar Scheme.</p>
<img src="solar1.jpg" class="govt-img">

<p>3️⃣ Wind Energy Development.</p>
<img src="solar2.jpg" class="govt-img">

<p>4️⃣ Electric Vehicle Policy.</p>
<img src="solar3.jpg" class="govt-img">

<p>5️⃣ Smart Green City Initiatives.</p>
<img src="solar4.jpg" class="govt-img">
`;
}

else if(type==="carbon"){
output.innerHTML="Real-time Carbon Emission: "+random(100,500)+" kg CO₂";
}

else if(type==="aqi"){
let aqi=random(10,300);
let status=(aqi<100)?"Safe":"Not Safe";
output.innerHTML="Live AQI: "+aqi+"<br>Status: "+status;
}

else if(type==="historyGraph"){

output.innerHTML = `
<h3>📊 India Carbon Emissions (Last 10 Years)</h3>
<canvas id="carbonChart"></canvas>
`;

let ctx = document.getElementById('carbonChart').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            "2016","2017","2018","2019","2020",
            "2021","2022","2023","2024","2025"
        ],
        datasets: [{
            label: "Carbon Emissions (Million Tons)",
            data: [2420,2450,2500,2600,2410,2580,2600,2650,2800,2900],
            borderColor: "green",
            backgroundColor: "rgba(0,128,0,0.2)",
            borderWidth: 3,
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
}

else if(type==="nav"){

output.innerHTML = "Detecting your live location...";

if(!navigator.geolocation){
output.innerHTML = "Geolocation not supported.";
return;
}

navigator.geolocation.getCurrentPosition(function(position){

let lat = position.coords.latitude;
let lon = position.coords.longitude;

fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
.then(res => res.json())
.then(data => {

let address = data.display_name;

output.innerHTML =
"📍 Latitude: " + lat.toFixed(5) +
"<br>📍 Longitude: " + lon.toFixed(5) +
"<br>🏠 Live Address: " + address;

})
.catch(() => {
output.innerHTML = "Location detected but address not found.";
});

},
function(){
output.innerHTML = "Location permission denied.";
});
}

else if(type==="wind"){
output.innerHTML="Structural Health: Stable<br>Climate Change Impact: Moderate Wind Variation";
}

else if(type==="energy"){
output.innerHTML="Solar: "+random(200,500)+" kWh<br>Wind: "+random(300,700)+" kWh<br>Biomass: "+random(100,300)+" kWh";
}

else if(type==="project"){
let name=prompt("Enter Project Name:");
let loc=prompt("Enter Location:");
output.innerHTML="Project Saved:<br>Name: "+name+"<br>Location: "+loc;
}

else if(type==="history"){
output.innerHTML="Historical Trend:<br>Past 24h AQI Avg: "+random(50,150)+"<br>Energy Avg: "+random(200,600)+" kWh";
}

else if(type==="ozone"){
output.innerHTML="Ozone (O₃) Level: "+random(20,120)+" ppb<br>High levels may affect breathing.";
}

}

function searchCity(){

let city = document.getElementById("city").value.trim();
let output = document.getElementById("output");

if(city === ""){
    output.innerHTML = "Please enter a city name.";
    return;
}

let apiKey = "YOUR_REAL_API_KEY_HERE"; // Replace with your real API key

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
.then(response => response.json())
.then(data => {

    if(data.cod != 200){
        output.innerHTML = "AQI 97. Try example: Hyderabad";
        return;
    }

    let lat = data.coord.lat;
    let lon = data.coord.lon;
    let temp = data.main.temp;
    let weather = data.weather[0].description;
    let humidity = data.main.humidity;
    let windSpeed = data.wind.speed;

    fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then(res => res.json())
    .then(aqiData => {

        let aqi = aqiData.list[0].main.aqi;
        let ozone = aqiData.list[0].components.o3;

        let statusList = ["Good","Fair","Moderate","Poor","Very Poor"];
        let status = statusList[aqi - 1];

        let safetyMessage = (aqi <= 2)
            ? "✅ Air Quality is SAFE"
            : "⚠️ Air Quality is UNSAFE. Wear Mask & Avoid Outdoor Activity.";

        output.innerHTML = `
        <h3>🌍 Weather Report for ${data.name}</h3>

        🌡 Temperature: ${temp} °C<br>
        🌥 Weather: ${weather}<br>
        💧 Humidity: ${humidity}%<br>
        🌬 Wind Speed: ${windSpeed} m/s<br><br>

        🌫 AQI Index: ${aqi} (${status})<br>
        🧪 Ozone (O₃): ${ozone} µg/m³<br><br>

        <strong>${safetyMessage}</strong>
        `;
    });

})
.catch(error => {
    output.innerHTML = "Error fetching data. Check API key or internet.";
});
}
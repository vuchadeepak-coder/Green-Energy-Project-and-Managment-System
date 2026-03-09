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

if(type==="dashboard"){

output.innerHTML = `
<h3>📊 Green Energy Project Dashboard</h3>

<div class="dashboard">

<div class="card">
<h4>Total Projects</h4>
12
</div>

<div class="card" onclick="showProjects('active')" style="cursor:pointer;">
<h4>Active Projects</h4>
7<br><small>Click to View</small>
</div>

<div class="card" onclick="showProjects('completed')" style="cursor:pointer;">
<h4>Completed Projects</h4>
5<br><small>Click to View</small>
</div>

<div class="card">
<h4>Energy Production</h4>
3200 kWh
</div>

<div class="card">
<h4>CO₂ Reduction</h4>
450 Tons
</div>

</div>
`;
}

else if(type==="aboutSection"){

output.innerHTML = `
<h3>🌱 Green Energy Information</h3>

<div class="dashboard">

<div class="card" onclick="aboutInfo()" style="cursor:pointer;">
<h4>About Green Energy</h4>
Click to View
</div>

<div class="card" onclick="benefitsInfo()" style="cursor:pointer;">
<h4>Benefits</h4>
Click to View
</div>

<div class="card" onclick="orgInfo()" style="cursor:pointer;">
<h4>Organization</h4>
Click to View
</div>

<div class="card" onclick="contactInfo()" style="cursor:pointer;">
<h4>Contact</h4>
Click to View
</div>

</div>
`;
}

else if(type==="govt"){
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
labels:["2014","2015","2016","2017","2018","2019","2020","2021","2022","2023"],
datasets:[{
label:"Carbon Emissions (Million Tons)",
data:[2400,2450,2500,2600,2700,2750,2500,2650,2800,2900],
borderColor:"green",
backgroundColor:"rgba(0,128,0,0.2)",
borderWidth:3,
fill:true,
tension:0.3
}]
},
options:{
responsive:true,
scales:{
y:{beginAtZero:false}
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

else
if(type==="history"){
output.innerHTML="Historical Trend:<br>Past 24h AQI Avg: "+random(50,150)+"<br>Energy Avg: "+random(200,600)+" kWh";
}

else if(type==="ozone"){
output.innerHTML="Ozone (O₃) Level: "+random(20,120)+" ppb<br>High levels may affect breathing.";
}
else if(type==="pollutedCities"){

output.innerHTML = `
<h3>🏭 Top 10 Polluted Cities in India (AQI)</h3>

<table border="1" width="100%" style="border-collapse:collapse; text-align:center;">
<tr>
<th>Rank</th>
<th>City</th>
<th>AQI</th>
<th>Status</th>
</tr>

<tr>
<td>1</td>
<td>Delhi</td>
<td>420</td>
<td style="color:red;">Hazardous</td>
</tr>

<tr>
<td>2</td>
<td>Ghaziabad</td>
<td>390</td>
<td style="color:red;">Very Poor</td>
</tr>

<tr>
<td>3</td>
<td>Noida</td>
<td>370</td>
<td style="color:red;">Very Poor</td>
</tr>

<tr>
<td>4</td>
<td>Faridabad</td>
<td>360</td>
<td style="color:red;">Very Poor</td>
</tr>

<tr>
<td>5</td>
<td>Lucknow</td>
<td>340</td>
<td style="color:red;">Very Poor</td>
</tr>

<tr>
<td>6</td>
<td>Kanpur</td>
<td>330</td>
<td style="color:red;">Very Poor</td>
</tr>

<tr>
<td>7</td>
<td>Patna</td>
<td>320</td>
<td style="color:red;">Very Poor</td>
</tr>

<tr>
<td>8</td>
<td>Agra</td>
<td>310</td>
<td style="color:red;">Very Poor</td>
</tr>

<tr>
<td>9</td>
<td>Varanasi</td>
<td>300</td>
<td style="color:orange;">Poor</td>
</tr>

<tr>
<td>10</td>
<td>Gurugram</td>
<td>295</td>
<td style="color:orange;">Poor</td>
</tr>

</table>
`;
}

}

function searchCity(){

let city = document.getElementById("city").value.trim();
let output = document.getElementById("output");

if(city === ""){
output.innerHTML = "Please enter a city name.";
return;
}

let apiKey = "YOUR_REAL_API_KEY_HERE";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
.then(response => response.json())
.then(data => {

if(data.cod != 200){
output.innerHTML = "City not found. Try example: Hyderabad";
return;
}

let lat = data.coord.lat;
let lon = data.coord.lon;

fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`)
.then(res => res.json())
.then(aqiData => {

let aqi = aqiData.list[0].main.aqi;
let ozone = aqiData.list[0].components.o3;

output.innerHTML = `
<h3>🌍 Weather Report for ${data.name}</h3>

🌫 AQI Index: ${aqi}<br>
🧪 Ozone (O₃): ${ozone} µg/m³
`;
});

})
.catch(error=>{
output.innerHTML="Error fetching data.";
});
}

function showProjects(type){

let output = document.getElementById("output");

if(type==="active"){
output.innerHTML=`
<h3>⚡ Active Green Energy Projects</h3>

<table border="1" width="100%" style="border-collapse:collapse;">
<tr>
<th>Project Name</th>
<th>Location</th>
<th>Energy Type</th>
<th>Start Date</th>
</tr>

<tr>
<td>Solar City Project</td>
<td>Hyderabad</td>
<td>Solar</td>
<td>12-03-2024</td>
</tr>

<tr>
<td>Wind Power Grid</td>
<td>Tamil Nadu</td>
<td>Wind</td>
<td>05-07-2023</td>
</tr>

<tr>
<td>Green Village Energy</td>
<td>Karnataka</td>
<td>Solar</td>
<td>20-01-2024</td>
</tr>

</table>
`;
}

else if(type==="completed"){
output.innerHTML=`
<h3>✅ Completed Green Energy Projects</h3>

<table border="1" width="100%" style="border-collapse:collapse;">
<tr>
<th>Project Name</th>
<th>Location</th>
<th>Energy Type</th>
<th>Start Date</th>
</tr>

<tr>
<td>Solar Park Phase 1</td>
<td>Rajasthan</td>
<td>Solar</td>
<td>10-02-2022</td>
</tr>

<tr>
<td>Wind Energy Plant</td>
<td>Gujarat</td>
<td>Wind</td>
<td>15-05-2021</td>
</tr>

<tr>
<td>Hydro Power Station</td>
<td>Kerala</td>
<td>Hydro</td>
<td>30-08-2020</td>
</tr>

</table>
`;
}

}

function aboutInfo(){
document.getElementById("output").innerHTML=`
<h3>🌱 About Green Energy</h3>
<p>Green energy is energy generated from natural resources like sunlight, wind, and water.</p>
<p>It is renewable and helps reduce pollution and climate change.</p>
`;
}

function benefitsInfo(){
document.getElementById("output").innerHTML=`
<h3>🌍 Benefits of Renewable Energy</h3>
<ul>
<li>Reduces pollution</li>
<li>Decreases carbon emissions</li>
<li>Provides sustainable energy</li>
<li>Creates green jobs</li>
</ul>
`;
}

function orgInfo(){
document.getElementById("output").innerHTML=`
<h3>🏢 Organization Information</h3>
<p>Name: Green Energy Development Agency</p>
<p>Founded: 2015</p>
<p>Focus: Solar farms, wind plants, green cities</p>
`;
}

function contactInfo(){
document.getElementById("output").innerHTML=`
<h3>📞 Contact Us</h3>
<p>Email: greenenergy@email.com</p>
<p>Phone: +91 9876543210</p>
<p>Location: Hyderabad, India</p>
`;
}

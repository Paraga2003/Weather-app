 const btn = document.querySelector('#get-weather-btn');
 
 const cityName = document.querySelector('#city-name');
 const cityTemp = document.querySelector('#city-temp');
 const cityTime = document.querySelector('#city-time');
 async function fetchWeatherData(city) {
  const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=f362d3a0f12e4b4883391712252107&q=${city}&aqi=yes`);
  return await promise.json();

 }
 btn.addEventListener('click', async () => {
  const city = document.querySelector('#city-input').value;
  
  if (city) {
    const result = await fetchWeatherData(city);
    cityName.innerText = `${result.location.name} ,${result.location.region} ,${result.location.country}`;
    cityTemp.innerText = `${result.current.temp_c}°C`;
    cityTime.innerText = `Last updated at ${result.current.last_updated}`;
  } else {
    alert('Please enter a city name');
  }
 });
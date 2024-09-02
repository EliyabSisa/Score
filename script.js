const inputEl = document.getElementById("fetch");
const Btn = document.getElementById("image");
const header = document.getElementById("temp");
const secondHeader = document.getElementById("city");



     
    const fetchDataX = async()=>{
        
        try{

        const input = inputEl.value;
        
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=1201329e6254353bb781b60e2e0413d7`)
        const data = await res.json()
        console.log(data)

        const tempInCelsius = (data.main.temp - 273.15).toFixed(2)
        const humidity = data.main.humidity;
        const speed = data.wind.speed;

       header.textContent = `${tempInCelsius}°C`;
       secondHeader.textContent = data.name;
       document.getElementById('h165').textContent = `${humidity}%`;
       document.querySelector('.h5').textContent = `${speed}Km/h`;

    }catch(error){
        console.error("an error happen!")
    }
    }

Btn.addEventListener("click",()=>{
    fetchDataX()
    inputEl.value = "";
    console.log("The button is clicked!")
});

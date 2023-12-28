const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");



setInterval(()=>{
    const currentTime = new Date();

    hours.innerHTML = (currentTime.getHours()<10 ? "0" : "") + currentTime.getHours();
    minutes.innerHTML = (currentTime.getMinutes()<10 ? "0" : "") +  currentTime.getMinutes();
    seconds.innerHTML = (currentTime.getSeconds()<10 ? "0" : "") +  currentTime.getSeconds();
},1000)

//STEP 5

function anniversaryCountDown() {
    const anniversaryDate = new Date ("December 21, 2024 00:00")
    const now = new Date();
    const diff = anniversaryDate - now;

    const msInSecond = 1000;
    const msInMinut = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHour;
   
    const displayMinutes = Math.floor((diff%msInHour) / msInMinut);
    document.querySelector(".minutes").textContent = displayMinutes;

    const displaySeconds = Math.floor((diff%msInMinut) / msInSecond);
    document.querySelector(".seconds").textContent = displaySeconds;

    // STEP 6 - FIX THE GLITCH

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        anniversaryIsStartedIsStarted();

        //STEP 7 - STOP THE COUNTER
        clearInterval(timerId);
    }
}
let timerId = setInterval(anniversaryCountDown, 1000);

function anniversaryIsStarted() {
    const heading = document.querySelector("h1");
    heading.textContent = "HOORAY!!! THIS IS OUR 5 YEAR ANNIVERSARY!!!";
    heading.classList.add("blue");
}

const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
document.querySelector("#mySong").play();
})


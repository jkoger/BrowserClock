let clockContainer 
let dateContainer
let greetingContainer
let Hours

window.onload = function () {
  init()
}


function init() {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)
  startClock()

  dateContainer = document.querySelector('#date')
  console.log(dateContainer)
  currentDate()

  greetingContainer = document.querySelector('#greeting')
  console.log(greetingContainer)
  currentGreeting()

}



function startClock() {
  updateClock()

  window.setInterval(function () {
    updateClock()
  }, 1000)
}

function updateClock() {
  const date = new Date()

  let currentHours = date.getHours()
  let currentMinutes = date.getMinutes()
  

  currentHours = (currentHours < 10 ? "0" : "") + currentHours
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes

  Hours = currentHours;

  clockContainer.innerHTML = currentHours+":"+currentMinutes;

}

function currentGreeting(){
    let dysplayGreeting = " ";

    if (Hours < 12 && Hours > 4 ){
        dysplayGreeting = "Good Morning";
    } else {
        if (Hours < 18){
            dysplayGreeting = "Good Afternoon";
        } else if (Hours < 22){
            dysplayGreeting = "Good Evening"
        } else{
            dysplayGreeting = "Good Night"
        }
    }

    greetingContainer.innerHTML = dysplayGreeting
}



function currentDate(){
  const date = new Date()

  let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  dateContainer.innerHTML =  days[date.getDay()]+" "+date.getDate()+" "+months[date.getMonth()]+" "+date.getFullYear()

}

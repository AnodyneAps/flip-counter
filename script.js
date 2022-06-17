
const datesObject = [
			{
				"morning":   new Date().setHours(08,59,59) 
			},
			{
				"befornoon":   new Date().setHours(14,59,59) 
			},
			{
				"afternoon":   new Date().setHours(32,59,59) 
			}

]


const setTimeOfDay = new Date().getHours();
let morning = datesObject[0].morning;
let befornoon = datesObject[1].befornoon;
let afternoon = datesObject[2].afternoon;

let date1, date2, date3;
if(setTimeOfDay >= 0 && setTimeOfDay < 9){
	date1 = morning;
} else if(setTimeOfDay >= 9 && setTimeOfDay < 15){
	date2 = befornoon;
} else{
	date3 = afternoon;
}

dateCount(date1, date2, date3);

function dateCount(date1,date2, date3){
	setInterval(() => {
  const currentDate = new Date()
  const timeBetweenDates1 = Math.ceil(( date1 - currentDate ) / 1000)
			if(timeBetweenDates1 > 0){
				flipAllCards(timeBetweenDates1)
			}
			const timeBetweenDates2 = Math.ceil(( date2 - currentDate ) / 1000)
			if(timeBetweenDates2 > 0){
				flipAllCards(timeBetweenDates2)
			}
		  const timeBetweenDates3 = Math.ceil(( date3 - currentDate ) / 1000)
			if(timeBetweenDates3 > 0){
				flipAllCards(timeBetweenDates3)
			}
	}, 1000)
}

function flipAllCards(time) {
  const seconds = time % 60
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600)

  flip(document.querySelector("[data-hour-tens]"), Math.floor(hours / 10))
  flip(document.querySelector("[data-hour-ones]"), hours % 10)
  flip(document.querySelector("[data-minute-tens]"), Math.floor(minutes / 10))
  flip(document.querySelector("[data-minute-ones]"), minutes % 10)
  flip(document.querySelector("[data-second-tens]"), Math.floor(seconds / 10))
  flip(document.querySelector("[data-second-ones]"), seconds % 10)
}

function flip(flipCard, newNumber){

	const topHalf = flipCard.querySelector(".top");
	const startNumber = parseInt(topHalf.textContent);
	if(newNumber === startNumber) return 

	const bottomHalf = flipCard.querySelector(".bottom");
	const topFlip = document.createElement("div");
	topFlip.classList.add("top-flip");
	const bottomFlip = document.createElement("div");
	bottomFlip.classList.add("bottom-flip");


topHalf.textContent = startNumber;
bottomHalf.textContent = startNumber;
topFlip.textContent = startNumber;
bottomFlip.textContent = newNumber;



topFlip.addEventListener("animationstart", e =>{
	topHalf.textContent = newNumber;
})
topFlip.addEventListener("animationend", e =>{
	topFlip.remove();
})

bottomFlip.addEventListener("animationend", e =>{
	bottomHalf.textContent = newNumber;
	bottomFlip.remove();
})

flipCard.append(topFlip, bottomFlip);
}
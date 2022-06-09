const now = new Date()

const datesObject = [
			{
				"earlymorning":  (now - new Date().setHours(08,59,59))
			},
			{
				"midday":   (now - new Date().setHours(13,59,59))
			},
			{
				"aftermidday":  (now - new Date().setHours(23,59,59))
			}

]
dateLabels = ["earlymorning", "midday", "aftermidday"]

for(date in datesObject){
	let datesWithLabels = dateLabels[date]
	console.log(datesWithLabels);
}


function dateCount(date){
	setInterval(() => {
  const currentDate = new Date()
  const timeBetweenDates = Math.ceil((date - currentDate) / 1000)
  flipAllCards(timeBetweenDates)

  previousTimeBetweenDates = timeBetweenDates
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
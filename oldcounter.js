//DK  counter definition 
let domTopIdnl = document.getElementById('dk___js-counter');
if (domTopIdnl !== null) {
	weekDayNames(domTopIdnl);
}

function weekDayNames(Id1) {
	let d = new Date();
	weekday = d.getDay(),
		dayslabel = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		weekday = dayslabel[d.getDay()];
	//switcher
	switch (weekday) {
		case 'Fri':
			calculateDeliveryTimeFriday(Id1, d, 15);
			break;
		case 'Sat':
			calculateDeliveryTimeSaturday(Id1)
			break;
		case 'Sun':
			calculateDeliveryTimeEveryDay(Id1, d, 0);
			break;
		default:
			calculateDeliveryTimeEveryDay(Id1, d, 15);
	}
}
function calculateDeliveryTimeEveryDay(someId, currentDate, setTime) {
	let putDateOfNow = currentDate,
		startDateOfToday = putDateOfNow.setHours(setTime, 0, 0),
		endDateOfToday = putDateOfNow.setHours(23, 59, 59);

	function tick() {
		let now = new Date();
		if (now <= startDateOfToday) {
			let remain = ((startDateOfToday - now) / 1000),
				hours = addZero((remain / 60 / 60) % 60),
				min = addZero((remain / 60) % 60),
				sec = addZero(remain % 60);
   
        someId.innerHTML = `<div class="timer__wrapper">
        <div class="timer__text">
				Levering i morgen - bestil inden: 
        </div>
        <div class="timer__counter">  
        <span class="time-go">
        <span class="time-hour"> <strong>${hours} </strong><span class="time__badge">Timer</span></span> <code>:</code> 
        <span class="time-min"> <strong>${min}</strong><span class="time__badge">Minutter</span></span> <code>:</code> 
        <span class="time-sec"> <strong>${sec}</strong><span class="time__badge">Sekunder</span></span> 
        </span></div></div>`;
     

			setTimeout(tick, 1000);
		} else if (now < endDateOfToday) {
			if (now >= endDateOfToday) { // too late, go to tomorrow
				after.setDate(after.getDate() + 1);
			}
			let remain = ((endDateOfToday - now) / 1000),
				hours = addZero((remain / 60 / 60) % 60),
				min = addZero((remain / 60) % 60),
				sec = addZero(remain % 60);
        someId.innerHTML = `<div class="timer__wrapper">
        <div class="timer__text">
        Vi sender i morgen - bestil inden:
        </div>
        <div class="timer__counter">
        <span class="time-up"  >
        <span class="time-hour"> <strong>${hours} </strong><span class="time__badge">Timer</span></span> <code>:</code>  
        <span class="time-min"> <strong>${min}</strong><span class="time__badge">Minutter</span></span> <code>:</code> 
        <span class="time-sec"> <strong>${sec}</strong><span class="time__badge">Sekunder</span></span> 
        </span></div></div>`;
  
			setTimeout(tick, 1000);
		}
	}
	tick();
}
function calculateDeliveryTimeFriday(someId, currentDate, setTime) {
	let putDateOfNow = currentDate,
		startDateOfToday = putDateOfNow.setHours(setTime, 0, 0);
	//add zeros
	function addZero(num) {
		return ("0" + parseInt(num)).substr(-2);
	}
	function tick() {
		let now = new Date();
		if (now <= startDateOfToday) {
			let remain = ((startDateOfToday - now) / 1000),
				hours = addZero((remain / 60 / 60) % 60),
				min = addZero((remain / 60) % 60),
				sec = addZero(remain % 60);
 
        someId.innerHTML = `<div class="timer__wrapper">
        <div class="timer__text">
        Levering i morgen - bestil inden: 
        </div>
        <div class="timer__counter">  
        <span class="time-go">
        <span class="time-hour"> <strong>${hours} </strong><span class="time__badge">Timer</span></span> <code>:</code> 
        <span class="time-min"> <strong>${min}</strong><span class="time__badge">Minutter</span></span> <code>:</code> 
        <span class="time-sec"> <strong>${sec}</strong><span class="time__badge">Sekunder</span></span> 
        </span></div></div>`;
  
			setTimeout(tick, 1000);
		} else if (now > startDateOfToday) {

			someId.innerHTML = `<div class="timer__wrapper"><div class="timer__text"> Fri fragt ved køb over 399 kr </div></div>`;
    
		}
	}
	tick();
}
function calculateDeliveryTimeSaturday(someId) {
    someId.innerHTML = `<div class="timer__wrapper"><div class="timer__text"> Fri fragt ved køb over 399 kr </div></div>`;
}
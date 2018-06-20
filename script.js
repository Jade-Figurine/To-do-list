window.addEventListener('load', function(){
	const date = new Date;
	const dateDay = document.querySelector('.date');
	const dateM = document.querySelector('.month');
	const dateY = document.querySelector('.year');
	const dateD = document.querySelector('.day');

	var monthName = ['Jan','Feb','Mar','Apr','May','Jun',
    'Jul','Aug','Sep','Oct','Nov','Dec'];
    var dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	
	dateDay.innerHTML = date.getDate();
	dateM.innerHTML = monthName[date.getMonth()];
	dateY.innerHTML = date.getFullYear();
	dateD.innerHTML = dayName[date.getDay()];

});
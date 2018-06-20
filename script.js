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



	/*=====CREATE LIST======*/

	const btn = document.querySelector('.btn');
	const p_noTask = document.querySelector('.task');
	const bodyList = document.querySelector('.body-list');
	const form = document.querySelector('form');
	const list = document.querySelector('.list');

	// CREATE ELEMENTS BY CLICK

	btn.addEventListener('click', function(e){
		// remove <p>no task...</p>
		p_noTask.style.display='none';
		
		//check for availability addInputs
		if(form.hasChildNodes(document.querySelector('addInput'))){
			let children = form.childNodes;
			for(let i = 0; i < children.length; i++){
				let saveValue = children[i].value;

				// create tag 'li' for 'ul.list'
				const task = document.createElement('input');

				// implement new element in 'ul.list'
				list.appendChild(task);

				// add CSS for new element
				task.classList.add('item');

			}
		}
		
		// create elements for list		
		const addInput = document.createElement('input');
		
		// implement new elements		
		form.appendChild(addInput).focus();
		
		// add CSS for new elements
		form.classList.add('form');
		addInput.classList.add('addInput');
		
	});

	// FIX NEW ELEMENTS


});
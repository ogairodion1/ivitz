var brilliant = document.querySelector('#item-text');
var brilliantDiv = document.querySelector('.item');
var bodyColor = document.querySelector('body');

brilliant.innerHTML = 'GO';

function changeText() {
	switch(brilliant.innerHTML) {
		case 'GO':
		brilliant.innerHTML = '1';
		break;
		case '1':
		brilliant.innerHTML = '2';
		break;
		case '2':
		brilliant.innerHTML = '3';
		break;
		case '3':
		brilliant.innerHTML = 'GO';
		break;
	}
}

brilliantDiv.addEventListener('mouseover' , function(e){
	var target = e.target;
	if(e.target.classList.contains("item")) {
		bodyColor.style.backgroundColor = 'blue';
	}
});

brilliantDiv.addEventListener('mouseout' , function(e){
	var target = e.target;
	if(e.target.classList.contains("item")) {
		bodyColor.style.backgroundColor = 'white';
	}
});

setInterval(changeText , 2000);	
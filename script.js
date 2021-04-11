let toggle = document.querySelector('.menu-and-close');
let close = document.querySelector('.close');
let menu = document.querySelector('.menu'); 

toggle.addEventListener('click', function(){
	let activ = document.querySelector('.nav-links');
	if(activ.style.display === 'block'){
		activ.style.display ='none'
	}else{
		activ.style.display ='block'
	
}

})

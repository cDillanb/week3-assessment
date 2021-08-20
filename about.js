console.log("hello world");

let form = document.querySelector('form#contact');
let catPicture = document.getElementById('cat-image');


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted!');
}

const compliment = () => {
	alert("You're so cool!")
}

form.addEventListener('submit', handleSubmit);
catPicture.addEventListener('mouseover', compliment)
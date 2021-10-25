'use strict'

// panel użytkownika, ruch lewa-prawa

const signUpButton = document.querySelector('#signUp');
const signInButton = document.querySelector('#signIn');
const container = document.querySelector('.container');


signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


// panel użytkownika, walidacja formularza

function validate(e) {
	e.preventDefault();
	const name = this.name.value;
	const mail = this.mail.value;
	const mail1 = this.mail1.value;
	const password = this.password.value;
	const conds = document.querySelector('#check-one').checked;
	const placeError = document.querySelector('.errors');

	let errors = [];

	const namePattern = /^[A-Ż]+[a-ż]{3,15}$/;
	const testName = namePattern.test(name);
	if(!testName)
		errors.push('Nazwa użytkownika niepoprawna');
		
	const mailPattern = /^[a-z\d]+[\w.-]*@[a-z\d]+[a-z\d-]*\.[a-z]{2,4}$/i;
	const testMail = mailPattern.test(mail);
	if (!testMail)
		errors.push('Niepoprawny format maila');
		
	if(mail != mail1)
		errors.push("Maile różnią się od siebie");
		
	const passPattern = /^[A-Ż]+[a-ż]{3,15}$/;
	const testPass = passPattern.test(password);
	if(!testPass)
		errors.push('Użyj od 3 do 15 znaków');

	if (!conds)
		errors.push('Zaakceptuj jakieś warunki');

	if (errors.length > 0) {
		placeError.innerHTML = errors.join('<br>');
	}
}
const form = document.querySelector('form');
form.addEventListener('submit', validate);


// panel użytkownika, logowanie

const logBtn = document.querySelectorAll('button');
let mail2 = document.querySelector('#mail2');
let password2 = document.querySelector('#password2');
logBtn.disabled = true;
mail2.addEventListener('change', logInVal);

function logInVal() {
	if (mail2.value === '' && password2.value === '') {
		logBtn[1].disabled = true;
	} else {
		logBtn[1].disabled = false;
	}
}

logInVal();


// zapomniałem hasła



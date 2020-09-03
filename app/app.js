// All the events are being listened to in this file
// The UI object interacts with the Validator object to perform tasks

const ui = new UI();
const validator = new Validator();
let [userValid, zipValid, phoneValid, emailValid] = [false, false, false, false];


ui.name.addEventListener('blur', () => {
   const res = validator.validateName(ui.name.value);
   userValid = ui.handle(res, ui.name, '2 to 10 alphanumeric or underscore characters only');
   ui.handleButton(userValid,zipValid,phoneValid,emailValid);
});

ui.zip.addEventListener('blur', () => {
   const res = validator.validateZip(ui.zip.value);
   zipValid = ui.handle(res, ui.zip, 'Please enter a valid Canadian Zip code');
   ui.handleButton(userValid,zipValid,phoneValid,emailValid);
});


ui.email.addEventListener('blur', () => {
   const res = validator.validateEmail(ui.email.value);
   emailValid = ui.handle(res, ui.email, 'Please enter a valid Email address');
   ui.handleButton(userValid,zipValid,phoneValid,emailValid);
});

ui.phone.addEventListener('blur', () => {
   const res = validator.validateNumber(ui.phone.value);
   phoneValid = ui.handle(res, ui.phone, 'Please enter a 10 digit valid number');
   ui.handleButton(userValid,zipValid,phoneValid,emailValid);
});



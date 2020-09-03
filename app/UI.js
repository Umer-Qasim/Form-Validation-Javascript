// This class will handle and keep track of all the UI modifications
class UI{

    constructor(){
        // Constructor with all the required UI objects
        this.form = document.querySelector('form'),
        this.name = document.getElementById('username'),
        this.zip = document.getElementById('zipcode'),
        this.email = document.getElementById('mail'),
        this.phone = document.getElementById('number'),
        this.submit = document.querySelector('button[type="submit"]');
    }
   
    // Method takes in the result of Regex match along with the UI component and the message
    // to be displayed
    handle(result, element, message) {
        if(element.value){
            if(result){
                element.style.color = '#007500';
                this.reset(element, true, false);
                return true;
            } else {
                element.style.color = '#f00';
                this.createMessage(message,element);
                return false;
            }
        } else {
            this.reset(element, false, true);
            return false;
        }
    }

    // This method handles the creation of error message
    createMessage(message, element){
            if(element.parentElement.nextElementSibling === null) {
            const textNode = document.createTextNode(message);
            let newElement = document.createElement('small');
            newElement.style.color = '#f00';
            newElement.appendChild(textNode);

            // Create the image
             
            element.parentElement.parentElement.className = 'cross';
            element.parentElement.insertAdjacentElement('afterend', newElement);
        }
    }

    // This method resets the states of input fiels depending on the parameters passed
    reset(element, first, resetAll){
        if(resetAll){
            this.removeMessage(element);
            element.removeAttribute('style');
            element.parentElement.parentElement.className = "";
        }
        if(first){
            element.parentElement.parentElement.className = 'tick';
            this.removeMessage(element);
        }
    }

    // This method removes the error message once the field is validated
    removeMessage(element){
        if(element.parentElement.nextElementSibling != null) {
            if(element.parentElement.nextElementSibling.tagName.toUpperCase() === 'SMALL') {
                element.parentElement.nextElementSibling.remove(); 
            }
        }
    }

    // This method handles the submit button state on the basis of field validation
    handleButton(userValid, zipValid, emailValid, phoneValid){
        console.log(userValid, zipValid, emailValid, phoneValid);
        
        // This local method removes styles and disables the submit button
        let disableButton = () => {
            this.submit.setAttribute('disabled','');
            this.submit.classList.remove('hov');
            if( this.submit.classList.contains('active'))  
            this.submit.classList.remove('active');
        }

        // This local method adds styles and enables the submit button
        let enableButton = () => {
            this.submit.removeAttribute('disabled');
            this.submit.classList.add('hov');    
            this.submit.classList.add('active');   
        }
        
        if(userValid === true && zipValid === true &&  emailValid === true &&  phoneValid === true){
            enableButton();
        } else {
            disableButton();
        }
    }


}
// The validator class simply validates the input values passed by the UI

// Using weak maps to create private class fields holding the REGEXes to be matched
const _nameRe = new WeakMap();
const _numberRe = new WeakMap();
const _zipRe = new WeakMap();
const _emailRe = new WeakMap();
const _phoneRe = new WeakMap();

class Validator {
    
   constructor(){
       // Assigning all the respective regex values to weak maps
       _nameRe.set(this,/^(\w){2,10}$/);
       _zipRe.set(this,/([A-Za-z][0-9][A-Za-z])([ \.\-]?)([0-9][A-Za-z][0-9])/);
       _emailRe.set(this,/^(\w+([\.-]?\w+))@((\w){2,7})\.((\w){2,3})$/);
       _phoneRe.set(this,/^\(?(\d){3}\)?[-' ']?(\d){3}[-' ']?(\d){4}$/);

   }

   // The following methods simply validate the passed inputs based on the given regular expressions
   validateName(input){
        return (_nameRe.get(this).test(input));
    }

    
    validateZip(input){
        return (_zipRe.get(this).test(input));
    }

    validateEmail(input){
        return(_emailRe.get(this).test(input));
    }


    validateNumber(input){
        return(_phoneRe.get(this).test(input));
    }
}
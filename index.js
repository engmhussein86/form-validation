console.log('valid!')



const reg_form = document.getElementById("registration");
const Username = reg_form.elements["username"];
const email = reg_form.elements["email"];
const password = reg_form.elements["password"];
const passwordCheck = reg_form.elements["passwordCheck"];

console.log(Username);

reg_form.addEventListener("submit", validate);

function validate(evt) {
    evt.preventDefault();
    console.log('validate');
    const nameVal = validateName();
    if (nameVal === false) {
      evt.returnValue = false;
      return false;
    }

    const emailVal = validateEmail();
  if (emailVal === false) {
    evt.returnValue = false;
    return false;
  }

  const passwordVal = validatePassword();
  if (passwordVal === false) {
    evt.returnValue = false;
    return false;
  }

}
//////////////////////////////////////////////////////////////////////////
  // Name Validation
function validateName() {
    const uniqueChars = new Set(Username.value).size;
    console.log(uniqueChars);


    if (Username.value === "") {
        DisplayError("Please provide a name.");
      Username.focus();
      return false;
    }
    else if(Username.value.length < 4 ){
        DisplayError("Username must be at least four characters long");
      Username.focus();
      return false;
    }
    else if(uniqueChars < 2 ){
        DisplayError("Username must contain at least two unique characters");
      Username.focus();
      return false;
    }
    else if(!/^[a-zA-Z0-9]+$/.test(Username.value)){
        DisplayError("Username cannot contain special characters or whitespace.");
      Username.focus();
      return false;
    }
    
    return Username.value;
  }
  //////////////////////////////////////////////////////
  /////////////////////////////
  function validateEmail() {
    let emailVal = email.value;
    console.log(typeof(emailVal))
  
    
  
    if (emailVal === "") {
        DisplayError("Please provide an email.");
      email.focus();
      return false;
    }

    if (emailVal.trim().endsWith("@example.com")) {
        DisplayError(
        "Email cannot be from the domain example.com.."
      );
      email.focus();
      return false;
    }

  
    return emailVal;
  }
  /////////////////////////////////////////////////////
  function validatePassword() {
    if (password.value === "") {
        DisplayError("Please provide a password.");
      password.focus();
      return false;
    }
    else  if (!/[a-z]/.test(password.value) || !/[A-Z]/.test(password.value) || !/[0-9]/.test(password.value) || !/[^a-zA-Z0-9]/.test(password.value)) {
        DisplayError("Password must have at least one uppercase letter, one lowercase letter, one number, and one special character.");
        password.focus();
        return false;
    }
    else if (/password/i.test(password.value)) {
        DisplayError('Password cannot contain the word "password."');
        password.focus();
        return false;
      }
      else if (password.value.includes(Username.value)) {
        DisplayError('Passwords cannot contain the username.');
        password.focus();
        return false;
      }

      if (password.value !== passwordCheck.value) {

        DisplayError('Passwords do not match.');
        passwordCheck.focus();
        return false;
      }
      
    return password.value;
  }

  ////////////////////////////////////////////////////////

  //Display error

  function DisplayError(msg) {
    errorDisplay.textContent = msg;
    errorDisplay.style.display = 'block';
  }

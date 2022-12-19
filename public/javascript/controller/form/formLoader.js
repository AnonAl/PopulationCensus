import {btnStyle} from '/public/view/form/formBtns.js'
import {validSignIn} from '/public/javascript/controller/form/validSignInForm.js'
import {validSignUp} from '/public/javascript/controller/form/validSignUpForm.js'
import {chooseForm} from '/public/javascript/controller/form/chooseForm.js'

btnStyle();
chooseForm();
validSignUp();
validSignIn();

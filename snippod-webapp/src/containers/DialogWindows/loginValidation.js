import {createValidator, required, email, minLength, maxLength} from 'utils/validation';
import { loginForm } from 'constants/defaults';

const loginValidation = createValidator({
  emailId: [required, email],
  password: [required, minLength(loginForm.passwordMinLength), maxLength(loginForm.passwordMaxLength)],

});
export default loginValidation;

import { SignupErrorObj, showErrorContainer } from "../constant/signupConstant";
import {
  usernameLengthErrorMessage,
  usernameWhitespaceErrorMessage,
  usernameSpecialCharErrorMessage,
  usernameNumberErrorMessage,
  passwordLengthErrorMessage,
  passwordNumberErrorMessage,
  passwordSpecialCharErrorMessage,
  passwordCapitalLetterErrorMessage,
} from "../constant/signupErrorConstant";
import { ESignupErrorTypeConstant } from "../enum/singup.enum";

const signupErrorObjUsername = new SignupErrorObj(
  ESignupErrorTypeConstant.USERNAME_ERROR_TYPE
);
signupErrorObjUsername.setErrors(
  true,
  true,
  true,
  true,
  false,
  false,
  false,
  false
);

const signupErrorObjPassword = new SignupErrorObj(
  ESignupErrorTypeConstant.PASSWORD_ERROR_TYPE
);
signupErrorObjPassword.setErrors(
  false,
  false,
  false,
  false,
  true,
  true,
  true,
  true
);

export function InputEmailValidationOnChange(id: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const element = document.getElementById(id) as HTMLInputElement;
  const email = element.value.trim();

  let emailErrorMessage = "";

  if (!emailRegex.test(email)) {
    emailErrorMessage = "Invalid email address.";
    showErrorContainer(id, true, emailErrorMessage);
    return false;
  }
  showErrorContainer(id, false);
  return true;
}

export function InputUsernameValidationOnChange(id: string): boolean {
  let username = (document.getElementById(id) as HTMLInputElement).value;

  if (username.length >= 8) {
    signupErrorObjUsername.setUsernameLengthError(false);
  } else {
    signupErrorObjUsername.setUsernameLengthError(true);
  }
  if (!/\s/.test(username)) {
    signupErrorObjUsername.setUsernameWhitespaceError(false);
  } else {
    signupErrorObjUsername.setUsernameWhitespaceError(true);
  }
  if (username.match(/[^a-zA-Z0-9]/g)) {
    signupErrorObjUsername.setUsernameSpecialCharError(true);
  } else {
    signupErrorObjUsername.setUsernameSpecialCharError(false);
  }
  if ((username.match(/\d/g) || []).length >= 3) {
    signupErrorObjUsername.setUsernameNumberError(false);
  } else {
    signupErrorObjUsername.setUsernameNumberError(true);
  }

  showErrorContainer(
    id,
    true,
    usernameLengthErrorMessage,
    signupErrorObjUsername.getUsernameLengthError()
      ? undefined
      : "darkseagreen",
    `${id}-1`
  );
  showErrorContainer(
    id,
    true,
    usernameWhitespaceErrorMessage,
    signupErrorObjUsername.getUsernameWhitespaceError()
      ? undefined
      : "darkseagreen",
    `${id}-2`
  );
  showErrorContainer(
    id,
    true,
    usernameSpecialCharErrorMessage,
    signupErrorObjUsername.getUsernameSpecialCharError()
      ? undefined
      : "darkseagreen",
    `${id}-3`
  );
  showErrorContainer(
    id,
    true,
    usernameNumberErrorMessage,
    signupErrorObjUsername.getUsernameNumberError()
      ? undefined
      : "darkseagreen",
    `${id}-4`
  );

  if (
    signupErrorObjUsername.getUsernameLengthError() ||
    signupErrorObjUsername.getUsernameWhitespaceError() ||
    signupErrorObjUsername.getUsernameSpecialCharError() ||
    signupErrorObjUsername.getUsernameNumberError()
  ) {
    return false;
  }

  return true;
}

export function InputPasswordValidationOnChange(id: string): boolean {
  let password = (document.getElementById(id) as HTMLInputElement).value;

  if (password.length >= 8) {
    signupErrorObjPassword.setPasswordLengthError(false);
  } else {
    signupErrorObjPassword.setPasswordLengthError(true);
  }

  if (password.match(/[^a-zA-Z0-9]/g)) {
    signupErrorObjPassword.setPasswordSpecialCharError(false);
  } else {
    signupErrorObjPassword.setPasswordSpecialCharError(true);
  }
  if ((password.match(/\d/g) || []).length >= 1) {
    signupErrorObjPassword.setPasswordNumberError(false);
  } else {
    signupErrorObjPassword.setPasswordNumberError(true);
  }

  if ((password.match(/[A-Z]/g) || []).length >= 1) {
    signupErrorObjPassword.setPasswordCapitalLetterError(false);
  } else {
    signupErrorObjPassword.setPasswordCapitalLetterError(true);
  }

  showErrorContainer(
    id,
    true,
    passwordLengthErrorMessage,
    signupErrorObjPassword.getPasswordLengthError()
      ? undefined
      : "darkseagreen",
    `${id}-1`
  );
  showErrorContainer(
    id,
    true,
    passwordCapitalLetterErrorMessage,
    signupErrorObjPassword.getPasswordCapitalLetterError()
      ? undefined
      : "darkseagreen",
    `${id}-2`
  );
  showErrorContainer(
    id,
    true,
    passwordSpecialCharErrorMessage,
    signupErrorObjPassword.getPasswordSpecialCharError()
      ? undefined
      : "darkseagreen",
    `${id}-3`
  );
  showErrorContainer(
    id,
    true,
    passwordNumberErrorMessage,
    signupErrorObjPassword.getPasswordNumberError()
      ? undefined
      : "darkseagreen",
    `${id}-4`
  );

  if (
    signupErrorObjPassword.getPasswordCapitalLetterError() ||
    signupErrorObjPassword.getPasswordLengthError() ||
    signupErrorObjPassword.getPasswordNumberError() ||
    signupErrorObjPassword.getPasswordSpecialCharError()
  ) {
    return false;
  }

  return true;
}

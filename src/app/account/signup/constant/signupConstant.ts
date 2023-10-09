import { ESignupErrorTypeConstant } from "../enum/singup.enum";

export class SignupErrorObj {
  private usernameLengthError: boolean = false;
  private usernameWhitespaceError: boolean = false;
  private usernameSpecialCharError: boolean = false;
  private usernameNumberError: boolean = false;

  private passwordLengthError: boolean = false;
  private passwordSpecialCharError: boolean = false;
  private passwordCapitalLetterError: boolean = false;
  private passwordNumberError: boolean = false;

  public type: ESignupErrorTypeConstant;

  constructor(type: ESignupErrorTypeConstant) {
    this.type = type;
    if (type === ESignupErrorTypeConstant.USERNAME_ERROR_TYPE) {
      this.usernameLengthError = true;
      this.usernameWhitespaceError = true;
      this.usernameSpecialCharError = true;
      this.usernameNumberError = true;
    } else if (type === ESignupErrorTypeConstant.PASSWORD_ERROR_TYPE) {
      this.passwordLengthError = true;
      this.passwordSpecialCharError = true;
      this.passwordCapitalLetterError = true;
      this.passwordNumberError = true;
    }
  }

  setErrors(
    usernameLengthError: boolean,
    usernameWhitespaceError: boolean,
    usernameSpecialCharError: boolean,
    usernameNumberError: boolean,
    passwordLengthError: boolean,
    passwordSpecialCharError: boolean,
    passwordCapitalLetterError: boolean,
    passwordNumberError: boolean
  ) {
    if (this.type === ESignupErrorTypeConstant.USERNAME_ERROR_TYPE) {
      this.usernameLengthError = usernameLengthError;
      this.usernameWhitespaceError = usernameWhitespaceError;
      this.usernameSpecialCharError = usernameSpecialCharError;
      this.usernameNumberError = usernameNumberError;
    } else if (this.type === ESignupErrorTypeConstant.PASSWORD_ERROR_TYPE) {
      this.passwordLengthError = passwordLengthError;
      this.passwordSpecialCharError = passwordSpecialCharError;
      this.passwordCapitalLetterError = passwordCapitalLetterError;
      this.passwordNumberError = passwordNumberError;
    }
  }

  // username
  getUsernameLengthError() {
    return this.usernameLengthError;
  }
  getUsernameWhitespaceError() {
    return this.usernameWhitespaceError;
  }
  getUsernameSpecialCharError() {
    return this.usernameSpecialCharError;
  }
  getUsernameNumberError() {
    return this.usernameNumberError;
  }
  // password
  getPasswordLengthError() {
    return this.passwordLengthError;
  }
  getPasswordSpecialCharError() {
    return this.passwordSpecialCharError;
  }
  getPasswordCapitalLetterError() {
    return this.passwordCapitalLetterError;
  }
  getPasswordNumberError() {
    return this.passwordNumberError;
  }

  // username
  setUsernameLengthError(usernameLengthError: boolean) {
    this.usernameLengthError = usernameLengthError;
  }
  setUsernameWhitespaceError(usernameWhitespaceError: boolean) {
    this.usernameWhitespaceError = usernameWhitespaceError;
  }
  setUsernameSpecialCharError(usernameSpecialCharError: boolean) {
    this.usernameSpecialCharError = usernameSpecialCharError;
  }
  setUsernameNumberError(usernameNumberError: boolean) {
    this.usernameNumberError = usernameNumberError;
  }

  // password
  setPasswordLengthError(passwordLengthError: boolean) {
    this.passwordLengthError = passwordLengthError;
  }
  setPasswordSpecialCharError(passwordSpecialCharError: boolean) {
    this.passwordSpecialCharError = passwordSpecialCharError;
  }
  setPasswordCapitalLetterError(passwordCapitalLetterError: boolean) {
    this.passwordCapitalLetterError = passwordCapitalLetterError;
  }
  setPasswordNumberError(passwordNumberError: boolean) {
    this.passwordNumberError = passwordNumberError;
  }

}

export function showErrorContainer(
  id: string,
  show: boolean,
  error?: string,
  color?: string,
  p_id?: string
) {
  let errorContainerElement = document.getElementById(
    `error-container-${id}`
  ) as HTMLDivElement;
  let errorContainerP = document.getElementById(
    `error-container-${p_id ? p_id : id}-p`
  ) as HTMLDivElement;

  if (show) {
    errorContainerP.innerText = error ? "[-] " + error : "";
    errorContainerP.style.color = color || "";
    errorContainerElement?.classList.remove("hidden");
  } else {
    errorContainerElement?.classList.add("hidden");
    errorContainerP ? (errorContainerP.innerText = "") : null;
  }
}

export function Signup_getElement(id: string): HTMLInputElement {
  return document.getElementById(id) as HTMLInputElement;
}

export function Signup_GoToNextObject(
  next_obj_id: string,
  current_obj_id: string
) {
  let next_obj = Signup_getElement(next_obj_id);
  let current_obj = Signup_getElement(current_obj_id);
  next_obj.classList.remove("hidden");
  current_obj.classList.add("hidden");
}

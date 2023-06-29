export function validateName(value: string) {
  let error;
  if (value.length < 3) {
    error = "Minimum 3 characters";
  }
  if (value.length > 24) {
    error = "Maximum 24 characters";
  }
  if (!/^[A-Za-z]/i.test(value)) {
    error = "invalid name characters";
    if (value.length === 0) {
      error = "Required";
    }
  }
  return error;
}
export function validateEmail(value: string) {
  let error;
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "invalid email shape";
    if (value.length === 0) {
      error = "Required";
    }
  }
  return error;
}
export function validateBirthDate(value: Date | null) {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
}
export function validatePhoneNumber(value: string) {
  let error;
  if (!value) {
    error = "Required";
  }
  if (!/^([0-9])+$/i.test(value)) {
    error = "Please type numbers only";
    if (value.length === 0) {
      error = "Required";
    }
  }
  if (value.length < 9) {
    error = "Phone numbers should contain 9 digits";
  }
  return error;
}

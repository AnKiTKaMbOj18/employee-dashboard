import { ON_CHANGE, ON_PASSWORD_CHANGE, ON_SUBMIT } from "./constants";

export function onChange(value) {
  return {
    type: ON_CHANGE,
    value
  };
}

export function onPasswordChange(value) {
  return {
    type: ON_PASSWORD_CHANGE,
    value
  };
}

export function onSubmitHandler(value) {
  return {
    type: ON_SUBMIT,
    value
  };
}

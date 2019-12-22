import { fromJS } from "immutable";
import { ON_CHANGE, ON_PASSWORD_CHANGE, ON_SUBMIT } from "./constants";

const initialState = fromJS({
  email: "",
  password: "",
  data: []
});

const loginFormReducer = (
  state = initialState,
  { type, value, error, success }
) => {
  switch (type) {
    case ON_CHANGE:
      return state.set("email", value);
    case ON_PASSWORD_CHANGE:
      return state.set("password", value);
    case ON_SUBMIT:
      return state.set("data", value);
    default:
      return state;
  }
};

export default loginFormReducer;

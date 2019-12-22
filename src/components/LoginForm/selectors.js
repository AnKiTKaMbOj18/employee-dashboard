import { createSelector } from "reselect";
import { LOGIN_REDUCER } from "./constants";

const loginStatekey = state => state.get(LOGIN_REDUCER);

export const makeSelectEmail = () =>
  createSelector(
    loginStatekey,
    state => state.get("email")
  );

export const makeSelectPassword = () =>
  createSelector(
    loginStatekey,
    state => state.get("password")
  );

export const makeSelectEmployeeData = () =>
  createSelector(
    loginStatekey,
    state => state.get("data")
  );

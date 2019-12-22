import { all } from "redux-saga/effects";

export const runSagas = sagas => {
  if (Array.isArray(sagas)) {
    return sagas.map(saga => saga());
  }
};

export default function* rootSaga() {
  const allSagas = [
    // ...runSagas(test saga),
  ];
  yield all(allSagas);
}

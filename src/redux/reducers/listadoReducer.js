import { FETCH_LIST } from "../constants";

const initialState = {
  list: [],
};

export function listadoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST:
      return action.payload;
    default:
      return state;
  }
}

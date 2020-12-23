import { combineReducers } from "redux";

import { listadoReducer } from "./listadoReducer";

export default combineReducers({
  list: listadoReducer,
});

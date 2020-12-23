import axios from "axios";
import { FETCH_LIST } from "../constants";

//uso este estado global porque se pide, pero en realidad no es nada necesario.

export const fetchList = () => (dispatch) => {
  axios
    .get(
      "https://private-anon-1ad05c16c7-woloxfrontendinverview.apiary-mock.com/techs"
    )
    .then((res) => {
      dispatch({ type: FETCH_LIST, payload: res.data });
    })
    .catch((err) => console.error(err));
};

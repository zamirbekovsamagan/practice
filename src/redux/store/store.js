import { createStore } from "redux";
import { formReducer } from "../reducers/reducers";

export const store = createStore(formReducer)
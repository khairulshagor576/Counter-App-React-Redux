import { createStore } from "redux";
import countReducer from "./countReducer/countReducer";


const store = createStore(countReducer);

export default store;
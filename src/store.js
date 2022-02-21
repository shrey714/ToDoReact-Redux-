import { createStore } from "redux";
import rootreducers from "./reducers";

const store = createStore(rootreducers);
export default store;
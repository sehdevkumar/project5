import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from "./Redux/Reducers/rootReducer";

const applymiddleware = [thunk]

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(...applymiddleware))
)
export default store
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import {createStore} from 'redux';
import { createStore } from "redux";
import allReducer from "./reducers";
import { Provider } from "react-redux";
// import Book from "./reducers/book";
import PostList from "../src/reducers/PostList";

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//STORE -> GLOBALIZED STATE

//ACTION INCREAMENT
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     };
// };

// const decreament = () => {
//     return {
//         type: 'DECREAMENT'
//     };
// };

//REDUCER
// const counter = (state = 0, action) => {
//     switch(action.type){
//         case "INCREMENT":
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;
//     }
// };

// let store = createStore(counter);

// //Display it in the console
// store.subscribe(() => console.log(store.getState()));

// //DISPATH
// store.dispatch(increment());

ReactDOM.render(
  <Provider store={store}>
    {/* <App />
    <Book /> */}
    <PostList />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

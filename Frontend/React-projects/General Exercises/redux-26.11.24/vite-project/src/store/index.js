import { createStore } from "redux";

// import { configureStore } from '@reduxjs/toolkit'; //

import todosReducer from "./reducers/ToDoReducers";

export const store = createStore(todosReducer);

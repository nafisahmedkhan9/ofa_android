"use strict";

import React, { Component } from "react";

//react native navigation
import { createStackNavigator } from "react-navigation";

//import components
import Login from "./src/components/comp_login";
import TaskList from "./src/components/comp_tasklist";
import MyTask from "./src/components/comp_mytask";

// import reducer
import userReducer from "./src/reducers/user-reducer";
import taskReducer from "./src/reducers/task-reducer";

// react-redux
import { Provider } from "react-redux";

// reduxs
import { combineReducers, createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

const allReducers = combineReducers({
  user: userReducer,
  tasks: taskReducer
});

const store = createStore(
  allReducers,
  {
    user: {
      preloader: false,
      data: []
    },
    tasks: {
      preloader: false,
      data: []
    }
  },
  applyMiddleware(thunk)
);

const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    TaskList: {
      screen: TaskList
    },
    MyTask: {
      screen: MyTask
    }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

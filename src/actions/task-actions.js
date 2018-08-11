export const CALLAPI = "task:callApi";
export const APIFAILURE = "task:failure";
export const APISUCCESS = "task:success";

export const UPDATEPROPS = "task:updateProps";

// import constant
import * as Constant from "../constant";

import { ToastAndroid, AsyncStorage } from "react-native";

export function getData() {
  return {
    type: CALLAPI,
    payload: {
      preloader: true,
      error: false
    }
  };
}

export function getDataSuccess(data) {
  return {
    type: APISUCCESS,
    payload: {
      preloader: false,
      error: false,
      data: data
    }
  };
}

export function getDataFailure() {
  return {
    type: APIFAILURE,
    payload: {
      preloader: false,
      error: true
    }
  };
}

export function getTasks(userID) {
  return dispatch => {
    dispatch(getData());
    fetch(Constant.API_URL + "task/?assignedTo=" + userID, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.count > 0) {
          dispatch(getDataSuccess(responseJson.results));
        } else {
          dispatch(getDataSuccess([]));
          alert("Hurrah!, You don't have any task");
        }
      })
      .catch(error => {
        ToastAndroid.show("Login Error" + error, ToastAndroid.LONG);
      });
  };
}

// export function updateTask(taskID, task) {
//   return dispatch => {
//     dispatch(getData());

//   };
// }

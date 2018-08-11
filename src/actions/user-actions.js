export const CALLAPI = "user:callApi";
export const APIFAILURE = "user:failure";
export const APISUCCESS = "user:success";

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
      user: data
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

export function authenticate(username, password, navigation) {
  let userAuthenticate = {
    username: username,
    password: password
  };

  return dispatch => {
    dispatch(getData());
    fetch(Constant.API_URL + "login/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userAuthenticate)
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status == 422) {
          ToastAndroid.show(
            "Error 422 " + JSON.stringify(responseJson),
            ToastAndroid.LONG
          );
        } else if (responseJson.status == 500) {
          ToastAndroid.show("Unknown error occured ! 500", ToastAndroid.LONG);
        } else if (responseJson.status == 200) {
          dispatch(getDataSuccess(responseJson.data));
          navigation.replace("TaskList");
        } else if (responseJson.status == 401) {
          alert(JSON.stringify(responseJson.message));
          dispatch(getDataSuccess(responseJson.data));
        } else {
          alert("User login error, please check your internet connection");
        }
      })
      .catch(error => {
        ToastAndroid.show("Login Error" + error, ToastAndroid.LONG);
      });
  };
}

import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
  Image
} from "react-native";

//constant
import * as Constant from "../constant";

//Login Style
import Login_Sty from "../styles/sty_login";

// common Style
import Common_Style from "../styles/common_sty";

class Register extends Component {
  static navigationOptions = {
    drawerLockMode: "locked-closed",
    title: "Register",
    drawerIcon: (
      <Image
        source={require("../assests/register.png")}
        style={Common_Style.icon_size}
      />
    )
  };

  constructor(props) {
    super(props);
  }

  performLogin = () => {
    console.log("Clicked");
  };

  resetPassword = () => {
    console.log("Reset Password");
  };

  gotoRegisterPage = () => {
    console.log("Go to Register");
  };

  render() {
    return (
      <View style={Common_Style.container}>
        <View style={Login_Sty.view_container}>
          <TextInput
            placeholder={Constant.Login_Const.TEXT_INP_USERID}
            style={Common_Style.input_margin_left_and_right}
            keyboardType={"email-address"}
          />
          <TextInput
            placeholder={Constant.Login_Const.TEXT_INP_PASSWORD}
            style={Common_Style.input_margin_left_and_right}
          />
          <View style={Login_Sty.alternative_layout_button_container}>
            <TouchableOpacity
              onPress={() => this.performLogin()}
              style={[
                Login_Sty.button_login_register,
                Common_Style.input_margin_top_and_bottom
              ]}
            >
              <Text>{Constant.Login_Const.BTN_SUBMIT}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.gotoRegisterPage()}
              style={[
                Login_Sty.button_login_register,
                Common_Style.input_margin_top_and_bottom
              ]}
            >
              <Text>{Constant.Login_Const.REGISTER}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={[
            Login_Sty.link_forget_password,
            Common_Style.input_margin_top_and_bottom
          ]}
          onPress={() => this.resetPassword()}
        >
          This is Register Page
        </Text>
      </View>
    );
  }
}

export default Register;

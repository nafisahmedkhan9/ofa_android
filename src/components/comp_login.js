import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Body,
  Title,
  Left,
  Right,
  Icon,
  Button,
  Text,
  List,
  ListItem,
  Card,
  CardItem,
  Drawer
} from "native-base";
import { FlatList } from "react-native";
//import statements

import * as Constants from "../constant";
import StyleLogin from "../styles/sty_login";
import CSS from "../styles/common_sty";

// import actions
import { authenticate } from "../actions/user-actions";

// import connect
import { connect } from "react-redux";

// import bindActionCreator
import { bindActionCreators } from "redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "james",
      password: "james"
    };
  }

  setUserAtt(key, value) {
    this.setState({
      [key]: value
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Login</Title>
          </Body>
        </Header>
        <Content style={{ marginTop: 50 }}>
          <Text
            style={[
              CSS.ma50,
              CSS.FontXXLarge,
              CSS.textcenter,
              CSS.textblue,
              CSS.FontBold
            ]}
          >
            OFA
          </Text>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                onChangeText={username => {
                  this.setUserAtt("username", username);
                }}
                value={this.state.username}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                onChangeText={password => {
                  this.setUserAtt("password", password);
                }}
                value={this.state.password}
                secureTextEntry={true}
              />
            </Item>
            <Button
              style={{
                marginTop: 20,
                marginLeft: 10,
                marginRight: 10,
                alignSelf: "center",
                borderRadius: 50,
                paddingLeft: 15,
                paddingRight: 15
              }}
              onPress={() => {
                this.props.onAuthenticate(
                  this.state.username,
                  this.state.password,
                  this.props.navigation
                );
              }}
            >
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  // products: state.products,
  user: state.user
});

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      onAuthenticate: authenticate
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Login);

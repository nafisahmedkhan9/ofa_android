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
  ListItem
} from "native-base";

//import statements

import * as Constants from "../constant";
import StyleLogin from "../styles/sty_login";

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
      username: "farhan",
      password: "farhan"
    };
  }

  setUserAtt(key, value) {
    this.setState({
      [key]: value
    });
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        alert("Location " + latitude + "," + longitude);
      },
      error => alert(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Login</Title>
          </Body>
        </Header>
        <Content>
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
              />
            </Item>
            <Button
              style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}
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
            <Button onPress={() => this.getLocation()}>
              <Text>Get Location</Text>
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

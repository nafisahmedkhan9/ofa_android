import React, { Component } from "react";
import { ToastAndroid, AsyncStorage } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon,
  View,
  Thumbnail,
  Body,
  Button,
  Title
} from "native-base";

import * as Constants from "../constant";

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  goToPage(page) {
    this.props.navigator.replace(page);
  }

  logout() {}

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>OFA</Title>
          </Body>
        </Header>
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
          <Content>
            <List>
              <List>
                <ListItem avatar onPress={() => this.goToPage("Login")}>
                  <Left>
                    <Thumbnail
                      small
                      source={{
                        uri: Constants.BASE_URL + this.props.profile_pic
                      }}
                    />
                  </Left>
                  <Body>
                    <Text info> {this.props.username}</Text>
                    <Text style={{ opacity: 0.5 }}> Logout</Text>
                  </Body>
                </ListItem>
              </List>

              <ListItem
                onPress={() => this.goToPage("TaskList")}
                selected={this.props.pagename == "tasklist"}
              >
                <Left>
                  <Icon name="tasks" type="FontAwesome" />
                  <Text> Task</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem
                onPress={() => this.goToPage("Attendance")}
                selected={this.props.pagename == "attendance"}
              >
                <Left>
                  <Icon name="calendar-check-o" type="FontAwesome" />
                  <Text> Attandance</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </List>
          </Content>
        </View>
      </Container>
    );
  }
}

//

export default SideBar;

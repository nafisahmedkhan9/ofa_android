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
  Picker,
  Textarea,
  View,
  Footer,
  Drawer
} from "native-base";
import { FlatList, ToastAndroid, Linking } from "react-native";

// import constant
import * as Constant from "../constant";

import CSS from "../styles/common_sty";

// import connect
import { connect } from "react-redux";

// import bindActionCreator
import { bindActionCreators } from "redux";

import SideBar from "./comp_sidebar";

class Attandance extends Component {
  constructor() {
    super();
    this.state = {
      attendance: []
    };
  }

  componentWillMount() {
    // alert(Constant.API_URL + "attendance/?employee" + this.props.user.id);
    fetch(Constant.API_URL + "attendance/?employee=" + this.props.user.id, {
      method: "GET",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        // alert(JSON.Stringify(responseJson))
        this.setState({
          attendance: responseJson.results
        });
      })
      .catch(error => {
        ToastAndroid.show("update task Error" + error, ToastAndroid.LONG);
      });
  }

  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        tapToClose={true}
        content={
          <SideBar
            navigator={this.props.navigation}
            pagename={"attendance"}
            username={this.props.user.username}
            profile_pic={this.props.user.profile_pic}
          />
        }
        onClose={() => this.closeDrawer()}
      >
        <Container>
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => {
                  this.openDrawer();
                }}
              >
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Attandance</Title>
            </Body>
          </Header>
          <Content>
            <FlatList
              data={this.state.attendance}
              renderItem={({ item, index }) => (
                <Card>
                  <CardItem header>
                    <Body>
                      <Text style={{ fontWeight: "200" }}>
                        {item.details.task.title}
                      </Text>
                      <Text style={{ fontSize: 14, opacity: 0.5 }}>
                        {item.details.task.description}
                      </Text>
                      <Text note style={{ flex: 1 }}>
                        {item.details.task.status == "Completed" ? (
                          <Text
                            note
                            style={{ alignSelf: "flex-start", color: "green" }}
                          >
                            {item.details.task.status}
                          </Text>
                        ) : (
                          <Text
                            note
                            style={{ alignSelf: "flex-start", color: "orange" }}
                          >
                            {item.details.task.status}
                          </Text>
                        )}

                        <Text note style={{ alignSelf: "flex-end" }}>
                          {"            " + item.date}
                        </Text>
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
              )}
              keyExtractor={index => index.toString()}
            />
          </Content>
        </Container>
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Attandance);

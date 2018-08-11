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
  Footer
} from "native-base";
import { FlatList, ToastAndroid } from "react-native";

// import constant
import * as Constant from "../constant";
class MyTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskDetail: {},
      taskStatus: "1"
    };
  }

  componentWillMount() {
    const { navigation } = this.props;
    let taskDetail = navigation.getParam("taskDetail");

    this.setState({
      taskDetail: taskDetail
    });
  }

  updateTask() {
    console.log(this.state.taskDetail);
    fetch(Constant.API_URL + "/task/" + this.state.taskDetail.id + "/", {
      method: "PUT",
      body: this.state.taskDetail,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.count > 0) {
          alert("data " + JSON.stringify(responseJson));
          // dispatch(getDataSuccess(responseJson.results));
          //   navigation.replace("TaskList");
        } else {
          alert("got task update error, please check your internet connection");
        }
      })
      .catch(error => {
        ToastAndroid.show("update task Error" + error, ToastAndroid.LONG);
      });
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>My Task</Title>
          </Body>
        </Header>
        <Content>
          <Card>
            <CardItem header>
              <Body>
                <Text>{this.state.taskDetail.title}</Text>
                <Text note>{this.state.taskDetail.date}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{this.state.taskDetail.description}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{this.state.taskDetail.address}</Text>
              </Body>
            </CardItem>

            <CardItem>
              <Label>Select Task Status</Label>
            </CardItem>
            <CardItem>
              <Picker
                bordered
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                placeholder="Select Volume"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.taskStatus}
                onValueChange={(value, index) => {
                  this.setState({
                    taskStatus: value
                  });
                }}
              >
                <Picker.Item label="Not Attempted" value="1" />
                <Picker.Item label="Attempted" value="2" />
                <Picker.Item label="Completed" value="3" />
              </Picker>
            </CardItem>
            <CardItem>
              <Label>Remark</Label>
            </CardItem>
            <CardItem>
              <Textarea
                bordered
                width={"100%"}
                height={70}
                // onChangeText={fullAddress =>
                //   this.setUserAddress("fullAddress", fullAddress)
                // }
              />
            </CardItem>
          </Card>
        </Content>

        <Button
          full
          onPress={() => {
            this.updateTask();
          }}
        >
          <Text>Submit</Text>
        </Button>
      </Container>
    );
  }
}

export default MyTask;

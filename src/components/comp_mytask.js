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
import { FlatList, ToastAndroid, Linking } from "react-native";

// import constant
import * as Constant from "../constant";

import CSS from "../styles/common_sty";
class MyTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskDetail: {},
      taskStatus: "1",
      comment: ""
    };
  }

  componentWillMount() {
    const { navigation } = this.props;
    let taskDetail = navigation.getParam("taskDetail");

    this.setState(
      {
        taskDetail: taskDetail,
        taskStatus: taskDetail["status"] + "",
        comment: taskDetail["comment"]
      },
      () => {}
    );
  }

  updateTask() {
    let taskDetail = Object.assign({}, this.state.taskDetail);
    taskDetail["status"] = this.state.taskStatus;
    taskDetail["comment"] = this.state.comment;

    this.setState(
      {
        taskDetail: taskDetail
      },
      () => {
        fetch(Constant.API_URL + "task/" + this.state.taskDetail.id + "/", {
          method: "PUT",
          body: JSON.stringify(this.state.taskDetail),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
          .then(response => response.json())
          .then(responseJson => {
            alert("Successfully Updated your task");

            this.getLocationWithCompareDistance();
          })
          .catch(error => {
            ToastAndroid.show("update task Error" + error, ToastAndroid.LONG);
          });
      }
    );
  }

  rad(x) {
    return (x * Math.PI) / 180;
  }
  getDistance(p1, p2) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = this.rad(p2.lat - p1.lat);
    var dLong = this.rad(p2.lng - p1.lng);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.rad(p1.lat)) *
        Math.cos(this.rad(p2.lat)) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d; // returns the distance in meter
  }

  formatDate(date) {
    var monthNames = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return year + "-" + monthNames[monthIndex] + "-" + day;
  }

  getLocationWithCompareDistance() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        const location = this.state.taskDetail.address.split(",");
        let taskLocation = {
          lat: location[0],
          lng: location[1]
        };
        let currentLocation = {
          lat: latitude,
          lng: longitude
        };

        var distance = this.getDistance(taskLocation, currentLocation);
        if (distance <= 50) {
          let attendance = {
            date: this.formatDate(new Date()),
            employee: this.state.taskDetail.assignedTo,
            attendance: 1,
            task: this.state.taskDetail.id
          };
          fetch(Constant.API_URL + "attendance/", {
            method: "POST",
            body: JSON.stringify(attendance),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          })
            .then(response => response.json())
            .then(responseJson => {
              // alert(JSON.stringify(responseJson));
            })
            .catch(error => {
              ToastAndroid.show("update task Error" + error, ToastAndroid.LONG);
            });
        } else {
          alert(
            "We are watching you, Plz go to your's task location and complete task"
          );
        }
        this.props.navigation.replace("TaskList");
      },
      error => {
        alert(
          "Either your internet connection is dead or your GPS is not working correctly. Plz Give me Permission to access Location"
        );
        return { lat: -1, long: -1 };
      },

      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Task Details</Title>
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
                <Text
                  onPress={() => {
                    Linking.openURL(
                      "https://maps.google.com/?q=" +
                        this.state.taskDetail.address
                    );
                  }}
                  style={[CSS.textblue]}
                >
                  Click Here to see your task location
                </Text>
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
              <Label>Comment</Label>
            </CardItem>
            <CardItem>
              <Textarea
                bordered
                width={"100%"}
                height={70}
                onChangeText={comment =>
                  this.setState({
                    comment: comment
                  })
                }
                value={this.state.comment}
              />
            </CardItem>
          </Card>
        </Content>

        <Button
          full
          onPress={() => {
            this.updateTask();
          }}
          disabled={this.state.taskStatus == "1"}
        >
          <Text>Submit</Text>
        </Button>
      </Container>
    );
  }
}

export default MyTask;

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

// import actions
import { getTasks } from "../actions/task-actions";

// import connect
import { connect } from "react-redux";

// import bindActionCreator
import { bindActionCreators } from "redux";

import SideBar from "./comp_sidebar";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToTaskDetails(index) {
    this.props.navigation.push("MyTask", {
      taskDetail: this.props.tasks.data[index]
    });
  }

  componentWillMount() {
    this.props.onGetTasks(this.props.user.id);
  }
  componentDidMount() {
    this.drawer._root.close();
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
            pagename={"tasklist"}
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
              <Title>Task List</Title>
            </Body>
          </Header>
          <Content>
            <FlatList
              data={this.props.tasks.data}
              renderItem={({ item, index }) => (
                <Card>
                  <CardItem
                    header
                    button
                    onPress={() => this.goToTaskDetails(index)}
                  >
                    <Body>
                      <Text>{item.title}</Text>
                      <Text note>{item.date}</Text>
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
  user: state.user,
  tasks: state.tasks
});

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      onGetTasks: getTasks
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(TaskList);

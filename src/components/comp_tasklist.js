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
  CardItem
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
    // alert("user " + JSON.stringify(this.props));
    this.props.onGetTasks(this.props.user.id);
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

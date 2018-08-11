import React, { Component } from "react";
import { Image, FlatList } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base";

class Room extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <FlatList
            data={[
              {
                key: {
                  title: "2 BHK Flat",
                  sub_tile: "address",
                  image: "https://tinyurl.com/y85k7g47",
                  rating: "3.6/5",
                  comments: "4",
                  time: "11 hours ago"
                }
              }
            ]}
            renderItem={({ item }) => (
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail
                      source={{
                        uri:
                          "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.9/screenshots/ios/card-list.png"
                      }}
                    />
                    <Body>
                      <Text>{item.key.title}</Text>
                      <Text note>address</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    source={{
                      uri:
                        "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.9/screenshots/ios/card-list.png"
                    }}
                    style={{
                      height: 200,
                      width: null,
                      flex: 1,
                      resizeMode: "stretch"
                    }}
                  />
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent style={{ paddingRight: 0 }}>
                      <Icon active name="star" />

                      <Text>4.5/5</Text>
                    </Button>
                  </Left>
                  <Body>
                    <Button transparent style={{ paddingRight: 0 }}>
                      <Icon active name="chatbubbles" />
                      <Text style={{ paddingLeft: 1, paddingRight: 0 }}>
                        4 Comments
                      </Text>
                    </Button>
                  </Body>
                  <Right>
                    <Text>11h ago</Text>
                  </Right>
                </CardItem>
              </Card>
            )}
            keyExtractor={item => item.toString()}
          />
        </Content>
      </Container>
    );
  }
}

export default Room;

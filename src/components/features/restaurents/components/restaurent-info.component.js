import React from "react";
import { Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export const restaurentInfo = ({ restaurent = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://media-cdn.tripadvisor.com/media/photo-s/15/c4/f0/44/la-joce-la-pizz-de-la.jpg",
    ],
    address = "100 random street",
    isOpenNow = true,
    rating = 3,
    isClosedTemporarily,
  } = restaurent;
  return (
    <Card>
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={LeftContent}
      />
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph>{photos}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

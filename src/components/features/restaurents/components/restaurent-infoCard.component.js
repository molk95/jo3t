import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: "#fff";
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: 20;
  background-color: "#fff";
`;

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const restaurentInfoCard = ({ restaurent = {} }) => {
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
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

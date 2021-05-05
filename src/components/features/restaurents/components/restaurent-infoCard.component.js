import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  ${(props) => props.theme.spacing.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-familty: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.sizes.body};
`;
const Info = styled.Text`
  ${(props) => props.theme.spacing.space[3]};
`;
const Address = styled.Text`
  ${(props) => props.theme.spacing.space[3]};
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
      <Info>
        <Title>{name}</Title>
        <Address>{name}</Address>
      </Info>
    </RestaurantCard>
  );
};

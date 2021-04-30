import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

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
    <Card elevation={5} style={styles.Card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  Card: {
    backfaceVisibility: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    padding: 16,
  },
});

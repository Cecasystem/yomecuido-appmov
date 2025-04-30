import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import fonts from "../theme/fonts";
import colors from "../theme/colors";

export default function TipCard({ title, image, description, delay = 0 }) {
  return (
    <Animated.View
      entering={FadeInUp.duration(500).delay(delay)}
      style={styles.wrapper}
    >
      <View style={styles.card}>
        <Text style={[styles.title, fonts().subtitle]}>{title}</Text>
        <Image source={image} style={styles.image} resizeMode="contain" />
        <Text style={[styles.description, fonts().text]}>{description}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.07)",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
  title: {
    color: colors.light.text,
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  image: {
    width: 170,
    height: 120,
    borderRadius: 20,
    marginBottom: 10,
  },
  description: {
    color: colors.light.text,
    textAlign: "justify",
    lineHeight: 20,
  },
});

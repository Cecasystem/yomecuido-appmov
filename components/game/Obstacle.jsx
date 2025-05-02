import React from "react";
import { View } from "react-native";

export default function Obstacle({ body, color }) {
  const size = 50;
  const x = body.position.x - size / 2;
  const y = body.position.y - size / 2;

  return (
    <View
      style={{
        position: "absolute",
        width: size,
        height: size,
        backgroundColor: color || "#F44336",
        left: x,
        top: y,
        borderRadius: 5,
      }}
    />
  );
}

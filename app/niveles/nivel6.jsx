// views/niveles/NivelJuegoRedes.jsx
import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import MyButton from "../../components/Button";
import { useRouter } from "expo-router";
import fonts from "../../theme/fonts";
import { CheckIcon } from "../../components/Icons";

export default function Nivel6() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/backgrounds/background3.webp")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={[fonts().title, styles.title]}>
          🛡️ Escape del Ciberpeligro
        </Text>

        <Text style={[fonts().text, styles.descripcion]}>
          En este juego deberás esquivar amenazas digitales como enlaces falsos,
          perfiles sospechosos y ventanas emergentes peligrosas. Tu objetivo es
          llegar al final recolectando símbolos de seguridad y evitando los
          peligros de internet.
        </Text>

        <View style={styles.listaInstrucciones}>
          <View style={styles.item}>
            <CheckIcon color="green" />
            <Text style={styles.itemText}>
              Desliza hacia arriba o abajo para esquivar amenazas.
            </Text>
          </View>
          <View style={styles.item}>
            <CheckIcon color="green" />
            <Text style={styles.itemText}>
              Recoge íconos como escudos, candados y verificación segura.
            </Text>
          </View>
          <View style={styles.item}>
            <CheckIcon color="green" />
            <Text style={styles.itemText}>
              Evita los pop-ups y solicitudes falsas que restan vida.
            </Text>
          </View>
        </View>

        <MyButton
          text="¡Jugar ahora!"
          onPress={() => router.push("/niveles/NivelJuegoRedesEngine")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
  descripcion: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    marginBottom: 30,
  },
  listaInstrucciones: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 30,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 8,
  },
});

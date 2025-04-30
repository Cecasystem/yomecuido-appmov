import React from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import TipCard from "../../components/TipCard";
import Navbar from "../../components/Navbar";
import fonts from "../../theme/fonts";
import colors from "../../theme/colors";

const tips = [
  {
    title: "Enlace peligroso",
    image: require("../../assets/images/tips_enlaces/robotsconpantsos.webp"),
    description:
      "Es un enlace que lleva a un sitio web que puede ser peligroso para ti o tu dispositivo.",
  },
  {
    title: "El enlace empieza con 'https'",
    image: require("../../assets/images/tips_enlaces/imagen_https.webp"),
    description:
      "HTTPS confirma que la página es segura, pero no garantiza que sea confiable.",
  },
  {
    title: "Revisa bien el nombre del enlace",
    image: require("../../assets/images/tips_enlaces/httpsohttp.webp"),
    description:
      "Algunos links alteran letras sutilmente para engañarte. ¡Mira con atención!",
  },
  {
    title: "No confíes en enlaces acortados",
    image: require("../../assets/images/tips_enlaces/cortadorlinks.webp"),
    description:
      "Evita links tipo bit.ly, tinyurl o cutt.ly. Pueden ocultar páginas peligrosas.",
  },
  {
    title: "Evita enlaces enviados por desconocidos",
    image: require("../../assets/images/tips_enlaces/enmascarado.webp"),
    description:
      "Si alguien que no conoces te envía un link, ¡no lo abras!",
  },
  {
    title: "Si te piden datos personales, SOSPECHA",
    image: require("../../assets/images/tips_enlaces/formulario.webp"),
    description:
      "Ningún banco ni empresa seria te pedirá contraseñas mediante enlaces.",
  },
];

export default function EnlacesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/backgrounds/background3.webp")}
        style={styles.background}
        resizeMode="cover"
      >
        <Navbar />

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Título principal */}
          <Text style={[styles.header, fonts().title]}>
            ¿Qué es un enlace malicioso?
          </Text>

          {/* Primera tarjeta destacada */}
          <TipCard
            title={tips[0].title}
            image={tips[0].image}
            description={tips[0].description}
            delay={0}
          />

          <View style={styles.separator} />

          <Text style={[styles.subHeader, fonts().subtitle]}>
            Tips para protegerte
          </Text>

          <View style={styles.tipsContainer}>
            {tips.slice(1).map((tip, index) => (
              <TipCard
                key={index}
                title={tip.title}
                image={tip.image}
                description={tip.description}
                delay={(index + 1) * 120} // animación escalonada
              />
            ))}
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  background: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 50,
  },
  header: {
    color: colors.light.text,
    textAlign: "center",
    marginBottom: 20,
    fontSize: 32,
  },
  subHeader: {
    color: colors.light.text,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
    fontSize: 24,
  },
  tipsContainer: {
    gap: 15,
  },
  separator: {
    height: 2,
    backgroundColor: "white",
    marginVertical: 20,
    width: "50%",
    alignSelf: "center",
    borderRadius: 5,
  },
});

const dataNivelLibro1 = {
  titulo: "Cuento: La Aventura de las Contraseñas",
  historia: [
    {
      imagen: require("../assets/images/niveles/nivel1/escena1.png"),
      texto: "César era un chico que quería ser parte de un grupo de su salon, todos hablaban de lo que habían posteado en sus redes sociales...",
    },
    {
      imagen: require("../assets/images/niveles/nivel1/escena2.jpg"),
      texto: "estaba pensando como ser parte de ese grupo de su clase ya que el no era muy popular ni tampoco tenia redes sociales...",
    },
    {
      imagen: require("../assets/images/niveles/nivel1/escena3.jpg"),
      texto: "Decidido por encajar se adentro al mundo digital para tener su propia cuenta, empezo a investigar como crear su cuenta de google y poder usarlo en sus redes sociales...",
    },
    {
      imagen: require("../assets/images/niveles/nivel1/escena4.jpg"),
      texto: "Lamentablemente, César no sabía que usar contraseñas simples es peligroso, porque las contraseñas sirven para proteger tu información y tus dispositivos de personas no autorizadas.",
    },
    {
      imagen: require("../assets/images/niveles/nivel1/escena5.jpg"),
      texto: "Estaba tan entusiasmado en crear su cuenta que descuido por completo lo seguras que tenian que ser sus contraseñas...",
    },
    {
      imagen: require("../assets/images/niveles/nivel1/escena6.jpg"),
      texto: "No le puso simbolos, ni tampoco numeros dificiles de adivinar",
    },
  ],
  preguntas: [
    {
      enunciado: "sabiendo la historia ¿Cual contraseña crees que uso Cesar?",
      opciones: ["cesar123", "cesar&5321", "Cesar@2025", "CesaR_2012"],
      respuestaCorrecta: "cesar123",
      reflexion: "Recuerda, César estaba tan entusiasmado que no puso mucho interes en hacer su contraseña"
    },
    {
      enunciado: "¿Por qué las contraseñas son importantes?",
      opciones: [
        "sirven para proteger tu información",
        "no son importantes, igualmente creas tu cuenta",
        "sirven para mejorar tu memoria",
        "sirven para mejorar tu creatividad"
      ],
      respuestaCorrecta: "sirven para proteger tu información",
      reflexion: "Recuerda, las contraseñas son muy importantes para tus dispositivos de accesos no autorizados"
    },
    {
      enunciado: "¿cuál contraseña es la más segura?",
      opciones: ["cesar_123", "cesar_321", "Cesar_321", "ce5ar@6535"],
      respuestaCorrecta: "ce5ar@6535",
      reflexion: "Recuerda, las contraseñas seguras son aquellas que tienen al menos 8 caracteres, 1 mayuscula, un simbolo y números no secuenciales"
    },
    {
      enunciado: "¿Cuál de estas contraseñas deberías evitar?",
      opciones: ["12345678", "C3sar!2024", "mi_cuenta@23", "Cesar2025*"],
      respuestaCorrecta: "12345678",
      reflexion: "Evita contraseñas comunes y fáciles de adivinar, como secuencias numéricas simples."
    },
    {
      enunciado: "¿Qué buena práctica debería seguir César al crear su contraseña?",
      opciones: [
        "Usar su nombre y fecha de cumpleaños",
        "Hacer una contraseña corta y fácil",
        "Incluir símbolos, mayúsculas y números",
        "Compartirla con sus amigos de confianza"
      ],
      respuestaCorrecta: "Incluir símbolos, mayúsculas y números",
      reflexion: "Combinar diferentes tipos de caracteres hace tu contraseña más segura."
    },
    {
      enunciado: "¿Qué le recomendarías a César ahora que ya tiene una cuenta?",
      opciones: [
        "Anotar su contraseña en su cuaderno",
        "Cambiar su contraseña cada semana",
        "Usar la misma contraseña en todas las cuentas",
        "Activar la verificación en dos pasos"
      ],
      respuestaCorrecta: "Activar la verificación en dos pasos",
      reflexion: "La verificación en dos pasos añade una capa extra de seguridad a tus cuentas."
    },
  ],
  retroalimentacion: [
    {
      correcto: "muy bien, esa es una contraseña facil de adivinar y la cual escogio César"
    },
    {
      correcto: "excelente, la contraseñas no pueden ser tomadas a la ligera"
    },
    {
      correcto: "excelente, esta contraseña es la mejor porque contiene mayusculas, simbolos, numeros no secuenciales"
    },
    {
      correcto: "correcto, 12345678 es una de las contraseñas más inseguras del mundo"
    },
    {
      correcto: "¡Bien! Esa es una práctica recomendada al crear contraseñas fuertes"
    },
    {
      correcto: "Perfecto, la verificación en dos pasos protege tu cuenta incluso si alguien descubre tu contraseña"
    },
  ]
};

export default dataNivelLibro1;

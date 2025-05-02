// views/niveles/NivelJuegoRedesEngine.jsx
import React, { useRef, useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Matter from "matter-js";
import Player from "../../components/game/Player";
import Obstacle from "../../components/game/Obstacle";
import GameLoop from "../../components/game/GameLoop";

export default function NivelJuegoRedesEngine({ onGameOver }) {
    const playerRef = useRef();
    const [gameOver, setGameOver] = useState(false);
    const engine = useRef(Matter.Engine.create({ enableSleeping: false })).current;
    const world = engine.world;

    // Crear entidades
    const player = Matter.Bodies.rectangle(50, 300, 50, 50);
    const obstacle = Matter.Bodies.rectangle(300, 300, 50, 50, { isStatic: true });

    Matter.World.add(world, [player, obstacle]);

    const entities = {
        physics: { engine, world },
        player: { body: player, color: "#4CAF50", renderer: Player },


        obstacle: { body: obstacle, color: "#F44336", renderer: Obstacle },
    };

    const movePlayer = (direction) => {
        const body = player; // el cuerpo del jugador ya está definido
      
        if (direction === "left") {
          Matter.Body.setPosition(body, {
            x: body.position.x - 10,
            y: body.position.y,
          });
        } else if (direction === "right") {
          Matter.Body.setPosition(body, {
            x: body.position.x + 10,
            y: body.position.y,
          });
        }
      };

    const handleEvent = (e) => {
        if (e.type === "game-over") {
            setGameOver(true);
            if (onGameOver) onGameOver();
        }
    };

    return (
        <View style={styles.container}>
            <GameEngine
                systems={[GameLoop]}
                entities={entities}
                onEvent={handleEvent}
                style={styles.gameEngine}
            >
                {gameOver && <Text style={styles.gameOverText}>¡Juego terminado!</Text>}
            </GameEngine>
            <View style={styles.controls}>
                <Pressable onPress={() => movePlayer("left")} style={styles.controlButton}>
                    <Text style={styles.controlText}>⬅</Text>
                </Pressable>
                <Pressable onPress={() => movePlayer("right")} style={styles.controlButton}>
                    <Text style={styles.controlText}>➡</Text>
                </Pressable>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111",
    },
    gameEngine: {
        flex: 1,
    },
    gameOverText: {
        position: "absolute",
        top: 50,
        width: "100%",
        textAlign: "center",
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },
    controls: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 20,
        backgroundColor: "#222",
      },
      controlButton: {
        backgroundColor: "#4B0076",
        padding: 20,
        borderRadius: 12,
      },
      controlText: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "bold",
      },
      
});

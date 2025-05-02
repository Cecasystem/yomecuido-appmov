export default function GameLoop(entities, { touches }) {
  const player = entities.player;
  const obstacle = entities.obstacle;

  touches.filter(t => t.type === "press").forEach(t => {
    if (t.event.pageX < 200) {
      // izquierda
      player.body.position.x -= 10;
    } else {
      // derecha
      player.body.position.x += 10;
    }
  });

  // Detectar colisión
  const playerPos = player.body.position;
  const obstaclePos = obstacle.body.position;
  const playerSize = 50;
  const obstacleSize = 50;

  const colision =
    playerPos.x < obstaclePos.x + obstacleSize &&
    playerPos.x + playerSize > obstaclePos.x &&
    playerPos.y < obstaclePos.y + obstacleSize &&
    playerPos.y + playerSize > obstaclePos.y;

  if (colision) {
    console.log("💥 Colisión detectada");
  }

  return entities;
}

import { Actor, Color, Engine, Keys, vec } from "excalibur";

export class Player extends Actor {
    // Propriedades do player
    private velocidade: number = 180


    // Configuração do Player
    constructor() {
        super({
            pos: vec(600, 600),
            width: 32,
            height: 32,
            name: "jogador",
            color: Color.Red
        })
    }

    onInitialize(engine: Engine<any>): void {
        // Configurar player para monitorar evento "hold" -> segurar tecla
        engine.input.keyboard.on("hold", (event) => {
            // Detectar qual tecla está pressionada
            switch (event.key) {
                case Keys.Left:
                case Keys.A:
                    // Mover para a esquerda
                    // Define a velocidade x para negativa, que significa movimentar o player para a esquerda
                    this.vel.x = -this.velocidade
                    break;

                case Keys.Right:
                case Keys.D:
                    // Mover para a direita
                    // Define a velocidade x para positiva, que significa movimentar o player para a direita
                    this.vel.x = this.velocidade
                    break;

                case Keys.Up:
                case Keys.W:
                    // Mover para cima
                    // Define a velocidade y para negativa, que significa movimentar o player para cima
                    this.vel.y = -this.velocidade

                    break;

                case Keys.Down:
                case Keys.S:
                    // Mover para baixo
                    // Define a velocidade y para positiva, que significa movimentar o player para cima
                    this.vel.y = this.velocidade

                    break;

                default:
                    // Zera a movimentação do Player, PARA a movimentação
                    this.vel.x = 0
                    this.vel.y = 0

                    break;
            }
        })

        // Configurar o player para monitorar o evento "Realese" -> soltar a tela
        engine.input.keyboard.on("release", (event) => {
            // Fazer o player parar ao soltar as teclas de movimentação lateral
            if(
                event.key == Keys.A ||
                event.key == Keys.Left ||
                event.key == Keys.D ||
                event.key == Keys.Right 
            ) {
                // Zerar velocidade horizontal
                this.vel.x = 0
            }

            if (
                event.key == Keys.W ||
                event.key == Keys.Up ||
                event.key == Keys.S ||
                event.key == Keys.Down
            ) {
                // Zerar velocidade vertical
                this.vel.y = 0
            }
        })
    }

}
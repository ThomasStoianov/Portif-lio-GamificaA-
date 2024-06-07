import { Actor, Color, Engine, Keys, Scene, SceneActivationContext, vec } from "excalibur";
import { Resources } from "../resources";

export class gamificationScene extends Scene {

    TextoElemento?: HTMLElement

      // Metodo para esmaecer um elemento HTML
      fadeOutElement(elemento: HTMLElement) {

        console.log(elemento)

        // Pegar opacidade do elemento HTML
        let opacidade = parseFloat(elemento.style.opacity)

        setInterval(() => {

            // Se elemeto ainda está visível
            if (opacidade > 0) {
                // Diminuir a opacidade
                opacidade = opacidade - 0.03

                // Atualizar a opacidade do elemento
                elemento.style.opacity = opacidade.toString()

            }
        }, 20)

    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        this.TextoElemento = document.createElement("div") as HTMLElement

        let GameContainer = document.querySelector(".container-game") as HTMLElement
        GameContainer.appendChild(this.TextoElemento)

        this.TextoElemento.innerHTML = `<h2>O que é gamificação</h2>
        <p>Gamificação é a aplicação de elementos típicos de jogos em contextos não lúdicos, com o objetivo de engajar e motivar indivíduos a atingir determinados objetivos. Esta abordagem se utiliza de componentes como pontuação, níveis, recompensas, desafios, e feedback imediato, visando promover comportamentos desejados e aumentar a participação e o comprometimento dos participantes.</p>`

        this.TextoElemento.classList.add("gamificacao")

        let actorGamificacao = new Actor({
            pos: vec(engine.drawWidth - 1000, engine.halfDrawHeight)
        })

        let imagemGamificacao = Resources.Gamificacao.toSprite()
        imagemGamificacao.scale = vec(0.4, 0.4)

        actorGamificacao.graphics.add(imagemGamificacao)

        this.add(actorGamificacao)

        // Configurar a cena para detectar a tecla Enter e ir para a próxima cena
        this.input.keyboard.on("press", (event) => {
            if(event.key == Keys.Enter) {

                this.fadeOutElement(this.TextoElemento!)
                engine.goToScene("exposicao")
            }
        })
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        this.TextoElemento?.remove()
    }
}
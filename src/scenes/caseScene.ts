import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class caseScene extends Scene {
    private objetoInteracao: any

    private textoDaCena: string = ''

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 500
        })
    }

    elementoTexto?: HTMLElement

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray

    }

    onActivate(context: SceneActivationContext<unknown>): void {
        // Pegar dados vindos da cena passada
        this.objetoInteracao = context.data

        console.log(this.objetoInteracao);

        // Se a mesa a
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_a") {
            this.textoDaCena = "Essa é a descrição do case A"


            this.elementoTexto = document.createElement("div") as HTMLElement
            this.elementoTexto.style.opacity = "1"
            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame.appendChild(this.elementoTexto)
            this.elementoTexto.classList.add("sobre-gamifica")
            this.elementoTexto.innerHTML = `<h2>Escola</h2>
        <p>Fizemos a conta de luz de uma escola reduzir em 50% após propormos recompensas para as turmas que mais economizarem
        energia, essas recompensas foram menor número de lições e maior tempo de intervalo</p>`

            let actorLogoVertical = new Actor({
                pos: vec(this.engine.drawWidth - 300, this.engine.halfDrawHeight)
            })

            let imagemVertical = Resources.Escola.toSprite()
            imagemVertical.scale = vec(0.1, 0.1)

            actorLogoVertical.graphics.add(imagemVertical)
            this.add(actorLogoVertical)


            this.engine.input.keyboard.on("press", (event) => {
                if (event.key == Keys.Esc) {

                    this.engine.goToScene("exposicao")

                }
            })
        }


        // Se a mesa b
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_b") {
            this.textoDaCena = "Essa é a descrição do case B"


            this.elementoTexto = document.createElement("div") as HTMLElement
            this.elementoTexto.style.opacity = "1"
            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame.appendChild(this.elementoTexto)
            this.elementoTexto.classList.add("sobre-gamifica")
            this.elementoTexto.innerHTML = `<h2>Escritório</h2>
        <p>Fizemos a produtividade de uma empresa de papel crescer em um significativo aumento após implementarmos um modelo de de gamificação onde os funcionários são premiados com dias de folga ou 1 hora a menos nas sextas-feiras dependendo de sua produtividade</p>`


            let actorLogoVertical = new Actor({
                pos: vec(this.engine.drawWidth - 250, this.engine.halfDrawHeight)
            })

            let imagemVertical = Resources.Escritorio.toSprite()
            imagemVertical.scale = vec(0.1, 0.1)

            actorLogoVertical.graphics.add(imagemVertical)
            this.add(actorLogoVertical)


            this.engine.input.keyboard.on("press", (event) => {
                if (event.key == Keys.Esc) {

                    this.engine.goToScene("exposicao")

                }
            })
        }


        // Se a mesa c
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_c") {
            this.textoDaCena = "Essa é a descrição do case C"


            this.elementoTexto = document.createElement("div") as HTMLElement
            this.elementoTexto.style.opacity = "1"
            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame.appendChild(this.elementoTexto)
            this.elementoTexto.classList.add("sobre-gamifica")
            this.elementoTexto.innerHTML = `<h2>Escritório</h2>
        <p>Fizemos a produtividade de uma empresa de papel crescer em um significativo aumento após implementarmos um modelo de de gamificação onde os funcionários são premiados com dias de folga ou 1 hora a menos nas sextas-feiras dependendo de sua produtividade</p>`


            let actorLogoVertical = new Actor({
                pos: vec(this.engine.drawWidth - 300, this.engine.halfDrawHeight)
            })

            let imagemVertical = Resources.Escola.toSprite()
            imagemVertical.scale = vec(0.1, 0.1)

            actorLogoVertical.graphics.add(imagemVertical)
            this.add(actorLogoVertical)


            this.engine.input.keyboard.on("press", (event) => {
                if (event.key == Keys.Esc) {

                    this.engine.goToScene("exposicao")


                }
            })
        }


    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        this.elementoTexto?.remove()
    }
}
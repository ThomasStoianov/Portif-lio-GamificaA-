import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class caseScene extends Scene {
    private objetoInteracao: any

    private textoDaCena: string = ""
    private textoDoCase: string = ""

    elementoTexto?: HTMLElement

    fadeOutElement(element: HTMLElement) {
        let opacidade = parseFloat(element.style.opacity);
        setInterval(() => {
            if (opacidade > 0) {
                opacidade -= 0.03
    
                element.style.opacity = opacidade.toString()
            }
        }, 10)
    }

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 50,
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray

        this.elementoTexto = document.createElement("div") as HTMLElement

        this.elementoTexto.style.opacity = "1"

        let container_gamer = document.querySelector(".container-game") as HTMLElement
        container_gamer.appendChild(this.elementoTexto)

        this.elementoTexto.classList.add("cases")
        
        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Esc) {
                engine.goToScene("exposicao", {
                    sourceOut: new FadeInOut ({duration: 500})
                })
                this.fadeOutElement(this.elementoTexto!)
            }
        })
    }

    onActivate(context: SceneActivationContext<unknown>): void {
        this.objetoInteracao = context.data
        this.elementoTexto!.style.opacity = "1"

        if (this.objetoInteracao.nomeDoActor == "mesa_stand_a"){
            
        this.elementoTexto = document.createElement("div") as HTMLElement

        this.elementoTexto.style.opacity = "1"

        let container_gamer = document.querySelector(".container-game") as HTMLElement
        container_gamer.appendChild(this.elementoTexto)

        this.elementoTexto.classList.add("cases")

            this.textoDaCena = "Empresa de Tecnologia: Desafio de Propor e Implementar Ideias Inovadoras"
            this.textoDoCase = "Na nossa empresa de tecnologia, percebemos uma baixa participação dos funcionários no desafio de propor e implementar ideias inovadoras. Para resolver isso, implementamos um sistema de pontos onde os colaboradores são recompensados por propor ideias, votar, comentar e ajudar na implementação. Introduzimos um leaderboard dinâmico atualizado em tempo real para mostrar os principais contribuintes. Dividimos o desafio em missões menores com prazos específicos, o que tornou as metas mais alcançáveis. Além disso, oferecemos feedback imediato sobre as ideias propostas, fazendo com que os funcionários se sintam valorizados e engajados no processo."
            // Adicionar a imagem - graphics add
             

             let actorCases = new Actor({
                pos: vec(this.engine.drawWidth - 300, this.engine.halfDrawHeight),
            })
    
            let imagemCases = Resources.Escola.toSprite()

            imagemCases.scale = vec(0.1, 0.1)
            actorCases.graphics.add(imagemCases)
            this.add(actorCases)

        }

        if (this.objetoInteracao.nomeDoActor == "mesa_stand_b"){


            this.textoDaCena = "Empresa de Consultoria: Narrativa Interativa no Programa de Treinamento"
            this.textoDoCase = "Na nossa empresa de consultoria, enfrentamos o desafio de tornar nosso programa de treinamento mais envolvente. Criamos personagens cativantes e histórias envolventes, permitindo que os participantes tomem decisões que impactam a narrativa. Implementamos uma barra de progresso visual para que os participantes possam acompanhar seu avanço. Também introduzimos recompensas narrativas, como itens virtuais e conquistas, que aumentam a motivação. Essas mudanças tornaram o treinamento mais interessante e engajante, promovendo um aprendizado ativo e envolvente."

            
            let actorCases = new Actor({
                pos: vec(this.engine.drawWidth - 300, this.engine.halfDrawHeight),
            })
    
            let imagemCases = Resources.Escritorio.toSprite()

            imagemCases.scale = vec(0.1, 0.1)
            actorCases.graphics.add(imagemCases)
            this.add(actorCases)

        }

        if (this.objetoInteracao.nomeDoActor == "mesa_stand_c"){
            this.textoDaCena = "Empresa de Vendas: Competição Gamificada entre Equipes"
            this.textoDoCase = "Na nossa empresa de vendas, a competição gamificada entre equipes inicialmente causou alguns conflitos e desmotivação. Para resolver isso, garantimos que as equipes fossem balanceadas e rotacionadas periodicamente, permitindo que todos tivessem a chance de colaborar com diferentes colegas. Estabelecemos metas comuns para incentivar a colaboração entre todas as equipes, criando um senso de união. Além disso, oferecemos recompensas coletivas e individuais, promovemos feedback positivo entre as equipes e organizamos eventos de teambuilding. Essas iniciativas fortaleceram as relações e reduziram a tensão competitiva, criando um ambiente mais harmonioso e motivador."
        }

        // this.add(actorCases)

        this.elementoTexto!.innerHTML = `<h2>${this.textoDaCena}</h2>
        <p>${this.textoDoCase}</p>`
    }

    onDeactivate(_context: SceneActivationContext<undefined>): void {
        this.elementoTexto!.remove()
    }
}
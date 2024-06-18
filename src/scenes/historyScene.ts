import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class historyScene extends Scene {

    // Declaração do elementoTexto
    elementoTexto?: HTMLElement

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

    // Ao entrar ou sair da cena, utiliza o efeito de transição lenta
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })

    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        // Criar um elemento com a descrição da empresa
        this.elementoTexto = document.createElement("div") as HTMLElement

        // Definir opacidade do elemento para 1 = visível
        this.elementoTexto.style.opacity = "1"


        // Inserir elemento texto no container-game
        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.elementoTexto)

        // Adicionar classe na div criada (elementoTexto)
        this.elementoTexto.classList.add("sobre-gamifica")

        // Adicionar título e parágrafo dentro do conteúdo da div
        this.elementoTexto.innerHTML = `<h2>Sobre o GamificaAí</h2>
        <p>Nossa empresa cria soluções de gamificação personalizadas para empresas de todos os tamanhos e setores,
          usando inteligência artificial e design de jogos para desenvolver estratégias interativas que melhoram a
          experiência do usuário e impulsionam resultados. Acreditamos no poder dos jogos e da tecnologia para engajar
          equipes, aumentar a produtividade e motivar, adaptando cada projeto às necessidades específicas do cliente,
          desde programas de treinamento interativo até sistemas de recompensa e engajamento de funcionários.</p>`

        // Adicionar logo vertical
        // Configurar actor do logo vertical
        let actorLogoVertical = new Actor({
            pos: vec(engine.drawWidth - 300, engine.halfDrawHeight)
        })

        // Carregando a imagem do logo
        let imagemVertical = Resources.Imagem.toSprite()

        imagemVertical.scale = vec(0.7, 0.7)

        // Adicionar a imagem no actor
        actorLogoVertical.graphics.add(imagemVertical)

        // Renderizar o actor na cena
        this.add(actorLogoVertical)

        // Configurar a cena para monitorar o evento de tecla pressionada
        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Enter) {

                // Criar transição suave do elemento texto
                this.fadeOutElement(this.elementoTexto!)

                // Direcionar para a proxima cena
                engine.goToScene("gamificacao")
            }
        })
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        // Remover elemento texto da tela
        this.elementoTexto?.remove()
        
    }
}


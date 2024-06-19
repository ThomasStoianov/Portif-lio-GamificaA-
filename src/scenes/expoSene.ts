import { Actor, CollisionType, Color, Engine, FadeInOut, Scene, Transition, vec } from "excalibur";
import { Resources } from "../resources";
import { Player } from "../actors/player";
import { npc } from "../actors/npc";

export class expoScene extends Scene {
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 500
        })
    }

    onInitialize(engine: Engine<any>): void {
        // Ativar o modo de Debug
        engine.toggleDebug()

        // Carregar a música de fundo (BGM) - Background Music
        let musicaFundo = Resources.ClassicBGM

        // Configurar a música e executar
        musicaFundo.loop = true
        musicaFundo.play()
        musicaFundo.volume = 0.3

        
        // Carregar o mapa
        let tiledMap = Resources.Mapa

        // Definir Offset para renderização do mapa
        let offsetX = 138
        let offsetY = 100

        // Adicionar o mapa na cena
        tiledMap.addToScene(this, {
            pos: vec(offsetX,offsetY),
        })

        // Definir zoom da camera para aumentar um pouco a visualização
        this.camera.zoom = 1.4

        // Carregar spawn point do player (ponto de surgimento do player)
        let spawnPoint = tiledMap.getObjectsByName("player_spawn") [0]
        
        // Criação e configuração do jogador
        let jogador = new Player(vec(spawnPoint.x + offsetX, spawnPoint.y + offsetY))

        // Define z-index do player, útil se algum outro elemento ficar "por cima" do jogo
        jogador.z = 1

        // Adicionar o player na cena
        this.add(jogador)

        let npcSpawnPointA = tiledMap.getObjectsByName("npc_a") [0]
        let npcSpawnPointB= tiledMap.getObjectsByName("npc_b") [0]
        let npcSpawnPointC = tiledMap.getObjectsByName("npc_c") [0]

        // Configurar NPCs
        let npcA = new npc(
            vec(npcSpawnPointA.x + offsetX, npcSpawnPointA.y + offsetY),
            Color.Blue,
            "npcA"
        )

        let npcB = new npc(
            vec(npcSpawnPointB.x + offsetX, npcSpawnPointB.y + offsetY),
            Color.Chartreuse,
            "npc_b"
        )

        let npcC = new npc(
            vec(npcSpawnPointC.x + offsetX, npcSpawnPointC.y + offsetY),
            Color.Blue,
            "npc_c"
        )

        this.add(npcA)
        this.add(npcB)
        this.add(npcC)

        // Focar camera no player
        this.camera.strategy.lockToActor(jogador)


        // Adicionar colisão com cada objeto
        // Pegar a camada de objetos colisores
        let camadaObjetosColisores = tiledMap.getObjectLayers("ObjetosColisores") [0]

        console.log(camadaObjetosColisores);

        // Percorrer objetos com forEach e para cada objeto, renderizar um actor
        camadaObjetosColisores.objects.forEach(objeto => {
            // Configurar o actor
            const objetoAtual = new Actor({
                name: objeto.name,
                x: objeto.x + offsetX + (objeto.tiledObject.width! / 2),
                y: objeto.y + offsetY + (objeto.tiledObject.height! / 2),
                width: objeto.tiledObject.width,
                height: objeto.tiledObject.height,
                collisionType: CollisionType.Fixed,
            })

            // Adicionar o colisor do objeto na cena
            this.add(objetoAtual)
        })
        
    }
}
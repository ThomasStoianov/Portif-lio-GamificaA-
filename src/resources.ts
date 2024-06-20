import { ImageFiltering, ImageSource, Loader, Sound } from "excalibur";
import { TiledResource } from "@excaliburjs/plugin-tiled";

import logo from "./images/logo.png"
import imagem from "./images/logo-vertical.png"
import Gamificacao from "./images/gamificacao.png"

import pngTilesetPath from "./Maps/Room_Builder_32x32.png?url"

import tsxParedesPath from "./Maps/tileset_paredes.tsx?url"
import tsxGenericPath from "./Maps/tileset_generic.tsx?url"
import tsxEstoquePath from "./Maps/tileset_estoque.tsx?url"
import tsxBibliotecaPath from "./Maps/tileset_biblioteca.tsx?url"

import tmxMapaPath from "./Maps/showroom_map.tmx?url"

import PlayerSpritePath from "./sprites/player.png"
import npcASpriteSheet from "./sprites/Npc2.png"
import npcBSpriteSheet from "./sprites/Npc3.png"
import npcSpriteSheet from "./sprites/Npc2.png"


import Escola from "./images/escola.jpg"
import Escritorio from "./images/escritorio.jpg"

import ritmada from "./sounds/zelda.mp3"
import classico from "./sounds/ritmadazelda.mp3"



export const Resources = {
  Logo: new ImageSource(logo),
  PlayerSpriteSheet: new ImageSource(PlayerSpritePath, {filtering: ImageFiltering.Pixel}),
  Imagem: new ImageSource(imagem),
  RitmadaBGM: new Sound(ritmada),
  ClassicBGM: new Sound(classico),
  Gamificacao: new ImageSource(Gamificacao),
  Mapa: new TiledResource(tmxMapaPath, {
    pathMap: [
      { path: "showroom_map.tmx",output: tmxMapaPath },
      { path: "Room_Builder_32x32.png", output: pngTilesetPath },
      { path: "tileset_paredes.tsx", output: tsxParedesPath},
      { path: "tileset_generic.tsx", output: tsxGenericPath },
      { path: "tileset_estoque.tsx", output: tsxEstoquePath},
      { path: "tileset_biblioteca.tsx", output: tsxBibliotecaPath}
    ]
  } ),

  Escola: new ImageSource(Escola),
  Escritorio: new ImageSource(Escritorio),

  npcASpriteSheet: new ImageSource(npcASpriteSheet),
  npcBSpriteSheet: new ImageSource(npcBSpriteSheet),
  npcCSpriteSheet: new ImageSource(npcSpriteSheet)
 
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}

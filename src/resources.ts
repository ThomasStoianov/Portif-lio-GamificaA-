import { ImageSource, Loader } from "excalibur";
import logo from "./images/logo.png"
import imagem from "./images/logo-vertical.png"

export const Resources = {
  Logo: new ImageSource(logo),
  Imagem: new ImageSource(imagem)
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}

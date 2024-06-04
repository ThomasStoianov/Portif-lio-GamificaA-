import { ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png";
import logo from "./images/logo.png"

export const Resources = {
  Logo: new ImageSource(logo)
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}

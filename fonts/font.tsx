import { Nanum_Gothic, Open_Sans} from "@next/font/google";

export const nanum_gothic = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["system-ui", "arial"],
});

export const open_sans = Open_Sans({
  subsets: ["latin"],
  weight:["300","400","500","600","700"],
  fallback: ["system-ui"]
})
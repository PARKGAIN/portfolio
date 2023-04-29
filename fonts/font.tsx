import { Nanum_Gothic, Karla } from "@next/font/google";

export const nanum_gothic = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["system-ui", "arial"],
});
export const karla = Karla({
  subsets: ["latin"],
  weight: ["800"],
  fallback: ["system-ui", "arial"],
});

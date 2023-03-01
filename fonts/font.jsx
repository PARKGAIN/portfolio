import { Nanum_Gothic, Noto_Sans_KR } from "@next/font/google";

export const nanum_gothic = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["700"],
  fallback: ["system-ui", "arial"],
});

export const noto_sans_korean = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400"],
  fallback: ["system-ui", "arial"],
});

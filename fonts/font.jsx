import { Nanum_Gothic } from "@next/font/google";

const nanum_gothic = Nanum_Gothic({
  subsets: ["korean", "latin"],
  weight: ["700"],
  fallback: ["system-ui", "arial"],
});

module.exports = nanum_gothic;

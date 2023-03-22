import "./globals.css";
import { NextSeo } from "next-seo";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <NextSeo
      title="parkgain portfolio"
      description="frontend developer parkgain portfolio"
      noindex={true}
      useAppDir={true}
    />
      <head />
      <body>{children}</body>
    </html>
  );
}

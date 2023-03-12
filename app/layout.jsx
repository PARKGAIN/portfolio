import "./globals.css";
import { NextSeo } from "next-seo";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-36GQRC58RX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());

      gtag('config', 'G-36GQRC58RX');
    </script>
      <head />
      <body>{children}</body>
    </html>
  );
}

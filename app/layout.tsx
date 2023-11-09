function RootLayout({ children }: React.PropsWithChildren<{}>): JSX.Element {
    return (
        <html lang="ko">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body>{children}</body>
        </html>
    )
}

export default RootLayout

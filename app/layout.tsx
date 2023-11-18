import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '개발자 포트폴리오',
    description: '개발자 박가인 포트폴리오',
}

export default function RootLayout({
    children,
}: React.PropsWithChildren<{}>): JSX.Element {
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

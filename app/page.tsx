'use client'
import Contact from 'components/Contact'
import Header from 'components/Header'
import './index.css'
import { Button, Space } from 'antd'
import About from 'components/About'
import { NextSeo } from 'next-seo'
import { useState } from 'react'
import { FloatButton } from 'antd'
import { CommentOutlined } from '@ant-design/icons'

const Page = () => {
    const [isButtonClicked, setIsButtonClicked] = useState('')
    const handleButtonClick = () => {
        setIsButtonClicked('padding')
    }

    return (
        <>
            <NextSeo
                title="박가인 포트폴리오"
                description="개발자 포트폴리오 "
                openGraph={{
                    type: 'website',
                    url: 'parkgaini.com',
                    title: '박가인 포트폴리오',
                    description: '개발자 박가인 포트폴리오',
                }}
            />
            <div className="background" style={{ position: 'relative' }}>
                <div className="page_container flex-container">
                    <Header />
                    <Space wrap>
                        <Button
                            type="primary"
                            href="/projects"
                            onClick={handleButtonClick}
                            className={isButtonClicked}>
                            포트폴리오 보러가기
                        </Button>
                    </Space>
                    <About />
                    <Contact />
                    <FloatButton
                        style={{ position: 'absolute' }}
                        href="/chatbot"
                        description={'chatbot'}
                        icon={<CommentOutlined rev={''} />}
                    />
                </div>
            </div>
        </>
    )
}

export default Page

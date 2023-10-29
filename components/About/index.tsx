import { Card } from 'antd'
import Image from 'next/image'
import './index.css'

const { Meta } = Card

const About = () => {
    const descriptionArr = ['안녕하세요', '성장이 고픈 개발자 박가인입니다']

    return (
        <div style={{ margin: '0 auto' }}>
            <Card
                hoverable
                style={{ width: 305, marginTop: '29px', marginBottom: '13px' }}
                cover={
                    <Image
                        src={'/newprofile.jpg'}
                        alt={'my profile'}
                        sizes={'250'}
                        width={200}
                        height={260}
                    />
                }>
                <Meta
                    description={descriptionArr.map((desc) => (
                        <p key={`${desc}-`}>{desc}</p>
                    ))}
                    className="txt"
                />
            </Card>
        </div>
    )
}

export default About

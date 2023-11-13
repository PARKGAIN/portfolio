import { Card } from 'antd'
import Image from 'next/image'
import { motion } from 'framer-motion'
import './index.css'

const About = () => {
    return (
        <motion.div
            animate={{ y: [80, 0] }}
            transition={{ delay: 0.8 }}
            style={{ margin: '0 auto' }}>
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
                <p>성장이 고픈 개발자 박가인입니다</p>
            </Card>
        </motion.div>
    )
}

export default About

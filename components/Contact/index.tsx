import Link from 'next/link'
import { SlEnvolope } from 'react-icons/sl'
import { Card } from 'antd'
import { motion } from 'framer-motion'
import { AiFillYoutube } from 'react-icons/ai'
import './index.css'

const Contact = () => {
    return (
        <motion.div animate={{ y: [80, 0] }} transition={{ delay: 1.0 }}>
            <Card style={{ width: 340 }}>
                <h2>contact</h2>
                <br />
                <Link href="mailto:pgi082247@gmail.com">
                    <SlEnvolope size={22} className="pt-5" />
                    <span className="contact-text">pgi082247@gmail.com</span>
                </Link>
                <Link
                    href="https://www.youtube.com/@gain1234"
                    style={{ display: 'block' }}>
                    <AiFillYoutube size={22} className="pt-5" />
                    <span className="contact-text">YouTube</span>
                </Link>
            </Card>
        </motion.div>
    )
}

export default Contact

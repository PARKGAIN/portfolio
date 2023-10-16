import Image from 'next/image'
import { List } from 'antd'
import { SiGithub } from 'react-icons/si'
import Link from 'next/link'

const Projects: React.FC<{ data: Project[] }> = ({ data }): JSX.Element => {
    return (
        <div style={{ padding: '3px' }}>
            <List
                itemLayout="vertical"
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item>
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={280}
                            height={150}
                        />
                        <List.Item.Meta
                            title={<a href={item.githublink}>{item.title}</a>}
                            description={item.description}
                        />
                        <List.Item.Meta
                            description={`기술 스택 : ${item.techstack}`}
                        />
                        <List.Item.Meta
                            description={`참고 자료: ${item.reference}`}
                        />
                        <Link href={`${item.githublink}`}>
                            <SiGithub size={20} />
                        </Link>
                    </List.Item>
                )}
            />
        </div>
    )
}
export default Projects

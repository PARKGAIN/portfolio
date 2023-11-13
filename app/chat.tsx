import { Suspense, useState } from 'react'
import './index.css'
import { SendOutlined } from '@ant-design/icons'
import { sendChat } from './api'
import {
    useMutation,
    QueryClientProvider,
    QueryClient,
} from '@tanstack/react-query'
import { Button } from 'antd'

const queryClient = new QueryClient()

const SendChatUI = () => {
    const [messages, setMessages] = useState<string[]>([])
    const [inputValue, setInputValue] = useState('')
    const [username, setUsername] = useState('')
    const [isNicknameSetted, setIsNicknameSetted] = useState<boolean>(false)
    const { mutate } = useMutation({
        mutationFn: () => sendChat(username, inputValue),
        onSuccess: (data) => {
            setMessages([...messages, data.content[0].data.details])
            setInputValue('')
        },
    })
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleSendMessage = () => {
        if (inputValue.trim() !== '') {
            setMessages([...messages, inputValue])
            mutate()
        }
    }

    const nicknameSetBtnClick = () => {
        if (username.trim() === '') {
            setUsername('익명')
        }
        setIsNicknameSetted(true)
    }

    const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage()
        }
    }
    return (
        <div className="chat-container">
            <div>
                {!isNicknameSetted ? (
                    <input
                        className="nickname__input"
                        value={username}
                        placeholder={'닉네임을설정해주세요.기본은 익명'}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                ) : (
                    <div>{username}</div>
                )}
                <Button
                    className="nickname__submit__btn"
                    size={'small'}
                    onClick={nicknameSetBtnClick}>
                    설정
                </Button>
                <Button
                    className="nickname__submit__btn"
                    size={'small'}
                    onClick={() => setIsNicknameSetted(false)}>
                    취소
                </Button>
            </div>
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className="message">
                        {message}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    className="chat-input__input"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={(e) => activeEnter(e)}
                    placeholder=" Type your message..."
                />
                <button className="chat__send__btn" onClick={handleSendMessage}>
                    <SendOutlined rev={''} />
                </button>
            </div>
        </div>
    )
}

const hof = (WrappedComponent: React.ComponentType) => {
    // eslint-disable-next-line react/display-name
    return (props: Record<string, unknown>) => (
        <QueryClientProvider client={queryClient}>
            <WrappedComponent />
        </QueryClientProvider>
    )
}

export default hof(SendChatUI)

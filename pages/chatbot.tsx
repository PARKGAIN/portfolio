import SendChatUI from '../features/sendChat/chat'
import './index.css'
import React from 'react'

function chatbot() {
    return (
        <div className="background">
            <div className="page_container flex-container">
                <SendChatUI />
            </div>
        </div>
    )
}

export default chatbot

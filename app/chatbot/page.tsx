'use client'
import SendChatUI from '../chat'
import '../index.css'
import React from 'react'

function Chatbot() {
    return (
        <div className="background">
            <div className="page_container flex-container">
                <SendChatUI />
            </div>
        </div>
    )
}

export default Chatbot

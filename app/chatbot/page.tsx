'use client'
import '../index.css'
import React from 'react'
import { SendChatUI } from 'app/chat'
import { withReactQueryClient } from 'app/chat'

function Chatbot() {
    return (
        <div className="background">
            <div className="page_container flex-container">
                {withReactQueryClient(SendChatUI)}
            </div>
        </div>
    )
}

export default Chatbot

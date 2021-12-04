import React from 'react';
import "./ChatBot.css";
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './Chatbot/ActionProvider';
import MessageParser from './Chatbot/MessageParaser';
import config from './Chatbot/Config';

function ChatBot()
{
    return(
        <div className="Chat">
            <div style={{maxWidth:"300px"}}>
                <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
                
                />
            </div>
        </div>
    )
}
export default ChatBot;
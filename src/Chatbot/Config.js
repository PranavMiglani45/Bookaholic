import { createChatBotMessage } from "react-chatbot-kit";
import React from 'react';
import Options from "../components/Options";

const config = {
    botName:"Expert-bot",customStyles: {
    botMessageBox: {
      backgroundColor: "grey",
    },
    chatButton: {
      backgroundColor: "black",
    },
  },
    
  initialMessages: [createChatBotMessage("Hello! Which type of book will you like to read.", {widget: "options"})],

  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    }]
}
export default config
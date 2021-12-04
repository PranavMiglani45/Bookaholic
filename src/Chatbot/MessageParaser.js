import React from 'react';
import Options from "../components/Options";
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message);
      const lowercase=message.toLowerCase();
      if(lowercase.includes("hello")||lowercase.includes("hi"))
      {
        this.actionProvider.greet();
      }
      
      if(lowercase.includes("love"))
      {
        this.actionProvider.Love();
      }
      if(lowercase.includes("crime"))
      {
        this.actionProvider.Crime();
      }
      if(lowercase.includes("biographies"))
      {
        this.actionProvider.Biographies();
      }
      if(lowercase.includes("science")||lowercase.includes("physics")||lowercase.includes("chemistry")||lowercase.includes("biography"))
      {
        this.actionProvider.Science();
      }
      if(lowercase.includes("maths"))
      {
        this.actionProvider.Maths();
      }
      if(lowercase.includes("socialstudies")||lowercase.includes("social studies")||lowercase.includes("sst"))
      {
        this.actionProvider.Social_Studies();
      }
      if(lowercase.includes("suggest")||lowercase.includes("book")||lowercase.includes("books")||lowercase.includes("suggestions"))
      {
        this.actionProvider.Text();
       
      }
     
      
    }
  }
  
  export default MessageParser;
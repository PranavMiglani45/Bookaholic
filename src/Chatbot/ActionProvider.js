class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    greet=()=>{
        const message = this.createChatBotMessage("Hello Friend!");
        this.addMessageToState(message);
    };
    Love = () => {
        const message = this.createChatBotMessage(
          "Fantastic. Here is your quiz. Good luck!"
         
        );
    
        this.addMessageToState(message);
      };
      Text = () => {
        const message = this.createChatBotMessage(
          "Availabe on top of chat"
         
        );
    
        this.addMessageToState(message);
      };
      Crime = () => {
        const message = this.createChatBotMessage(
          "Fantastic. Here is your quiz. Good luck!"
         
        );
        

    
        this.addMessageToState(message);
      };
      Biographies = () => {
        const message = this.createChatBotMessage(
          "Fantastic. Here is your quiz. Good luck!"
         
        );
        

    
        this.addMessageToState(message);
      };
      Science = () => {
        const message = this.createChatBotMessage(
          "Fantastic. Here is your quiz. Good luck!"
         
        );
        

    
        this.addMessageToState(message);
      };
      Maths = () => {
        const message = this.createChatBotMessage(
          "Fantastic. Here is your quiz. Good luck!"
         
        );
        

    
        this.addMessageToState(message);
      };
      Social_Studies = () => {
        const message = this.createChatBotMessage(
          "Fantastic. Here is your quiz. Good luck!"
         
        );
        

    
        this.addMessageToState(message);
      };
    addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
  }
  
  export default ActionProvider;
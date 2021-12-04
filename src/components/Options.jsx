import React from "react";


import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Love",
      handler: props.actionProvider.Love,
      id: 1,
    },
    { text: "Crime", 
    handler: props.actionProvider.Crime, 
    id: 2 },
    { text: "Biographies",
     handler: props.actionProvider.Biographies, 
     id: 3 },
     { text: "Science",
     handler: props.actionProvider.Science, 
     id: 3 },
     { text: "Maths",
     handler: props.actionProvider.Maths, 
     id: 3 },
     { text: "Social Studies",
     handler: props.actionProvider.Social_Studies, 
     id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
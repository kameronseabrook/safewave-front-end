import "./chat";
import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// const baseURL = 'http://localhost:8080/'


 
function Chat() {
  const [answer, setAnswer] = useState("");

  const handleNewAnswer = (event) => {
    setAnswer(answer+"\n"+event);
  };

  const handlePrompt = async (event) => {
    event.preventDefault();
    console.log(`HERE`);
    const newQuestion = { content: event.target.prompt.value };
    console.log(newQuestion);
    try {
      const response = await axios.post(`http://localhost:8080/safewaveai`, newQuestion);
      console.log(response.data);
      handleNewAnswer(response.data.data);
      alert("Question sucessfully asked");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="main">
        <div className="main__logoimgdiv">
        </div>
      
      <div className="main__answer2"></div>
      <form className="main__form" onSubmit={handlePrompt}>
        <p className="main__answp"> {answer}</p>
        <label className="main__label"> Ask Questions Here </label>
        <div className="main__input">
          <textarea
            type="text"
            name="prompt"
            id="prompt"
            placeholder="ask your question"
            cols="10"
            rows="10"
            className="main__2prompt"
          ></textarea>
        </div>
        <button type="submit" className="main__submit">
          {" "}
          Get Safe {" "}
        </button>
      </form>
    </main>
  );
}

export default Chat;

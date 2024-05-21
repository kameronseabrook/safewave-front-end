// import "./chat.scss"
// import React, { useState } from "react";
// import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // const baseURL = 'http://localhost:8080/'


 
// function Chat() {
//   const [answer, setAnswer] = useState("");

//   const handleNewAnswer = (event) => {
//     setAnswer(answer+"\n"+event);
//   };

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     console.log(`HERE`);
//     const newQuestion = { content: event.target.prompt.value };
//     console.log(newQuestion);
//     try {
//       const response = await axios.post(`http://localhost:8080/safewaveai`, newQuestion);
//       console.log(response.data);
//       handleNewAnswer(response.data.data);
//       alert("Question sucessfully asked");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <main className="main">
//         <div className="main__logoimgdiv">
//         </div>
      
//       <div className="main__answer2"></div>
//       <form className="main__form" onSubmit={handlePrompt}>
//         <p className="main__answp"> {answer}</p>
//         <label className="main__label"> Ask Questions Here </label>
//         <div className="main__input">
//           <textarea
//             type="text"
//             name="prompt"
//             id="prompt"
//             placeholder="ask your question"
//             cols="10"
//             rows="10"
//             className="main__2prompt"
//           ></textarea>
//         </div>
//         <button type="submit" className="main__submit">
//           {" "}
//           Get Safe {" "}
//         </button>
//       </form>
//     </main>
//   );
// }

// export default Chat;


// import "./chat.scss";
// import React, { useState } from "react";
// import axios from "axios";

// function Chat() {
//   const [messages, setMessages] = useState([]);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };
    
//     setMessages([...messages, { role: "user", content: userMessage }]);
    
//     try {
//       const response = await axios.post(`http://localhost:8080/safewaveai`, newQuestion);
//       setMessages([...messages, { role: "user", content: userMessage }, { role: "assistant", content: response.data.data }]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p>{message.content}</p>
//           </div>
//         ))}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;


// import "./chat.scss";
// import React, { useState } from "react";
// import axios from "axios";
// import Lottie from 'react-lottie';
// import loadingAnimation from '../../assets/animations/Anikihamster.json'; // Adjust the path according to your project structure

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages([...messages, { role: "user", content: userMessage }]);
//     setIsLoading(true);

//     try {
//       const response = await axios.post(`http://localhost:8080/safewaveai`, newQuestion);
//       setMessages([...messages, { role: "user", content: userMessage }, { role: "assistant", content: response.data.data }]);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loadingAnimation,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p>{message.content}</p>
//           </div>
//         ))}
//       </div>
//       {isLoading && (
//         <div className="loading-animation">
//           <Lottie options={defaultOptions} height={100} width={100} />
//         </div>
//       )}
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;


// import "./chat.scss";
// import React, { useState } from "react";
// import axios from "axios";
// import Lottie from 'react-lottie';
// import loadingAnimation from '../../assets/animations/Anikihamster.json'; // Adjust the path according to your project structure

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);
//     setIsLoading(true);

//     try {
//       const response = await axios.post(`http://localhost:8080/safewaveai`, newQuestion);
//       animateMessage(response.data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const animateMessage = (message) => {
//     const words = message.split(" ");
//     let displayedMessage = "";
//     setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "" }]);

//     words.forEach((word, index) => {
//       setTimeout(() => {
//         displayedMessage += (index === 0 ? "" : " ") + word;
//         setMessages(prevMessages => {
//           const updatedMessages = [...prevMessages];
//           updatedMessages[updatedMessages.length - 1].content = displayedMessage;
//           return updatedMessages;
//         });
//       }, index * 200); // Adjust the speed of word appearance here (200ms)
//     });
//   };

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loadingAnimation,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p>{message.content}</p>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="loading-animation">
//             <Lottie options={defaultOptions} height={100} width={100} />
//           </div>
//         )}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;


// import "./chat.scss";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Lottie from 'react-lottie';
// import loadingAnimation from '../../assets/animations/Anikihamster.json'; // Adjust the path according to your project structure

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     document.documentElement.setAttribute('data-theme', theme);
//   }, [theme]);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);
//     setIsLoading(true);

//     try {
//       const response = await axios.post(`http://localhost:8080/safewaveai`, newQuestion);
//       animateMessage(response.data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const animateMessage = (message) => {
//     const words = message.split(" ");
//     let displayedMessage = "";
//     setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "" }]);

//     words.forEach((word, index) => {
//       setTimeout(() => {
//         displayedMessage += (index === 0 ? "" : " ") + word;
//         setMessages(prevMessages => {
//           const updatedMessages = [...prevMessages];
//           updatedMessages[updatedMessages.length - 1].content = displayedMessage;
//           return updatedMessages;
//         });
//       }, index * 200); // Adjust the speed of word appearance here (200ms)
//     });
//   };

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loadingAnimation,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   const toggleTheme = () => {
//     setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <main className="chat-container">
//       <button className="theme-toggle" onClick={toggleTheme}>
//         {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
//       </button>
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p>{message.content}</p>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="loading-animation">
//             <Lottie options={defaultOptions} height={100} width={100} />
//           </div>
//         )}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;


// import "./chat.scss";
// import React, { useState } from "react";
// import axios from "axios";
// import Lottie from 'react-lottie';
// import loadingAnimation from '../../assets/animations/Anikihamster.json'; // Adjust the path according to your project structure

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);
//     setIsLoading(true);

//     try {
//       const response = await axios.post(`http://localhost:8080/safewaveai`, newQuestion);
//       animateMessage(response.data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const animateMessage = (message) => {
//     const words = message.split(" ");
//     let displayedMessage = "";
//     setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "" }]);

//     words.forEach((word, index) => {
//       setTimeout(() => {
//         displayedMessage += (index === 0 ? "" : " ") + word;
//         setMessages(prevMessages => {
//           const updatedMessages = [...prevMessages];
//           updatedMessages[updatedMessages.length - 1].content = displayedMessage;
//           return updatedMessages;
//         });
//       }, index * 200); // Adjust the speed of word appearance here (200ms)
//     });
//   };

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loadingAnimation,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p>{message.content}</p>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="loading-animation">
//             <Lottie options={defaultOptions} height={100} width={100} />
//           </div>
//         )}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;


// import "./chat.scss";
// import React, { useState } from "react";
// import axios from "axios";
// import Lottie from 'react-lottie';
// import loadingAnimation from '../../assets/animations/Anikihamster.json'; // Adjust the path according to your project structure

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);
//     setIsLoading(true);

//     try {
//       const response = await axios.post(`http://localhost:8080/safewaveai`, newQuestion);
//       animateMessage(response.data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const animateMessage = (message) => {
//     const words = message.split(" ");
//     let displayedMessage = "";
//     setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "" }]);

//     words.forEach((word, index) => {
//       setTimeout(() => {
//         displayedMessage += (index === 0 ? "" : " ") + word;
//         setMessages(prevMessages => {
//           const updatedMessages = [...prevMessages];
//           updatedMessages[updatedMessages.length - 1].content = displayedMessage;
//           return updatedMessages;
//         });
//       }, index * 200); // Adjust the speed of word appearance here (200ms)
//     });
//   };

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loadingAnimation,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p>{message.content}</p>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="loading-animation">
//             <Lottie options={defaultOptions} height={100} width={100} />
//           </div>
//         )}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;


// import "./chat.scss";
// import React, { useState } from "react";
// import axios from "axios";
// import Lottie from 'react-lottie';
// import loadingAnimation from '../../assets/animations/Anikihamster.json'; // Adjust the path according to your project structure

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);
//     setIsLoading(true);

//     try {
//       const response = await axios.post(`http://localhost:8080/safewaveai`, newQuestion);
//       animateMessage(response.data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const animateMessage = (message) => {
//     const words = message.split(" ");
//     let displayedMessage = "";
//     setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "" }]);

//     words.forEach((word, index) => {
//       setTimeout(() => {
//         displayedMessage += (index === 0 ? "" : " ") + word;
//         setMessages(prevMessages => {
//           const updatedMessages = [...prevMessages];
//           updatedMessages[updatedMessages.length - 1].content = displayedMessage;
//           return updatedMessages;
//         });
//       }, index * 200); // Adjust the speed of word appearance here (200ms)
//     });
//   };

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loadingAnimation,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p>{message.content}</p>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="loading-animation">
//             <Lottie options={defaultOptions} height={100} width={100} />
//           </div>
//         )}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;


// import "./chat.scss";
// import React, { useState } from "react";
// import axios from "axios";
// import Lottie from 'react-lottie';
// import loadingAnimation from '../../assets/animations/Anikihamster.json'; // Adjust the path according to your project structure

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);
//     setIsLoading(true);

//     try {
//       const response = await axios.post(`http://localhost:8080/safewaveai`, newQuestion);
//       animateMessage(response.data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const animateMessage = (message) => {
//     const words = message.split(" ");
//     let displayedMessage = "";
//     setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "" }]);

//     words.forEach((word, index) => {
//       setTimeout(() => {
//         displayedMessage += (index === 0 ? "" : " ") + word;
//         setMessages(prevMessages => {
//           const updatedMessages = [...prevMessages];
//           updatedMessages[updatedMessages.length - 1].content = displayedMessage;
//           return updatedMessages;
//         });
//       }, index * 200); // Adjust the speed of word appearance here (200ms)
//     });
//   };

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loadingAnimation,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p>{message.content}</p>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="loading-animation">
//             <Lottie options={defaultOptions} height={100} width={100} />
//           </div>
//         )}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;


// import "./chat.scss";
// import React, { useState } from "react";
// import axios from "axios";
// import Lottie from 'react-lottie';
// import loadingAnimation from '../../assets/animations/Anikihamster.json'; // Adjust the path according to your project structure

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);
//     setIsLoading(true);

//     try {
//       const response = await axios.post('http://localhost:8080/safewaveai', newQuestion); // Ensure this URL is correct
//       animateMessage(response.data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const animateMessage = (message) => {
//     const words = message.split(" ");
//     let displayedMessage = "";
//     setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "" }]);

//     words.forEach((word, index) => {
//       setTimeout(() => {
//         displayedMessage += (index === 0 ? "" : " ") + word;
//         setMessages(prevMessages => {
//           const updatedMessages = [...prevMessages];
//           updatedMessages[updatedMessages.length - 1].content = displayedMessage;
//           return updatedMessages;
//         });
//       }, index * 200); // Adjust the speed of word appearance here (200ms)
//     });
//   };

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loadingAnimation,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p>{message.content}</p>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="loading-animation">
//             <Lottie options={defaultOptions} height={100} width={100} />
//           </div>
//         )}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;

// import "./chat.scss";
// import React, { useState } from "react";
// import axios from "axios";
// import Lottie from 'react-lottie';
// import loadingAnimation from '../../assets/animations/Anikihamster.json'; // Adjust the path according to your project structure

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);
//     setIsLoading(true);

//     try {
//       const response = await axios.post('http://localhost:8080/safewaveai', newQuestion, {
//         withCredentials: true
//       }); // Ensure credentials are included
//       animateMessage(response.data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const animateMessage = (message) => {
//     const words = message.split(" ");
//     let displayedMessage = "";
//     setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "" }]);

//     words.forEach((word, index) => {
//       setTimeout(() => {
//         displayedMessage += (index === 0 ? "" : " ") + word;
//         setMessages(prevMessages => {
//           const updatedMessages = [...prevMessages];
//           updatedMessages[updatedMessages.length - 1].content = displayedMessage;
//           return updatedMessages;
//         });
//       }, index * 200); // Adjust the speed of word appearance here (200ms)
//     });
//   };

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loadingAnimation,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p>{message.content}</p>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="loading-animation">
//             <Lottie options={defaultOptions} height={100} width={100} />
//           </div>
//         )}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;



// import "./chat.scss";
// import React, { useState } from "react";
// import axios from "axios";
// import Lottie from 'react-lottie';
// import loadingAnimation from '../../assets/animations/Anikihamster.json'; // Adjust the path according to your project structure

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);
//     setIsLoading(true);

//     try {
//       const response = await axios.post('http://localhost:8080/safewaveai', newQuestion, {
//         withCredentials: true
//       }); // Ensure credentials are included
//       animateMessage(response.data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const animateMessage = (message) => {
//     const words = message.split(" ");
//     let displayedMessage = "";
//     setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "" }]);

//     words.forEach((word, index) => {
//       setTimeout(() => {
//         displayedMessage += (index === 0 ? "" : " ") + word;
//         setMessages(prevMessages => {
//           const updatedMessages = [...prevMessages];
//           updatedMessages[updatedMessages.length - 1].content = displayedMessage;
//           return updatedMessages;
//         });
//       }, index * 200); // Adjust the speed of word appearance here (200ms)
//     });
//   };

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loadingAnimation,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p dangerouslySetInnerHTML={{ __html: message.content }}></p>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="loading-animation">
//             <Lottie options={defaultOptions} height={100} width={100} />
//           </div>
//         )}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;


// import "./chat.scss";
// import React, { useState } from "react";
// import axios from "axios";
// import Lottie from 'react-lottie';
// import loadingAnimation from '../../assets/animations/Anikihamster.json'; // Adjust the path according to your project structure

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);
//     setIsLoading(true);

//     try {
//       const response = await axios.post('http://localhost:8080/safewaveai', newQuestion, {
//         withCredentials: true
//       }); // Ensure credentials are included
//       animateMessage(response.data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const animateMessage = (message) => {
//     const words = message.split(" ");
//     let displayedMessage = "";
//     setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "" }]);

//     words.forEach((word, index) => {
//       setTimeout(() => {
//         displayedMessage += (index === 0 ? "" : " ") + word;
//         setMessages(prevMessages => {
//           const updatedMessages = [...prevMessages];
//           updatedMessages[updatedMessages.length - 1].content = displayedMessage;
//           return updatedMessages;
//         });
//       }, index * 200); // Adjust the speed of word appearance here (200ms)
//     });
//   };

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loadingAnimation,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p dangerouslySetInnerHTML={{ __html: message.content }}></p>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="loading-animation">
//             <Lottie options={defaultOptions} height={100} width={100} />
//           </div>
//         )}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;


// import "./chat.scss";
// import React, { useState } from "react";
// import axios from "axios";
// import Lottie from 'react-lottie';
// import loadingAnimation from '../../assets/animations/Anikihamster.json'; // Adjust the path according to your project structure

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);
//     setIsLoading(true);

//     try {
//       const response = await axios.post('http://localhost:8080/safewaveai', newQuestion, {
//         withCredentials: true
//       }); // Ensure credentials are included
//       animateMessage(response.data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const animateMessage = (message) => {
//     const words = message.split(" ");
//     let displayedMessage = "";
//     setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "" }]);

//     words.forEach((word, index) => {
//       setTimeout(() => {
//         displayedMessage += (index === 0 ? "" : " ") + word;
//         setMessages(prevMessages => {
//           const updatedMessages = [...prevMessages];
//           updatedMessages[updatedMessages.length - 1].content = displayedMessage;
//           return updatedMessages;
//         });
//       }, index * 200); // Adjust the speed of word appearance here (200ms)
//     });
//   };

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loadingAnimation,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p dangerouslySetInnerHTML={{ __html: message.content }}></p>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="loading-animation">
//             <Lottie options={defaultOptions} height={100} width={100} />
//           </div>
//         )}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;



// import "./chat.scss";
// import React, { useState } from "react";
// import axios from "axios";
// import Lottie from 'react-lottie';
// import loadingAnimation from '../../assets/animations/Anikihamster.json'; // Adjust the path according to your project structure

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);
//     setIsLoading(true);

//     try {
//       const response = await axios.post('http://localhost:8080/safewaveai', newQuestion, {
//         withCredentials: true
//       }); // Ensure credentials are included
//       animateMessage(response.data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const animateMessage = (message) => {
//     const words = message.split(" ");
//     let displayedMessage = "";
//     setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "" }]);

//     words.forEach((word, index) => {
//       setTimeout(() => {
//         displayedMessage += (index === 0 ? "" : " ") + word;
//         setMessages(prevMessages => {
//           const updatedMessages = [...prevMessages];
//           updatedMessages[updatedMessages.length - 1].content = displayedMessage;
//           return updatedMessages;
//         });
//       }, index * 200); // Adjust the speed of word appearance here (200ms)
//     });
//   };

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loadingAnimation,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p dangerouslySetInnerHTML={{ __html: message.content }}></p>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="loading-animation">
//             <Lottie options={defaultOptions} height={100} width={100} />
//           </div>
//         )}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;

// import "./chat.scss";
// import React, { useState } from "react";
// import axios from "axios";
// import Lottie from 'react-lottie';
// import loadingAnimation from '../../assets/animations/Anikihamster.json'; // Adjust the path according to your project structure

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);
//     setIsLoading(true);

//     try {
//       const response = await axios.post('http://localhost:8080/safewaveai', newQuestion, {
//         withCredentials: true
//       }); // Ensure credentials are included
//       animateMessage(response.data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const animateMessage = (message) => {
//     const words = message.split(" ");
//     let displayedMessage = "";
//     setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "" }]);

//     words.forEach((word, index) => {
//       setTimeout(() => {
//         displayedMessage += (index === 0 ? "" : " ") + word;
//         setMessages(prevMessages => {
//           const updatedMessages = [...prevMessages];
//           updatedMessages[updatedMessages.length - 1].content = displayedMessage;
//           return updatedMessages;
//         });
//       }, index * 200); // Adjust the speed of word appearance here (200ms)
//     });
//   };

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loadingAnimation,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p dangerouslySetInnerHTML={{ __html: message.content }}></p>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="loading-animation">
//             <Lottie options={defaultOptions} height={100} width={100} />
//           </div>
//         )}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;


// import "./chat.scss";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Lottie from 'react-lottie';
// import loadingAnimation from '../../assets/animations/Anikihamster.json'; // Adjust the path according to your project structure

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [ws, setWs] = useState(null);

//   useEffect(() => {
//     const websocket = new WebSocket('ws://localhost:8080');
//     websocket.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       if (data.data) {
//         setMessages((prevMessages) => [...prevMessages, { role: "assistant", content: data.data }]);
//       }
//     };
//     setWs(websocket);
//     return () => {
//       websocket.close();
//     };
//   }, []);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);
//     setIsLoading(true);

//     try {
//       const response = await axios.post('http://localhost:8080/api/safewaveai', newQuestion, {
//         withCredentials: true
//       });
//       animateMessage(response.data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const animateMessage = (message) => {
//     const words = message.split(" ");
//     let displayedMessage = "";
//     setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "" }]);

//     words.forEach((word, index) => {
//       setTimeout(() => {
//         displayedMessage += (index === 0 ? "" : " ") + word;
//         setMessages(prevMessages => {
//           const updatedMessages = [...prevMessages];
//           updatedMessages[updatedMessages.length - 1].content = displayedMessage;
//           return updatedMessages;
//         });
//       }, index * 50); // Adjust the speed of word appearance here (50ms for faster rendering)
//     });
//   };

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loadingAnimation,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p dangerouslySetInnerHTML={{ __html: message.content }}></p>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="loading-animation">
//             <Lottie options={defaultOptions} height={100} width={100} />
//           </div>
//         )}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;

// import "./chat.scss";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Lottie from 'react-lottie';
// import loadingAnimation from '../../assets/animations/Anikihamster.json'; // Adjust the path according to your project structure

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [ws, setWs] = useState(null);

//   useEffect(() => {
//     const websocket = new WebSocket('ws://localhost:8080');
//     websocket.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       if (data.data) {
//         setMessages((prevMessages) => [...prevMessages, { role: "assistant", content: data.data }]);
//       }
//     };
//     setWs(websocket);
//     return () => {
//       websocket.close();
//     };
//   }, []);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);
//     setIsLoading(true);

//     try {
//       const response = await axios.post('http://localhost:8080/api/safewaveai', newQuestion, {
//         withCredentials: true
//       });
//       animateMessage(response.data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const animateMessage = (message) => {
//     const words = message.split(" ");
//     let displayedMessage = "";
//     setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "" }]);

//     words.forEach((word, index) => {
//       setTimeout(() => {
//         displayedMessage += (index === 0 ? "" : " ") + word;
//         setMessages(prevMessages => {
//           const updatedMessages = [...prevMessages];
//           updatedMessages[updatedMessages.length - 1].content = displayedMessage;
//           return updatedMessages;
//         });
//       }, index * 50); // Adjust the speed of word appearance here (50ms for faster rendering)
//     });
//   };

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loadingAnimation,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p dangerouslySetInnerHTML={{ __html: message.content }}></p>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="loading-animation">
//             <Lottie options={defaultOptions} height={100} width={100} />
//           </div>
//         )}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;




// const express = require("express");
// const { OpenAI } = require("openai");
// const axios = require("axios");

// const router = express.Router();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const validateUrls = async (text) => {
//   const urlRegex = /(https?:\/\/[^\s]+)/g;
//   const urls = text.match(urlRegex);
//   if (!urls) return { text, valid: true };

//   const validUrls = await Promise.allSettled(urls.map(async (url) => {
//     try {
//       const response = await axios.head(url, { timeout: 10000 });
//       const contentType = response.headers['content-type'];
//       if (response.status === 200 && contentType.includes('text/html')) {
//         return url;
//       } else {
//         return null;
//       }
//     } catch (error) {
//       return null;
//     }
//   }));

//   let validatedText = text;
//   let validUrlsCount = 0;
//   validUrls.forEach((result, index) => {
//     if (result.status === "fulfilled" && result.value) {
//       validUrlsCount++;
//       validatedText = validatedText.replace(urls[index], `<a href="${result.value}" target="_blank">${result.value}</a>`);
//     } else {
//       validatedText = validatedText.replace(urls[index], '');
//     }
//   });

//   return { text: validatedText, valid: validUrlsCount >= 2 };
// };

// const getValidLinksFromOpenAI = async (question) => {
//   const followUpPrompt = `
//     Can you provide some valid and relevant links for the following query? Only include active and relevant links, and make sure there are at least two:
//     "${question}"
//   `;

//   const completion = await openai.chat.completions.create({
//     messages: [
//       { role: "system", content: "You are an assistant providing relevant links." },
//       { role: "user", content: followUpPrompt }
//     ],
//     model: "gpt-4",
//   });

//   return completion.choices[0].message.content;
// };

// router.post("/safewaveai", async (req, res) => {
//   console.log("Received a request:", req.body); // Logging the request body
//   const question = req.body.content;
//   const session = req.session;

//   if (!question) {
//     return res.status(400).json({ error: "No content provided" });
//   }

//   if (!session.messages) {
//     session.messages = [
//       {
//         role: "system",
//         content: `
//         You are an assistant for SafeWave, a company that provides products and support for the deaf and hard of hearing. 
//         SafeWave's goal is to offer quick and efficient solutions for first-time caretakers and expand to all types of disabilities, mental illnesses, and diseases. 
//         Your responsibilities include:
//         1. Providing clear, focused guidance and staying on topic.
//         2. Asking for additional context when necessary to provide accurate responses.
//         3. Remembering everything the user shares during the session.
//         4. Providing links to relevant resources on the internet in the form of clickable hyperlinks.
//         5. Maintaining a helpful, empathetic, and professional tone.
        
//         Example queries:
//         - "Can anyone tell me if there is a way to Bluetooth a hearing aid to a computer? I have yet to find a way. I can BT to my iPhone, but why can't I connect to my MacBook?"
//         - "Are more Deaf/HoH using Live Transcribe and other speech-to-text apps?"
//         - "Does anyone get SSI/Disability? I applied and got denied."
//         - "Does anyone ever get allergic reactions from the tubing for the BTE hearing aids? I just got it changed. I checked the material and it has polyvinyl chloride (PVC)."
//         - "Any tips for helping my daughter in an echoing environment? She has partial hearing loss in one ear with a hearing aid."
//         - "Does one ear hard of hearing usually get headaches on one side?"
//         - "Should we sue employers when we are fired due to our lack of ability to communicate?"
//         - "Is tinnitus physical or mental?"
//         - "Can a person's 'social awkwardness' be due to their severe hearing impairment?"
//         - "Do those who are completely deaf hear popping in ears, or just feel it?"
        
//         Always ensure your responses are helpful, concise, and provide actionable advice. If more information is needed, ask the user for additional details to provide the best possible guidance. Whenever applicable, include links to relevant articles, resources, products, or other helpful materials to assist the user in the form of clickable hyperlinks.
//         Format the links in HTML like this: <a href="URL">Link Text</a>
//         `
//       },
//     ];
//   }

//   session.messages.push({ role: "user", content: question });

//   try {
//     const completion = await openai.chat.completions.create({
//       messages: session.messages,
//       model: "gpt-4",
//     });

//     let responseText = completion.choices[0].message.content;
//     console.log("AI response:", responseText); // Logging the AI response
//     let validationResult = await validateUrls(responseText);

//     res.status(200).json({ data: validationResult.text });

//     if (!validationResult.valid) {
//       responseText = await getValidLinksFromOpenAI(question);
//       validationResult = await validateUrls(responseText);

//       wss.clients.forEach((client) => {
//         if (client.readyState === WebSocket.OPEN) {
//           client.send(JSON.stringify({ data: validationResult.text }));
//         }
//       });
//     }
//   } catch (error) {
//     console.error("Error processing request:", error); // Logging errors
//     res.status(500).json({ error: "Internal Server Error", details: error.message });
//   }
// });

// module.exports = router;


// import "./chat.scss";
// import React, { useState } from "react";
// import axios from "axios";

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);
//     setIsLoading(true);

//     try {
//       const response = await axios.post('http://localhost:8080/api/safewaveai', newQuestion, {
//         withCredentials: true
//       });
//       animateMessage(response.data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const animateMessage = (message) => {
//     const words = message.split(" ");
//     let displayedMessage = "";
//     setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "" }]);

//     words.forEach((word, index) => {
//       setTimeout(() => {
//         displayedMessage += (index === 0 ? "" : " ") + word;
//         setMessages(prevMessages => {
//           const updatedMessages = [...prevMessages];
//           updatedMessages[updatedMessages.length - 1].content = displayedMessage;
//           return updatedMessages;
//         });
//       }, index * 50); // Adjust the speed of word appearance here (50ms for faster rendering)
//     });
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p dangerouslySetInnerHTML={{ __html: message.content }}></p>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="loading-animation">
//             Loading...
//           </div>
//         )}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;


// import "./chat.scss";
// import React, { useState } from "react";
// import axios from "axios";

// function Chat() {
//   const [messages, setMessages] = useState([]);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);

//     try {
//       const response = await axios.post('http://localhost:8080/api/safewaveai', newQuestion, {
//         withCredentials: true
//       });
//       setMessages(prevMessages => [...prevMessages, { role: "assistant", content: response.data.data }]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p>{message.content}</p>
//           </div>
//         ))}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;


// import "./chat.scss";
// import React, { useState } from "react";
// import axios from "axios";

// function Chat() {
//   const [messages, setMessages] = useState([]);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);

//     try {
//       const response = await axios.post('http://localhost:8080/api/safewaveai', newQuestion, {
//         withCredentials: true
//       });
//       setMessages(prevMessages => [...prevMessages, { role: "assistant", content: response.data.data }]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p>{message.content}</p>
//           </div>
//         ))}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;

// import "./chat.scss";
// import React, { useState } from "react";
// import axios from "axios";

// function Chat() {
//   const [messages, setMessages] = useState([]);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);

//     try {
//       const response = await axios.post('http://localhost:8080/api/safewaveai', newQuestion, {
//         withCredentials: true
//       });
//       setMessages(prevMessages => [...prevMessages, { role: "assistant", content: response.data.data }]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p>{message.content}</p>
//           </div>
//         ))}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;

// import "./chat.scss";
// import React, { useState } from "react";
// import axios from "axios";
// import Lottie from "react-lottie";
// import * as loadingAnimationData from "../../assets/animations/Anikihamster.json"; // Ensure you have this JSON file

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);
//     setIsLoading(true);

//     try {
//       const response = await axios.post('http://localhost:8080/api/safewaveai', newQuestion, {
//         withCredentials: true
//       });
//       animateMessage(response.data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const animateMessage = (message) => {
//     const words = message.split(" ");
//     let displayedMessage = "";
//     setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "" }]);

//     words.forEach((word, index) => {
//       setTimeout(() => {
//         displayedMessage += (index === 0 ? "" : " ") + word;
//         setMessages(prevMessages => {
//           const updatedMessages = [...prevMessages];
//           updatedMessages[updatedMessages.length - 1].content = displayedMessage;
//           return updatedMessages;
//         });
//       }, index * 50); // Adjust the speed of word appearance here (50ms for faster rendering)
//     });
//   };

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loadingAnimationData.default,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p dangerouslySetInnerHTML={{ __html: message.content }}></p>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="loading-animation">
//             <Lottie options={defaultOptions} height={100} width={100} />
//           </div>
//         )}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;

// import "./chat.scss";
// import React, { useState } from "react";
// import axios from "axios";
// import Lottie from "react-lottie";
// import * as loadingAnimationData from "../../assets/animations/Anikihamster.json"; // Ensure you have this JSON file

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);
//     event.target.prompt.value = ''; // Clear the textbox
//     setIsLoading(true);

//     try {
//       const response = await axios.post('http://localhost:8080/api/safewaveai', newQuestion, {
//         withCredentials: true
//       });
//       animateMessage(response.data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const animateMessage = (message) => {
//     const words = message.split(" ");
//     let displayedMessage = "";
//     setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "" }]);

//     words.forEach((word, index) => {
//       setTimeout(() => {
//         displayedMessage += (index === 0 ? "" : " ") + word;
//         setMessages(prevMessages => {
//           const updatedMessages = [...prevMessages];
//           updatedMessages[updatedMessages.length - 1].content = displayedMessage;
//           return updatedMessages;
//         });
//       }, index * 50); // Adjust the speed of word appearance here (50ms for faster rendering)
//     });
//   };

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loadingAnimationData.default,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p dangerouslySetInnerHTML={{ __html: message.content }}></p>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="loading-animation">
//             <Lottie options={defaultOptions} height={100} width={100} />
//           </div>
//         )}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;

// import "./chat.scss";
// import React, { useState } from "react";
// import axios from "axios";
// import Lottie from "react-lottie";
// import * as loadingAnimationData from "../../assets/animations/Anikihamster.json"; // Ensure you have this JSON file

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);
//     event.target.prompt.value = ''; // Clear the textbox
//     setIsLoading(true);

//     try {
//       const response = await axios.post('http://localhost:8080/api/safewaveai', newQuestion, {
//         withCredentials: true
//       });
//       animateMessage(response.data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const animateMessage = (message) => {
//     const words = message.split(" ");
//     let displayedMessage = "";
//     setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "" }]);

//     words.forEach((word, index) => {
//       setTimeout(() => {
//         displayedMessage += (index === 0 ? "" : " ") + word;
//         setMessages(prevMessages => {
//           const updatedMessages = [...prevMessages];
//           updatedMessages[updatedMessages.length - 1].content = displayedMessage;
//           return updatedMessages;
//         });
//       }, index * 50); // Adjust the speed of word appearance here (50ms for faster rendering)
//     });
//   };

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loadingAnimationData.default,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p dangerouslySetInnerHTML={{ __html: message.content }}></p>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="loading-animation">
//             <Lottie options={defaultOptions} height={100} width={100} />
//           </div>
//         )}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;

// import "./chat.scss";
// import React, { useState } from "react";
// import axios from "axios";
// import Lottie from "react-lottie";
// import * as loadingAnimationData from "../../assets/animations/Anikihamster.json"; // Ensure you have this JSON file

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePrompt = async (event) => {
//     event.preventDefault();
//     const userMessage = event.target.prompt.value;
//     const newQuestion = { content: userMessage };

//     setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);
//     event.target.prompt.value = ''; // Clear the textbox
//     setIsLoading(true);

//     try {
//       const response = await axios.post('http://localhost:8080/api/safewaveai', newQuestion, {
//         withCredentials: true
//       });
//       animateMessage(response.data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const animateMessage = (message) => {
//     const words = message.split(" ");
//     let displayedMessage = "";
//     setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "" }]);

//     words.forEach((word, index) => {
//       setTimeout(() => {
//         displayedMessage += (index === 0 ? "" : " ") + word;
//         setMessages(prevMessages => {
//           const updatedMessages = [...prevMessages];
//           updatedMessages[updatedMessages.length - 1].content = displayedMessage;
//           return updatedMessages;
//         });
//       }, index * 50); // Adjust the speed of word appearance here (50ms for faster rendering)
//     });
//   };

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loadingAnimationData.default,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <main className="chat-container">
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.role}`}>
//             <p dangerouslySetInnerHTML={{ __html: message.content }}></p>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="loading-animation">
//             <Lottie options={defaultOptions} height={100} width={100} />
//           </div>
//         )}
//       </div>
//       <form className="input-form" onSubmit={handlePrompt}>
//         <textarea
//           type="text"
//           name="prompt"
//           id="prompt"
//           placeholder="Ask your question"
//           rows="2"
//           className="input-box"
//         ></textarea>
//         <button type="submit" className="submit-button">Send</button>
//       </form>
//     </main>
//   );
// }

// export default Chat;

import "./chat.scss";
import React, { useState } from "react";
import axios from "axios";
import Lottie from "react-lottie";
import * as loadingAnimationData from "../../assets/animations/Anikihamster.json"; 
const API_URL = process.env.REACT_APP_API_URL || 'https://safewave-back-end-8299c9035225.herokuapp.com/'

function Chat() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePrompt = async (event) => {
    event.preventDefault();
    const userMessage = event.target.prompt.value;
    const newQuestion = { content: userMessage };

    setMessages(prevMessages => [...prevMessages, { role: "user", content: userMessage }]);
    event.target.prompt.value = ''; // Clear the textbox
    setIsLoading(true);

    try {
      const response = await axios.post(API_URL, newQuestion, {
        withCredentials: true
      });
      animateMessage(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const animateMessage = (message) => {
    const words = message.split(" ");
    let displayedMessage = "";
    setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "" }]);

    words.forEach((word, index) => {
      setTimeout(() => {
        displayedMessage += (index === 0 ? "" : " ") + word;
        setMessages(prevMessages => {
          const updatedMessages = [...prevMessages];
          updatedMessages[updatedMessages.length - 1].content = displayedMessage;
          return updatedMessages;
        });
      }, index * 50); // Adjust the speed of word appearance here (50ms for faster rendering)
    });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <main className="chat-container">
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            <p dangerouslySetInnerHTML={{ __html: message.content }}></p>
          </div>
        ))}
        {isLoading && (
          <div className="loading-animation">
            <Lottie options={defaultOptions} height={100} width={100} />
          </div>
        )}
      </div>
      <form className="input-form" onSubmit={handlePrompt}>
        <textarea
          type="text"
          name="prompt"
          id="prompt"
          placeholder="Ask your question"
          rows="2"
          className="input-box"
        ></textarea>
        <button type="submit" className="submit-button">Send</button>
      </form>
    </main>
  );
}

export default Chat;

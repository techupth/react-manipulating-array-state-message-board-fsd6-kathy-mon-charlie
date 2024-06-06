import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState("");
  const [fillMessage, setFillMessage] = useState([]);

  const addMessege = () => {
    const newMessage = [...fillMessage];
    newMessage.push(message);
    setFillMessage(newMessage);
  };

  const deleteMessage = () => {
    const newMessage = [...fillMessage];
    newMessage.splice(message, 1)
    setFillMessage(newMessage);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={message}
            onChange={(event) => {setMessage(event.target.value);
            }}
          />
        </label>

        <button className="submit-message-button" 
        onClick={addMessege}
        >Submit</button>
      </div>
      <div className="board">
         {
            fillMessage.map((item, index) => 
      (
        <div className="message">
          <h1>{item}</h1>
          <button className="delete-button" 
          onClick={() => {deleteMessage(index)}}>x</button>
        </div>
      )
            )
          }
          </div>
    </div>
  );
}

export default MessageBoard;

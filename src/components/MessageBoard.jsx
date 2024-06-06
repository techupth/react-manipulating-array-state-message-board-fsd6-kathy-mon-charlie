import { useState } from "react";

function MessageBoard() {
  const [inputMessage, setInputMessage] = useState("");
  const [logMessage, setLogMessage] = useState([]);

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
            value={inputMessage}
            onChange={(event) => {
              setInputMessage(event.target.value);
            }}
          />
        </label>
        <button
          className="submit-message-button"
          onClick={() => {
            inputMessage
              ? setLogMessage([...logMessage, inputMessage])
              : alert("Please submit text");
            setInputMessage("");
          }}
        >
          Submit
        </button>
      </div>
      <div className="board">
        {logMessage.map((item, index) => (
          <div className="message" key={index}>
            <h1>{item}</h1>
            <button
              className="delete-button"
              onClick={() => setLogMessage(logMessage.toSpliced(index, 1))}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;

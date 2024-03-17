import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
const Interview = () => {
  const [transcript, setTranscript] = useState("");

  const startRecording = () => {
    const recognition =
      new window.webkitSpeechRecognition() || new window.SpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const recognizedText = event.results[0][0].transcript;
      setTranscript(recognizedText);
    };

    recognition.start();
  };

  return (
    // <div className="border border-light bg-dark w-100 h-50">
    //   <div>
    //     <h3>What is the difference between HTML elements and tags?</h3>
    //     <h4>Record your answer</h4>
    //     <p>
    //       Stay to the point and aim to provide your answer within 2 minutes.
    //     </p>
    //   </div>
    //   <div className="d-flex p-2 gap-2 bg-primary rounded fw-bold fs-6 lh-1.5 text-light align-items-center border-0">
    //   <FaMicrophone />
    //     <button onClick={startRecording}>
    //       Answer
    //     </button>
    //   </div>

    //   <div>{transcript}</div>
    // </div>

    <div className="container-lg mt-4">
      <div className="border border-light bg-dark p-4 rounded">
        <div>
          <h3 className="text-light">What is the difference between HTML elements and tags?</h3>
          <h4 className="text-light">Record your answer</h4>
          <p className="text-light">
            Stay to the point and aim to provide your answer within 2 minutes.
          </p>
        </div>
        <button className="btn btn-primary d-flex align-items-center mt-4" onClick={startRecording}>
          <FaMicrophone className="text-light me-2" />
          Answer
        </button>






        
      <div className="text-light">{transcript}</div>
      </div>
    </div>
  );
};

export default Interview;

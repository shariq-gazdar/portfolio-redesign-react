import { useState, useEffect } from "react";

const Typewriter = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCaret, setShowCaret] = useState(true); // State to control caret visibility

  useEffect(() => {
    let index = 0;

    // Interval for typing text
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    // Interval for blinking caret
    const caretInterval = setInterval(() => {
      setShowCaret((prev) => !prev);
    }, 500); // Blink every 500 ms

    return () => {
      clearInterval(typingInterval);
      clearInterval(caretInterval); // Cleanup on unmount
    };
  }, [text, speed]);

  return (
    <div className="font-bold" style={{ display: "inline-block" }}>
      {displayedText}
      {showCaret && (
        <span
          className="caret"
          style={{
            borderRight: "4px solid orange",
            marginLeft: "2px",
          }}
        />
      )}
    </div>
  );
};
export default Typewriter;

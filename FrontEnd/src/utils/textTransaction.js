import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TextTransaction = ({ TEXTS, duration, color, direction }) => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      duration
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition
        style={{ color: color }}
        springConfig={presets.slow}
        direction={direction ? direction : "up"}
      >
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </h1>
  );
};
export default TextTransaction;

import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TextTransaction = ({ TEXTS, duration, color }) => {
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
      <TextTransition style={{ color: color }} springConfig={presets.wobbly}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </h1>
  );
};
export default TextTransaction;

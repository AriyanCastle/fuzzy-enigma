import React, { useEffect, useState } from "react";
import styles from "./answer.module.css";

interface AnswerProps {
  text: string;
}

export const Answer: React.FC<AnswerProps> = ({ text }) => {
  const [paragraphs, setParagraphs] = useState<string[][]>([]);

  useEffect(() => {
    if (typeof text === 'string') {
      // First split by paragraphs, then split each paragraph by words
      setParagraphs(text.split(/\n+/).map(paragraph => paragraph.split(" ")));
    }
  }, [text]);

  return (
    <div>
      {paragraphs.map((words, paragraphIndex) => (
        <p key={paragraphIndex}>
          {words.map((word, wordIndex) => (
            <span
              key={wordIndex}
              className={styles.fadeIn}
              style={{ animationDelay: `${wordIndex * 0.001}s` }}
            >
              {word}{" "}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
};

import React from "react";

const VOWELS = ["a", "e", "i", "o", "u"];

const TextEditor = () => {
  const [text, setText] = React.useState("");
  const handleChange = (value: string) => {
    const alphabetsRegEx = /^[\.a-zA-Z ]*$/;
    if (alphabetsRegEx.test(value)) {
      let tokens = value.split(" ");
      let lastWord = tokens[tokens.length - 1];
      if (lastWord[0] && VOWELS.includes(lastWord[0].toLowerCase())) {
        tokens[tokens.length - 1] = lastWord.toUpperCase();
        setText(tokens.join(" "));
      } else {
        setText(value);
      }
    }
  };

  return (
    <textarea
      placeholder="Enter some text"
      value={text}
      onChange={(event) => {
        handleChange(event.target.value);
      }}
    ></textarea>
  );
};

export default TextEditor;

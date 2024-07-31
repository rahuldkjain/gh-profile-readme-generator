import React, { useState, useRef } from "react";

const Formatter: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const applyFormat = (format: string) => {
    if (!textAreaRef.current) return;

    const textarea = textAreaRef.current;
    console.log(textarea);
    const { selectionStart, selectionEnd } = textarea;
    if (selectionStart === selectionEnd) return; // No text selected

    const selectedText = textarea.value.substring(selectionStart, selectionEnd);
    let formattedText = "";

    switch (format) {
      case "bold":
        formattedText = `<b>${selectedText}</b>`;
        break;
      case "italic":
        formattedText = `<i>${selectedText}</i>`;
        break;
      case "strikeThrough":
        formattedText = `<s>${selectedText}</s>`;
        break;
      default:
        break;
    }

    const newText =
      textarea.value.substring(0, selectionStart) +
      formattedText +
      textarea.value.substring(selectionEnd);

    setContent(newText);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div className="p-4">
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => applyFormat("bold")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Bold
        </button>
        <button
          onClick={() => applyFormat("italic")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Italic
        </button>
        <button
          onClick={() => applyFormat("strikeThrough")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Strikethrough
        </button>
      </div>
      <textarea
        ref={textAreaRef}
        value={content}
        onChange={handleChange}
        className="border p-4 rounded h-64 w-full"
      />
      <div
        className="border p-4 rounded h-64 w-full mt-4"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default Formatter;

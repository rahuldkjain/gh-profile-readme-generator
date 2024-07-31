import React, { useState } from "react";

type Operations = {
  sum: "+";
  subtraction: "-";
  multiplication: "*";
  division: "/";
};

const OPERATIONS = ["+", "-", "*", "/"];
const Calculator = () => {
  const [expression, setExpression] = useState<string>("");
  const [currentValue, setCurrentValue] = useState<string>("");
  // 2+3-1
  //

  const handleClick = (value: string) => {
    // check if the value is OPERATION(append the expression and reset the currentValue)
    if (OPERATIONS.includes(value)) {
      setExpression(expression + currentValue + value);
      setCurrentValue("");
    } else {
      setCurrentValue(currentValue + value);
    }
    // if not then append the current value
  };

  const handleSubmit = () => {
    if (expression) {
      const result = eval(expression + currentValue);
      setCurrentValue(result);
      setExpression(result);
    }
  };

  return (
    <div className="w-60 h-72 border border-black rounded bg-gray-700 text-white font-semibold flex flex-col">
      <div className="flex-grow flex flex-col justify-end px-1">
        {/* Input screen to show the numbers */}
        <div className="w-full h-12 flex items-center justify-end font-bold text-3xl align-baseline">
          {currentValue}
        </div>
      </div>
      <div>
        {/* Buttons */}
        <div className="grid grid-cols-4">
          <div className="border border-black py-2">C</div>
          <div className="border border-black py-2">+/-</div>
          <div className="border border-black py-2">%</div>
          <div className="border border-black py-2 bg-yellow-500">/</div>
        </div>
        <div className="grid grid-cols-4">
          <div
            className="border border-black py-2"
            onClick={() => handleClick("7")}
          >
            7
          </div>
          <div
            className="border border-black py-2"
            onClick={() => handleClick("8")}
          >
            8
          </div>
          <div
            className="border border-black py-2"
            onClick={() => handleClick("9")}
          >
            9
          </div>
          <div
            className="border border-black py-2 bg-yellow-500"
            onClick={() => handleClick("*")}
          >
            x
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div
            className="border border-black py-2"
            onClick={() => handleClick("4")}
          >
            4
          </div>
          <div
            className="border border-black py-2"
            onClick={() => handleClick("5")}
          >
            5
          </div>
          <div
            className="border border-black py-2"
            onClick={() => handleClick("6")}
          >
            6
          </div>
          <div
            className="border border-black py-2 bg-yellow-500"
            onClick={() => handleClick("-")}
          >
            -
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div
            className="border border-black py-2"
            onClick={() => handleClick("1")}
          >
            1
          </div>
          <div
            className="border border-black py-2"
            onClick={() => handleClick("2")}
          >
            2
          </div>
          <div
            className="border border-black py-2"
            onClick={() => handleClick("3")}
          >
            3
          </div>
          <div
            className="border border-black py-2 bg-yellow-500"
            onClick={() => handleClick("+")}
          >
            +
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div
            className="border border-black py-2 col-span-2"
            onClick={() => handleClick("0")}
          >
            0
          </div>
          <div className="border border-black py-2">.</div>
          <div
            className="border border-black py-2 bg-yellow-500"
            onClick={handleSubmit}
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

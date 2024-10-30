import { useState } from "react";
import { tokenizer } from "../utils/tokenizer";
import { parser } from "../utils/parser";
import { ASTNode } from "../utils/types";

function Home() {
  const [inputString, setInputString] = useState<string>("");
  const [parseOutput, setParseOutput] = useState<ASTNode | null | string>(null);

  const handleSubmit = () => {
    try {
      const tokens = tokenizer(inputString);
      const parse = parser(tokens);
      setParseOutput(parse);
    } catch (error) {
      setParseOutput("enter the valid json string");

    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel: JSON Editor */}
      <div className="w-full md:w-1/2 flex flex-col border-r border-gray-600">
        <textarea
          rows={20}
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
          placeholder="Enter JSON here..."
          className="h-full p-4 bg-gray-200 text-gray-900 focus:outline-none resize-none"
        />
      </div>

      <div className="flex flex-col justify-center items-center bg-gray-300 p-4 md:w-auto">
        <button
          onClick={handleSubmit}
          className="mb-2 w-32 bg-gray-700 text-white py-2 px-4 rounded"
        >
          JSON Parser 
        </button>
        {/* <button
          className="mb-2 w-32 bg-gray-700 text-white py-2 px-4 rounded"
        >
          JSON Format
        </button>
        <button
          className="mb-2 w-32 bg-gray-700 text-white py-2 px-4 rounded"
        >
          Load URL
        </button> */}
      </div>

      <div className="w-full md:w-1/2 flex flex-col border-l border-gray-600">
        <div className="flex-grow p-4 bg-gray-200">
          <pre className="whitespace-pre-wrap text-gray-900">
            {parseOutput ? JSON.stringify(parseOutput, null, 2) : "No JSON parsed yet."}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Home;

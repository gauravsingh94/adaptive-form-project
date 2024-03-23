import React from "react";
import { jsonData } from "../store/JsonData";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
const WriteJsonField = () => {
  const Navigate = useNavigate();
  const [jsonText, setJsonText] = React.useState("");
  const setJsonData = useSetRecoilState(jsonData);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonText(e.target.value);
  };
  const handleSubmit = () => {
    setJsonData(JSON.parse(jsonText));
    alert("Now click on 'See form' to see the form.");
  };
  const handleNavigate = () => {
    Navigate("/form");
  };
  return (
    <div className="flex flex-col items-center">
      <textarea
        className="w-full h-32 border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300"
        onChange={handleChange}
        value={jsonText}
        placeholder="Enter JSON here..."
      ></textarea>
      <div className="flex gap-10">
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
          onClick={handleNavigate}
        >
          See Form
        </button>
      </div>
    </div>
  );
};

export default WriteJsonField;

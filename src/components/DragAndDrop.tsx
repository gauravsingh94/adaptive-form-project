import React from "react";
import { jsonData } from "../store/JsonData";
import { useSetRecoilState } from "recoil";

const DragAndDrop: React.FC<{}> = () => {
  const setJson = useSetRecoilState(jsonData);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type === "application/json") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const jsonContent = e.target?.result;
        if (typeof jsonContent == "string") {
          setJson(JSON.parse(jsonContent));
        }
        reader.readAsText(file);
      };
    }
  };
  const handeDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  return (
    <div
      className="w-full h-full flex items-center justify-center border border-dashed border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
      onDrop={handleDrop}
      onDragOver={handeDragOver}
    >
      <div className="text-center">
      <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <p className="mt-1 text-sm text-gray-600">
          Drag and Drop the Json file Here
        </p>
      </div>
    </div>
  );
};

export default DragAndDrop;

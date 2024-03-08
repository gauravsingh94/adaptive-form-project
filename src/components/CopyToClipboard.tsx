import React from "react";

const JsonCopyButton: React.FC<{ json: string }> = ({ json }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(json);
  };

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
      onClick={copyToClipboard}
    >
      Copy to Clipboard
    </button>
  );
};

const JsonExample = () => {
  const json = `{
    "questions": [
      {
        "id": "q1",
        "text": "What is your name?",
        "type": "text"
      },
      {
        "id": "q2",
        "text": "How old are you?",
        "type": "text"
      },
      {
        "id": "q3",
        "text": "Select your gender",
        "type": "select",
        "options": [
          {
            "value": "male",
            "label": "Male"
          },
          {
            "value": "female",
            "label": "Female"
          }
        ]
      },
      {
        "id": "q4",
        "text": "Describe your symptoms",
        "type": "textarea"
      }
    ]
  }`;

  return (
    <div className="flex flex-col md:flex-row">
      <pre className="flex-1 border border-gray-300 p-4 rounded-lg overflow-auto">
        {json}
      </pre>
      <div className="md:ml-4 mt-4 md:mt-0">
        <JsonCopyButton json={json} />
      </div>
    </div>
  );
};

export default JsonExample;

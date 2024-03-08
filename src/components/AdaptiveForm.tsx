import React from "react";
import { useNavigate } from "react-router-dom";
interface Question {
  id: string;
  text: string;
  type: string;
  options?: { value: string; label: string }[];
}

interface AdaptiveFormProps {
  questions: Question[];
}

const AdaptiveForm: React.FC<AdaptiveFormProps> = ({ questions }) => {
  const Navigate = useNavigate();
  const renderQuestion = (question: Question) => {
    switch (question.type) {
      case "text":
        return (
          <div key={question.id} className="mb-4">
            <label className="block text-lg text-gray-700 mb-2">
              {question.text}
            </label>
            <input
              type="text"
              className="form-input mt-1 block w-full bg-gray-100 border-2 border-gray-200 rounded-lg p-2"
            />
          </div>
        );
      case "select":
        return (
          <div key={question.id} className="mb-4">
            <label className="block text-lg text-gray-700 mb-2">
              {question.text}
            </label>
            <select className="form-select mt-1 block w-full bg-gray-100 border-2 border-gray-200 rounded-lg p-2">
              {question.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );
      case "textarea":
        return (
          <div key={question.id} className="mb-4">
            <label className="block text-lg text-gray-700 mb-2">
              {question.text}
            </label>
            <textarea className="form-textarea mt-1 block w-full bg-gray-100 border-2 border-gray-200 rounded-lg p-2"></textarea>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      {questions.map((question) => renderQuestion(question))}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300 mt-4"
        onClick={() => Navigate("/")}
      >
        Go Back
      </button>
      <button
        type="submit"
        className="bg-green-500 ml-5 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300 mt-4"
      >
        Submit
      </button>
    </form>
  );
};

export default AdaptiveForm;

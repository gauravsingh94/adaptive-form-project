import AdaptiveForm from "../../components/AdaptiveForm";
import { jsonData } from "../../store/JsonData";
import { useRecoilValue } from "recoil";

const FormPage = () => {
  const json = useRecoilValue(jsonData);
  // @ts-ignore
  const questions = json.questions;
  console.log(questions);
  return (
    <div className="flex h-[100vh] w-full items-center justify-center">
      {questions && (
        <div className="w-full max-w-sm rounded overflow-hidden shadow-lg p-7">
          <AdaptiveForm questions={questions} />
        </div>
      )}
      {!questions && (
        <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg text-gray-700">
          No Json data provided
        </div>
      )}
    </div>
  );
};

export default FormPage;

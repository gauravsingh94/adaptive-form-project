import DragAndDrop from "../../components/DragAndDrop";
import WriteJsonField from "../../components/WriteJson";
import JsonCopyButton from "../../components/CopyToClipboard";
const HomePage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-8">
        Demo Website showing the practical implementation of the Adaptive
        Question Rendering
      </h1>

      <div className="flex justify-center items-center w-full h-full mt-40 gap-5">
        <div className="w-96 h-96">
          <DragAndDrop />
        </div>
        <div className="w-96 h-96">
          <WriteJsonField />
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center mt-10">
        Copy Sample Json File For Testing.
      </h1>
      <div className="h-96 w-full mt-10 px-40">
        <JsonCopyButton />
      </div>
    </>
  );
};

export default HomePage;

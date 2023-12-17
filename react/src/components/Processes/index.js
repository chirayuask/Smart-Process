import React, { useState } from "react";
import AI from "./AI/index";
import Manual from "./Manual/index";
const Index = () => {
  const [aiButton, setAiButton] = useState(false);
  const [manualButton, setManualButton] = useState(false);

  return (
    <>
      <div className="flex justify-center flex-row gap-10">
        <button
          onClick={() => setAiButton(!aiButton)}
          type="button"
          className="text-gray-900 bg-blue border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Create using UI
        </button>

        <button
          onClick={() => setManualButton(!manualButton)}
          type="button"
          data-modal-show="large-modal"
          className="text-gray-900 bg-blue border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Custom Process
        </button>
      </div>

      {aiButton && <AI aiButton={aiButton} setAiButton={setAiButton} />}
      {manualButton && (
        <Manual manualButton={manualButton} setManualButton={setManualButton} />
      )}
    </>
  );
};

export default Index;

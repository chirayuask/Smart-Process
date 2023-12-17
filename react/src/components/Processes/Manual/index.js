import React, { useState } from "react";
import StepTwo from "../StepTwo";
import axios from "axios";

const Index = ({ setManualButton, manualButton }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [description, setDescription] = useState("");
  const onClickNextButton = async () => {
      setTabIndex(1);
  };
  return (
    <>
      {tabIndex === 0 && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-3/4 lg:w-1/2 xl:w-2/3 2xl:w-3/4 bg-white rounded-lg shadow-lg">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Description</h3>
                </div>
                {/*body*/}
                <div class="mb-0">
                  <input
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    id="default-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setManualButton(false)
                    }}
                  >
                    Close
                  </button>
                  <button
                    onClick={() => onClickNextButton()}
                    disabled={!description}
                    className={`${
                      description
                        ? "bg-emerald-500 text-white active:bg-emerald-600 font-bold hover:shadow-lg outline-none"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed font-bold opacity-50"
                    } focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 uppercase text-sm px-6 py-3 rounded shadow`}
                    type="button"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
      {tabIndex === 1 && (
        <StepTwo
          description={description}
          setManualButton={setManualButton}
          manualButton={manualButton}
        />
      )}
    </>
  );
};

export default Index;

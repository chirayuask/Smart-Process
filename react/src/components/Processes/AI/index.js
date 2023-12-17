import React, { useState } from "react";
import axios from 'axios';

const Index = ({ setAiButton, aiButton }) => {
  const [prompt, setPrompt] = useState("");
  const onClickNextButton = async () =>{
    const {data} = await axios.post('', {prompt})
    
    setAiButton(!aiButton)
  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-3/4 lg:w-1/2 xl:w-2/3 2xl:w-3/4 bg-white rounded-lg shadow-lg">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Describe the process</h3>
            </div>
            {/*body*/}
            <div class="mb-0">
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
                onChange={(e) => setPrompt(e.target.value)}
              ></textarea>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setAiButton(!aiButton)}
              >
                Close
              </button>
              <button
                disabled={!prompt}
                className={`${
                  prompt
                    ? "bg-emerald-500 text-white active:bg-emerald-600 font-bold hover:shadow-lg outline-none"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed font-bold opacity-50"
                } focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 uppercase text-sm px-6 py-3 rounded shadow`}
                type="button"
                onClick={() => onClickNextButton()}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Index;

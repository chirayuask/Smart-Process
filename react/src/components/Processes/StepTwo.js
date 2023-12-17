import React, { useState } from "react";
import axios from "axios";

const StepTwo = ({ setManualButton, manualButton, description, steps, _id }) => {
  const [processLists, setProcessLists] = useState(steps || []);
  const [addText, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const [addButton, setAddButton] = useState(false);
  const onClickRightArrow = () => {
    let refProcessList = [...processLists];
    refProcessList.push(addText);
    setProcessLists(refProcessList);
    setAddButton(false);
    setText("");
  };
  const onClickSaveChanges = async () => {
    if(_id){
      await axios.put(`http://localhost:4200/api/v1/process?_id=${_id}`, {
        title: description,
        steps: processLists,
      });
    }else{
      await axios.post("http://localhost:4200/api/v1/process", {
        title: description,
        steps: processLists,
      });
    }
   

    setManualButton(!manualButton);
  };
  const onClickUpButton = (index) => {
    if (index > 0) {
      const updatedItems = [...processLists];
      const temp = updatedItems[index];
      updatedItems[index] = updatedItems[index - 1];
      updatedItems[index - 1] = temp;
      setProcessLists(updatedItems);
    }
  };
  const onClickDownButton = (index) => {
    if (index < processLists.length - 1) {
      const updatedItems = [...processLists];
      const temp = updatedItems[index];
      updatedItems[index] = updatedItems[index + 1];
      updatedItems[index + 1] = temp;
      setProcessLists(updatedItems);
    }
  };
  const onClickEditButton = (index) => {
    if (editIndex !== null) {
      let updatedItem = [...processLists];
      updatedItem.splice(index, 1, editValue);
      setProcessLists(updatedItem);
      setEditIndex(null);
    } else {
      setEditIndex(index);
    }
  };
  const onClickDeleteButton = (index) => {
    const updatedItems = [...processLists];
    updatedItems.splice(index, 1);
    setProcessLists(updatedItems);
  };

  return (
    <div className="w-1/2 h-1/2">
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-3/4 lg:w-1/2 xl:w-2/3 2xl:w-3/4 bg-white rounded-lg shadow-lg">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Steps Of Process</h3>
              <div className="mb-1 pt-2 relative">
                <div className="absolute top-4 right-0 flex gap-0 mt-3">
                  {/*Plus Button*/}
                  {!addButton && (
                    <button
                      onClick={() => setAddButton(true)}
                      className="p-1 rounded-full bg-transparent border-none flex items-center justify-center"
                    >
                      <svg
                        className="h-6 w-6 text-black-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="9" />
                        <line x1="9" y1="12" x2="15" y2="12" />
                        <line x1="12" y1="9" x2="12" y2="15" />
                      </svg>
                    </button>
                  )}
                  {/*Right Button */}
                  {addButton && addText && (
                    <button
                      onClick={() => onClickRightArrow()}
                      className="p-1 rounded-full bg-transparent border-none flex items-center justify-center"
                    >
                      <svg
                        className="h-6 w-6 text-black-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="9" />
                        <path d="M9 12l2 2l4 -4" />
                      </svg>
                    </button>
                  )}
                  {/*Cross Button*/}
                  {addButton && (
                    <button
                      onClick={() => {
                        setAddButton(false);
                        setText("");
                      }}
                      className="p-1 rounded-full bg-transparent border-none flex items-center justify-center"
                    >
                      <svg
                        className="h-6 w-6 text-black-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="9" />
                        <path d="M10 10l4 4m0 -4l-4 4" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
            {/*body*/}
            {addButton && (
              <input
                type="text"
                placeholder="Enter Item"
                onChange={(e) => setText(e.target.value)}
                className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-base border border-blueGray-300 outline-none focus:outline-none focus:ring w-full"
              />
            )}
            <div className="font-medium text-2xl leading-6 text-gray-700 ml-4 mb-4 mt-4">
              {description} :
            </div>
            <ol className="max-w-full space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
              {processLists &&
                processLists.map((item, index) => (
                  <div className="flex justify-between">
                    <li key={index}>
                      {editIndex === index ? (
                        <input
                          type="text"
                          defaultValue={item}
                          onChange={(e) => setEditValue(e.target.value)}
                        />
                      ) : (
                        <span className="font-semibold text-gray-900 dark:text-black">
                          {item}
                        </span>
                      )}
                    </li>
                    <div className="flex">
                      {editIndex === null && (
                        <>
                          {/* Up Button */}
                          {index !== 0 && (
                            <button
                              onClick={() => onClickUpButton(index)}
                              className="p-1 rounded-full bg-transparent border-none flex items-center justify-center"
                            >
                              <svg
                                class="h-6 w-6 text-black"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="9" />
                                <line x1="12" y1="8" x2="8" y2="12" />
                                <line x1="12" y1="8" x2="12" y2="16" />
                                <line x1="16" y1="12" x2="12" y2="8" />
                              </svg>
                            </button>
                          )}

                          {/* Down Button */}
                          {index !== processLists.length - 1 && (
                            <button
                              onClick={() => onClickDownButton(index)}
                              className="p-1 rounded-full bg-transparent border-none flex items-center justify-center"
                            >
                              <svg
                                class="h-6 w-6 text-black"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                                />
                              </svg>
                            </button>
                          )}
                          {/* Delete Button */}
                          <button
                            onClick={() => onClickDeleteButton(index)}
                            className="p-1 rounded-full bg-transparent border-none flex items-center justify-center"
                          >
                            <svg
                              class="h-6 w-6 text-black"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              {" "}
                              <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />{" "}
                              <line x1="18" y1="9" x2="12" y2="15" />{" "}
                              <line x1="12" y1="9" x2="18" y2="15" />
                            </svg>
                          </button>
                        </>
                      )}
                      {/* Edit Button */}
                      {(editIndex === null || editIndex === index) && (
                        <>
                          {/* Cross Editable Item */}
                          {editIndex === index && (
                            <button
                              onClick={() => {
                                setEditIndex(null);
                              }}
                              className="p-1 rounded-full bg-transparent border-none flex items-center justify-center"
                            >
                              <svg
                                className="h-6 w-6 text-black"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="9" />
                                <path d="M10 10l4 4m0 -4l-4 4" />
                              </svg>
                            </button>
                          )}
                          <button
                            onClick={() => onClickEditButton(index)}
                            className="p-1 rounded-full bg-transparent border-none flex items-center justify-center"
                          >
                            <svg
                              class="h-6 w-6 text-black"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                              <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                            </svg>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
            </ol>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setManualButton(!manualButton)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => onClickSaveChanges()}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default StepTwo;

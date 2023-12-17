import React, { useEffect, useState } from "react";
import axios from "axios";
import StepTwo from "../Processes/StepTwo";

const Index = () => {
  const [processList, setProcessList] = useState([]);
  const [manualButton, setManualButton] = useState(false);
  const [currentItem, setCurrentItem] = useState();

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:4200/api/v1/process");
    if (data.success) setProcessList(data.data);
  };
  useEffect(() => {
    fetchData();
  }, [manualButton]);
  const onClickEditButton = (item) => {
    setCurrentItem(item)
    setManualButton(true);
  };

  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Description
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {processList.length > 0 &&
              processList.map((item, index) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.title}
                  </th>
                  <td class="px-6 py-4 text-right">
                    <button onClick={() => onClickEditButton(item)}>
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {manualButton && <StepTwo manualButton = {manualButton} setManualButton = {setManualButton} description={currentItem.title} steps = {currentItem.steps} _id={currentItem._id}/>}
    </>
  );
};

export default Index;

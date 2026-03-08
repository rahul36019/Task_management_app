import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className=" h-full overflow-x-auto flex items-centre my-5 "
    >
      <div className="flex-shrink-0  h-full w-[300px] bg-yellow-400 rounded-xl bg-yellow-400">
        <div className="flex justify-between items-centre">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded ">high</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold ">Make a good video</h2>
      </div>
    </div>
  );
};

export default TaskList;

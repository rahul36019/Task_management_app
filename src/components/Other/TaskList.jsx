import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="flex-1 overflow-x-auto flex gap-5 items-start my-5 w-full"
    >
      {/* Individual Card */}
      <div className="flex-shrink-0 p-5 h-full w-[300px] bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">high</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Make a good video</h2>
        <p className="text-sm mt-2">
          Add some description here to see how it fills the card!
        </p>
      </div>
    </div>
  );
};

export default TaskList;

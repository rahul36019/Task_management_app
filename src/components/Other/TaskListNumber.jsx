import React from "react";

const TasklistNumber = () => {
  return (
    <div className="flex mt1-10 justify-between gap-5 screen">
      <div className="w-1/2 bg-red-400 px-9 py-6 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-2xl font-medium">New task</h3>
      </div>
      <div className="w-1/2 bg-blue-400 px-9 py-6 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-2xl font-medium">New task</h3>
      </div>
      <div className="w-1/2 bg-green-400 px-9 py-6 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-2xl font-medium">New task</h3>
      </div>
      <div className="w-1/2 bg-yellow-400 px-9 py-6 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-2xl font-medium">New task</h3>
      </div>
    </div>
  );
};

export default TasklistNumber;

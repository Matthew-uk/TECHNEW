"use client";
import React, { ChangeEvent, useState } from "react";
import Task from "./tasks";

const TaskManager = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask("");
    console.log(tasks);
  };

  const handleDeleteTask = (text: string) => {
    setTasks(tasks.filter((task) => task !== text));
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-blue-500">
      <div className="md:w-1/2 w-5/6 min-h-max bg-white rounded-md p-6 shadow-lg text-lg flex flex-col my-6">
        <div className="flex flex-row justify-between gap-4">
          <input
            type="text"
            className="w-full h- border-[1.5px] border-blue-bg-blue-500 rounded-md outline-none p-2"
            onChange={handleInputChange}
            value={newTask}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md disabled:cursor-not-allowed disabled:bg-blue-500/60"
            onClick={() => handleAddTask()}
            disabled={!newTask && true}
          >
            Add
          </button>
        </div>
        <div className="flex flex-col gap-3 mt-12">
          {tasks.map((task, index) => (
            <Task
              text={task}
              key={index}
              index={index}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;

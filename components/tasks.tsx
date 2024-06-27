import { Trash2 } from "lucide-react";
import React from "react";

interface TaskProps {
  text: string;
  index: number;
  handleDeleteTask: (text: string) => void;
}

const Task: React.FC<TaskProps> = ({ text, index, handleDeleteTask }) => {
  return (
    <div className="bg-white p-4 border border-gray-200 shadow-sm flex justify-between items-center rounded-lg gap-4 h-max scroll">
      <h2 className="flex-grow md:text-lg text-base text-gray-700 w-2/3">
        <span className="font-medium">{index + 1}.</span> {text}
      </h2>
      <Trash2
        className="p-2 cursor-pointer bg-blue-800 text-white rounded-md "
        size={35}
        onClick={() => handleDeleteTask(text)}
      />
    </div>
  );
};

export default Task;

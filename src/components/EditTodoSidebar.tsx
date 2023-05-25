import { useState } from "react";

interface EditTodoSidebarProps {
  todo: any | null;
  newTodo: string;
  onSave: (newTodo: string, newDescription: string) => void;
  onBack: () => void;
  onNewTodoChange: (value: string) => void;
}

const EditTodoSidebar: React.FC<EditTodoSidebarProps> = ({
  todo,
  onSave,
  onBack,
  newTodo,
  onNewTodoChange,
}) => {
  //   const [newTodo, setNewTodo] = useState(todo?.todo || "");
  const [newDescription, setNewDescription] = useState(todo?.description || "");

  if (!todo) {
    return null; // Return null if no todo is selected
  }
  const handleSave = () => {
    onSave(newTodo, newDescription);
  };

  return (
    <div className="pl-3 bg-primaryDark-500 h-screen border-r-2 border-secondary-200 md:w-[300px] absolute right-0 top-[95px] border-l-2 z-10">
      <div className="inline-flex ml-2 gap-3 justify-start mt-3 mb-3">
        <button onClick={onBack}>←</button>
        <h2>Edit Todo</h2>
      </div>
      <input
        type="text"
        placeholder="Edit Todo"
        className="rounded px-2 py-1 mb-1 bg-primaryDark-100 h-12   w-11/12"
        value={newTodo}
        onChange={(e) => onNewTodoChange(e.target.value)}
      />
      <input
        type="text"
        placeholder="Edit Todo Description"
        className="rounded px-2 py-1 bg-inherit h-28 bg-primaryDark-100 w-11/12"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button
        className="px-4 block w-11/12 py-1 bg-primary-500 text-white rounded-lg  mt-2"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default EditTodoSidebar;

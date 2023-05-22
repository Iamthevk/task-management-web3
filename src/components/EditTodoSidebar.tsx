import { useState } from "react";

interface EditTodoSidebarProps {
  todo: Todo | null;
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
    <div className="pl-3 bg-primaryDark-500 h-screen border-r-2 border-secondary-200 md:w-[300px] absolute right-0 top-[95px] border-l-2">
      <div className="inline-flex ml-2 gap-3 justify-start mt-3">
        <button onClick={onBack}>←</button>
        <h2>Edit Todo</h2>
      </div>
      <input
        type="text"
        placeholder="Edit Todo"
        className="rounded px-2 py-1 bg-inherit"
        value={newTodo}
        onChange={(e) => onNewTodoChange(e.target.value)}
      />
      <input
        type="text"
        placeholder="Edit Todo Description"
        className="rounded px-2 py-1 bg-inherit"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-primary-500 text-white rounded mt-2"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default EditTodoSidebar;

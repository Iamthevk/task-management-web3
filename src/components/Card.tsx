import React, { useState } from "react";
import Image from "next/image";
import EditTodoSidebar from "./EditTodoSidebar";

interface Todo {
  todo: string;
  description: string;
}

const Card = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [showEditBar, setShowEditBar] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const handleAddTodo = (e: any) => {
    e.preventDefault();
    if (newTodo.trim() === "" || newDescription.trim() === "") {
      return;
    }

    if (isEditMode && editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = { todo: newTodo, description: newDescription };
      setTodos(updatedTodos);
      setNewTodo("");
      setNewDescription("");
      setIsEditMode(false);
      setEditIndex(null);
    } else {
      const todo = { todo: newTodo, description: newDescription };
      setTodos([...todos, todo]);
      setNewTodo("");
      setNewDescription("");
      setSelectedTodo(todo);
    }
  };
  const handleEditTodo = (index: number) => {
    const todo = todos[index];
    setNewTodo(todo.todo);
    setNewDescription(todo.description);
    setIsEditMode(true);
    setEditIndex(index);
    setSelectedTodo(todo);
  };
  const handleSave = (newTodo: string, newDescription: string) => {
    setShowEditBar(false);
  };
  const handleBack = () => {
    setShowEditBar(false);
  };

  return (
    <>
      <div className="bg-primaryDark-200 w-72 p-2 rounded-lg mt-2">
        <form className="mb-4 relative">
          <div className="flex">
            <Image
              src="/bag.png"
              alt="money bag"
              width={28}
              height={24}
              className="min-w-[24px] mb-1 "
            />
            <input
              type="text"
              placeholder="Add Todo"
              className="rounded px-2 py-1 bg-inherit"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Add Todo Description"
            className="rounded px-2 py-1 bg-inherit"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button
            type="submit"
            className=" w-7 bg-primaryDark-100 text-xl absolute font-extrabold right-2 top-1 text-white ml-2 rounded-full"
            onClick={handleAddTodo}
          >
            +
          </button>
        </form>
      </div>
      <div>
        {todos.map((todo, index) => (
          <div
            key={index}
            className="bg-primaryDark-200 w-72 p-2 rounded-lg mt-2 relative "
          >
            <div className="absolute inset-y-2 left-0 bg-border-500 w-1"></div>
            <div className="flex ">
              <Image
                src="/bag.png"
                alt="money bag"
                width={28}
                height={24}
                className="min-w-[24px] mb-1 "
              />
              <h3 className="rounded px-2 py-1 bg-inherit">{todo.todo}</h3>
            </div>
            <p className="rounded px-2 py-1 bg-inherit">{todo.description}</p>
            {/* <div className=" w-7 bg-primaryDark-100 text-xl  font-extrabold right-2 top-1 text-white rounded-full"> */}
            <button
              className="w-7 bg-primaryDark-100 text-xl absolute font-extrabold right-5 top-2 text-white ml-2 rounded-full"
              onClick={() => {
                handleEditTodo(index);
                setShowEditBar(true);
              }}
            >
              <Image src={"/edit.png"} width={28} height={24} alt="edit" />
            </button>
          </div>
        ))}
      </div>
      {showEditBar && (
        <EditTodoSidebar
          todo={selectedTodo}
          newTodo={newTodo}
          onBack={handleBack}
          onSave={handleSave}
          onNewTodoChange={setNewTodo}
        />
      )}
    </>
  );
};

export default Card;

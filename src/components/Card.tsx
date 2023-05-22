import React, { useState } from "react";
import Image from "next/image";

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

  const handleAddTodo = (e: any) => {
    e.preventDefault();
    console.log("clciked");
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
    }
  };
  const handleEditTodo = (index: number) => {
    const todo = todos[index];
    setNewTodo(todo.todo);
    setNewDescription(todo.description);
    setIsEditMode(true);
    setEditIndex(index);
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
            {isEditMode ? "-" : "+"}
          </button>
        </form>
      </div>
      <div>
        {todos.map((todo, index) => (
          <div
            key={index}
            className="bg-primaryDark-200 w-72 p-2 rounded-lg mt-2 relative"
          >
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
              onClick={() => handleEditTodo(index)}
            >
              <Image src={"/edit.png"} width={28} height={24} alt="edit" />
            </button>
            {/* <button onClick={() => handleDeleteTodo(index)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500 hover:text-red-700 cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a9 9 0 100 18A9 9 0 0010 1zm5 9a1 1 0 01-2 0v-1h-1v2h2v1h-2v2h-1v-2H8v-1h2V9H9V8h2V6h1v2h2v1h-2v1h1v1zM5 9a1 1 0 112 0v1H6v-2h1V7H5v1h1v1H5v1zm5-7a7 7 0 100 14A7 7 0 0010 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </button> */}
          </div>
          // </div>
        ))}
      </div>
    </>
  );
};

export default Card;

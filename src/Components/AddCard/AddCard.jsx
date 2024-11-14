import React, { useState, useEffect } from "react";
import CardDispatch from "../../hook/CardDispatch";

const intialState = {
  name: "",
  role: "",
  image: "",
};

function AddCard({  editablecard }) {
  const [card, setcard] = useState(intialState);

           const dispatch=        CardDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if (editablecard) {
      dispatch({ type: "update", playload: card });
    } else {
      dispatch({ type: "ADD", playload: card });
    }
    // console.log("hellow");

    setcard(intialState);
  }

  function handleChange(e) {
    console.log(e.target.name);
    setcard({ ...card, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (editablecard) {
      setcard(editablecard);
    }
  }, [editablecard]);

  return (
    <>
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            New Add Card
          </h5>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={card.name}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="role"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              profession
            </label>
            <input
              type="text"
              name="role"
              onChange={handleChange}
              value={card.role}
              id="role"
              placeholder="profession"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {editablecard ? "Edit" : "Add"}
          </button>
        </form>
      </div>
    </>
  );
}

export default AddCard;

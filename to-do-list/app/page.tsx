"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (ele) => {
    ele.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((e, i) => {
      return (
        <li key={i} className="list-none">
          <div className="flex justify-between mb-5">
            <h1 className="text-2xl font-semibold">{e.title}</h1>
            <p>{e.desc}</p>
            <button className="p-1 bg-red-400 rounded"
              onClick={() => {
                {
                  deleteHandler(i);
                }
              }}>
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className=" bg-cyan-400  text-white p-4 font-bold text-center">
        Gaurav To-Do List
      </h1>
      <div className="container ">
        <form
          className="flex flex-col ... place-items-center m-2"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            className=" border-black border-1"
            placeholder="Enter title here"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <input
            type="text"
            className="m-2 w-80  border-black border-1"
            placeholder="Enter Description here"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
          <button className="bg-orange-500 text-white rounded p-1">
            Add Task
          </button>
        </form>
        <hr />
        <div className="p-4 bg-slate-200 text-center">{renderTask}</div>
      </div>
    </>
  );
};

export default page;

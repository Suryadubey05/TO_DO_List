import React, { useState } from 'react'

export default function App() {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setmainTask(copyTask)
  }


  let renderTask = <h2 className='text-center text-xl font-semibold'>No Task Available</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-5'>
          <div className='flex items-center justify-between mb-5 w-2/3 border-b-2 border-zinc-900 rounded-xl'>
            <h5 className='text-2xl font-semibold ml-2 '>{t.title}</h5>
            <h6 className='text-lg   mr-2'>{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i)
            }}
            className='px-4 py-2  bg-red-500 text-white rounded-xl text-lg font-bold'>
            Delete</button>
        </li>
      );
    })
  }

  return (
    <>
      <h1 className='w-full h-20 text-5xl font-bold  flex items-center justify-center bg-zinc-900 text-white'>
        My ToDo List</h1>
      <form onSubmit={submitHandler} className='flex justify-center items-center'>
        <input type="text" placeholder='Enter title here'
          className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2 '
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />

        <input type="text" placeholder='Enter Description here'
          className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2 '
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />
        <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded-xl'>Add task</button>
      </form>
      <hr />
      <div className='w-full flex justify-center'>
        <div className='p-8 bg-slate-200 m-10 w-1/2 rounded-xl  '>
          <ul>
            {renderTask}
          </ul>
        </div>
      </div>
    </>
  )
}

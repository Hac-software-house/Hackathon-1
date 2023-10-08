'use client'
import React, { useState } from "react";
import SideBar from "../(components)/sideBar/sideBar";

export default function Students() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [contact, setContact] = useState("");

  const handleFormSubmit = () => {
    // Here, you can send the data to your server or store it locally
    // For example, you can use an API call or save it to local storage.
    console.log("Name:", name);
    console.log("ID:", id);
    console.log("Contact:", contact);

    // Reset the input fields after submission if needed
    setName("");
    setId("");
    setContact("");
  };

  return (
    <div className='grid grid-cols-4 gap-4'>
      <div className='col-span-1 bg-blue-500'>
        <SideBar />
      </div>
      <div className='col-span-3 grid sm:grid-cols-1 mx-[200px] text-red-600'>
        <h1 className="text-3xl flex justify-center pt-10 font-bold">Admission Of Students</h1>
        <label htmlFor="NAME">Enter Student Name</label>
        <input
          id="NAME"
          className="flex justify-center bg-blue-400 text-red-950 font-bold"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <hr />
        <label htmlFor="id">Enter Student Id</label>
        <input
          id="id"
          className="flex justify-center bg-blue-400 text-red-950 font-bold"
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <hr />
        <label htmlFor="contact">Enter Contact</label>
        <input
          id="contact"
          className="flex justify-center bg-blue-400 text-red-950 font-bold"
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <hr />
        <button className="bg-black text-white mx-auto w-[100px]" onClick={handleFormSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

'use client'
import React, { useState } from "react";
import SideBar from "../(components)/sideBar/sideBar";

export default function Page() {
  const [studentId, setStudentId] = useState([]);
  const [coursesId, setCourseId] = useState([]);
  const [studentDate, setStudentDate] = useState([]);

  // Function to handle the form submission
  const handlePresent = () => {
    // Get the values from the input fields
    const enteredStudentId = document.getElementById("name").value;
    const enteredCourseId = document.getElementById("id").value;
    const enteredDate = document.getElementById("des").value;

    // Update the state with the entered data
    setStudentId([...studentId, enteredStudentId]);
    setCourseId([...coursesId, enteredCourseId]);
    setStudentDate([...studentDate, enteredDate]);
  };

  // Function to handle editing a specific entry
  const handleEdit = (index) => {
    // You can implement an edit modal or a different UI for editing
    // For simplicity, this example sets the value of the inputs to the current data
    document.getElementById("name").value = studentId[index];
    document.getElementById("id").value = coursesId[index];
    document.getElementById("des").value = studentDate[index];
  };

  // Function to handle deleting a specific entry
  const handleDelete = (index) => {
    // Create copies of the state arrays
    const updatedStudentId = [...studentId];
    const updatedCoursesId = [...coursesId];
    const updatedStudentDate = [...studentDate];

    // Remove the item at the specified index
    updatedStudentId.splice(index, 1);
    updatedCoursesId.splice(index, 1);
    updatedStudentDate.splice(index, 1);

    // Update the state with the updated arrays
    setStudentId(updatedStudentId);
    setCourseId(updatedCoursesId);
    setStudentDate(updatedStudentDate);
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1">
        <SideBar />
      </div>
      <div className="col-span-3 grid font-bold sm:grid-cols-1 text-red-800">
        <label className="flex justify-center" htmlFor="name">
          Enter Student ID
        </label>
        <input
          className="flex justify-center mx-36 bg-slate-500"
          type="number"
          id="name"
        />
        <hr />
        <label className="flex justify-center" htmlFor="id">
          Enter Course ID
        </label>
        <input
          className="flex justify-center mx-36 bg-slate-500"
          type="number"
          id="id"
        />
        <hr />
        <label className="flex justify-center" htmlFor="des">
          Enter Date
        </label>
        <input
          className="flex justify-center mx-36 bg-slate-500"
          type="number"
          id="des"
        />
        <hr />
        <button
          className="bg-blue-500 mx-auto w-[150px]"
          onClick={handlePresent} // Attach click event handler
        >
          Present
        </button>

        {/* Display the entered data */}
        <div>
          <ul className="mt-10">
            {studentId.map((student, index) => (
              <li className="mx-auto" key={index}>
                Student ID: {student},<hr /> Course ID: {coursesId[index]},<hr /> Date: {studentDate[index]} <hr />
                <button className="bg-blue-500 w-[100px]" onClick={() => handleEdit(index)}>Edit</button>
                <button className="bg-blue-500 mx-5 w-[100px]" onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

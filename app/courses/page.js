'use client'
import React, { useState } from "react";
import SideBar from "../(components)/sideBar/sideBar";

export default function Page() {
  const [courses, setCourses] = useState([]);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseDescription, setCourseDescription] = useState("");

  const handleAddCourse = () => {
    // Create a new course object
    const newCourse = {
      name: courseName,
      code: courseCode,
      description: courseDescription,
    };

    // Update the state with the new course
    setCourses([...courses, newCourse]);

    // Clear the input fields
    setCourseName("");
    setCourseCode("");
    setCourseDescription("");
  };

  const handleShowAllCourses = () => {
    setShowAllCourses(true);
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1">
        <SideBar />
      </div>
      <div className="col-span-3 grid font-bold sm:grid-cols-1 text-red-800">
        <label className="flex justify-center" htmlFor="name">
          Enter Course Name
        </label>
        <input
          className="input-field flex justify-center mx-36 bg-slate-500"
          type="text"
          id="name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <hr />
        <label className="flex justify-center" htmlFor="id">
          Enter Code
        </label>
        <input
          className="input-field flex justify-center mx-36 bg-slate-500"
          type="number"
          id="id"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
        />
        <hr />
        <label className="flex justify-center" htmlFor="des">
          Enter Course Description
        </label>
        <input
          className="input-field flex justify-center mx-36 bg-slate-500"
          type="text"
          id="des"
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
        />
        <hr />
        <button
          className="add-button"
          onClick={handleAddCourse}
        >
          Add Course
        </button>

        {/* Display the list of all courses */}
        {showAllCourses && (
          <div>
            <button
              className="show-button"
              onClick={handleShowAllCourses}
            >
              Show All Courses
            </button>
            <ul className="course-list">
              {courses.map((course, index) => (
                <li className="course-item" key={index}>
                  Course Name: {course.name}, Code: {course.code}, Description: {course.description}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
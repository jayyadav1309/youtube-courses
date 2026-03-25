import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { ToastContainer } from "react-toastify";

const Allcourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    document.title = "All Courses || LearnCodeWithJAY";
    getAllCoursesFromServer();
  }, []);

  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        console.log(response.data);
        setCourses(response.data);
        //toast.success("Courses loaded");
      },
      (error) => {
        console.log(error);
        //toast.error("Something went wrong");
      }
    );
  };

  return (
    <div>
      <ToastContainer />
      <h1>All courses</h1>
      <p>List of courses are as follows</p>
      {courses.length > 0 ?
        courses.map((item, index) => <Course key={index} course={item} />)
        : "No courses"}
    </div>
  );
};

export default Allcourses;

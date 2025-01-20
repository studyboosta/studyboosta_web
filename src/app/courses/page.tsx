"use client";
import { coursesStore } from "@/components/courses/coursesStore";
import Menu from "@/components/courses/Menu";
import SearchBar from "@/components/SearchBar";
import React from "react";
import { Provider } from "react-redux";

const courses = () => {
  return (
    <section className="sm:px-0 px-3">
      <SearchBar placeholder="Search courses.." />
      <Provider store={coursesStore}>
        <Menu />
      </Provider>
    </section>
  );
};

export default courses;

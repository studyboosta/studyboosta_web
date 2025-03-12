"use client";
import { coursesStore } from "@/components/courses/coursesStore";
import Menu from "@/components/courses/Menu";
import ProtectedRoute from "@/components/ProtectedRoutes";
import SearchBar from "@/components/SearchBar";
import React, { useState } from "react";
import { Provider } from "react-redux";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <ProtectedRoute>
      <section className="sm:px-0 px-3">
        <SearchBar
          placeholder="Search courses..."
          onSearch={(query) => setSearchQuery(query)}
        />
        <Provider store={coursesStore}>
          <Menu searchQuery={searchQuery} />
        </Provider>
      </section>
    </ProtectedRoute>
  );
};

export default Courses;

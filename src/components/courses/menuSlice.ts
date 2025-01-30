// menuSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Video {
  link: string;
  name: string;
}

interface Content {
  title: string;
  summary: string[];
  videos: Video[];
}

interface MenuState {
  faculty: string;
  department: string;
  level: number;
  selectedContent: Content | null;
  loading: boolean;
}

const initialState: MenuState = {
  faculty: "Engineering",
  department: "Computer Engineering",
  level: 300,
  selectedContent: null,
  loading: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setFaculty: (state, action: PayloadAction<string>) => {
      state.faculty = action.payload;
    },
    setDepartment: (state, action: PayloadAction<string>) => {
      state.department = action.payload;
    },
    setLevel: (state, action: PayloadAction<number>) => {
      state.level = action.payload;
    },
    setSelectedContent: (state, action: PayloadAction<Content | null>) => {
      state.selectedContent = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setFaculty,
  setDepartment,
  setLevel,
  setSelectedContent,
  setLoading,
} = menuSlice.actions;

export default menuSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";

export const coursesStore = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export type CoursesState = ReturnType<typeof coursesStore.getState>;
export type CoursesDispatch = typeof coursesStore.dispatch;

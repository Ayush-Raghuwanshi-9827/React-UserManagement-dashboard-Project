import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, name: "Ayush Raghuwanshi", email: "ayush@example.com" },
    { id: 2, name: "Rainbow", email: "rainbow@example.com" },
    { id: 3, name: "Ansh", email: "ansh@example.com" },
  ],
  searchTerm: "",
  goals: [
    { id: 1, userId: 1, goal: " React", status: "In Progress" },
    { id: 2, userId: 1, goal: "Build a Web App", status: "Not Started" },
    { id: 3, userId: 2, goal: "Improve CSS skills", status: "Completed" },
    { id: 4, userId: 3, goal: "Java Development", status: "In Progress" },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    addGoal: (state, action) => {
      const { userId, goal, status } = action.payload;
      state.goals.push({ id: Date.now(), userId, goal, status });
    },
    deleteGoal: (state, action) => {
      const goalId = action.payload;
      state.goals = state.goals.filter((goal) => goal.id !== goalId);
    },
    updateGoal: (state, action) => {
      const { id, updatedGoal } = action.payload;
      const goal = state.goals.find((goal) => goal.id === id);
      if (goal) {
        goal.goal = updatedGoal;
      }
    },
    updateGoalStatus: (state, action) => {
      const { id, status } = action.payload;
      const goal = state.goals.find((goal) => goal.id === id);
      if (goal) {
        goal.status = status;
      }
    },
  },
});

export const {
  setSearchTerm,
  addGoal,
  deleteGoal,
  updateGoal,
  updateGoalStatus,
} = userSlice.actions;

export default userSlice.reducer;

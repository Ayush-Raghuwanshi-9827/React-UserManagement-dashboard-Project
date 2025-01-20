import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addGoal, deleteGoal, updateGoalStatus } from "../redux/userSlice";

const GoalDetails = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();

  const user = useSelector((state) =>
    state.users.users.find((u) => u.id === parseInt(userId))
  );
  const goals = useSelector((state) =>
    state.users.goals.filter((g) => g.userId === parseInt(userId))
  );

  const [editGoalId, setEditGoalId] = useState(null);
  const [goalText, setGoalText] = useState("");
  const [goalStatus, setGoalStatus] = useState("Not Started");

  const handleAddGoal = () => {
    const newGoal = prompt("Enter new goal:");
    if (newGoal) {
      dispatch(
        addGoal({
          userId: parseInt(userId),
          goal: newGoal,
          status: "Not Started",
        })
      );
    }
  };

  const handleEditGoal = (goal) => {
    setEditGoalId(goal.id);
    setGoalText(goal.goal);
    setGoalStatus(goal.status);
  };

  const handleSaveGoal = (goalId) => {
    dispatch(
      updateGoalStatus({
        goalId,
        goal: goalText,
        status: goalStatus,
      })
    );
    setEditGoalId(null);
    setGoalText("");
    setGoalStatus("Not Started");
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">{user.name}'s Goals</h1>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-3 text-left">Goal</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {goals.length > 0 ? (
                goals.map((goal) => (
                  <tr key={goal.id} className="border-b last:border-none">
                    <td className="px-4 py-3">
                      {editGoalId === goal.id ? (
                        <textarea
                          value={goalText}
                          onChange={(e) => setGoalText(e.target.value)}
                          className="w-full px-2 py-1 border rounded"
                        />
                      ) : (
                        goal.goal
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {editGoalId === goal.id ? (
                        <select
                          value={goalStatus}
                          onChange={(e) => setGoalStatus(e.target.value)}
                          className="px-2 py-1 border rounded"
                        >
                          <option value="Not Started">Not Started</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Completed">Completed</option>
                        </select>
                      ) : (
                        goal.status
                      )}
                    </td>
                    <td className="px-4 py-3 flex gap-4">
                      {editGoalId === goal.id ? (
                        <button
                          onClick={() => handleSaveGoal(goal.id)}
                          className="px-4 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEditGoal(goal)}
                          className="px-4 py-2 rounded-md border bg-yellow-300 hover:bg-yellow-400 border-gray-300 shadow-sm hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-gray-400"
                        >
                          Update Goal
                        </button>
                      )}
                      <button
                        onClick={() => dispatch(deleteGoal(goal.id))}
                        className="px-4 py-2 rounded-md border border-red-500 text-red-500 shadow-sm hover:bg-red-50 transition focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center text-gray-500 py-6">
                    No goals found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={handleAddGoal}
            className="px-6 py-2 rounded-lg border border-gray-300 bg-blue-300 shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
          >
            Add Goal
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoalDetails;

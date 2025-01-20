import React from 'react';
import { useSelector } from 'react-redux';

const Summary = () => {
  const users = useSelector((state) => state.users.users || []);
  const goals = useSelector((state) => state.users.goals || []);

  const totalGoals = goals.length || 0;
  const completedGoals = goals.filter((goal) => goal.status === 'Completed').length;

  return (
    <div className="bg-slate-200 p-2 rounded-md shadow-md mb-3 flex flex-row justify-center gap-5 font-semibold">
      <p>Total Users: {users.length || 0}</p>
      <p>Total Goals: {totalGoals}</p>
      <p>Completed Goals: {completedGoals}</p>
    </div>
  );
};

export default Summary;

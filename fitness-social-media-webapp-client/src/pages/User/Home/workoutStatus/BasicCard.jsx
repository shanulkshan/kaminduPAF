import React, { useState } from "react";

export default function BasicCard({ name }) {
  const [completed, setCompleted] = useState(0);
  const [burnedCalories, setBurnedCalories] = useState(0);

  return (
    <div className="p-4 bg-orange-500 rounded w-36">
      <div className="text-white">{name}</div>
      <br />
      <div className="text-white">sets: {completed}</div>
      <input
        type="number"
        min="0"
        max="100"
        step="1"
        value={completed}
        onChange={(e) => setCompleted(e.target.value)}
        className="w-full"
      />
      <br />
      <div className="text-white">Burned Calories: {burnedCalories}</div>
      <input
        type="number"
        min="0"
        max="100"
        step="1"
        value={burnedCalories}
        onChange={(e) => setBurnedCalories(e.target.value)}
        className="w-full"
      />
    </div>
  );
}

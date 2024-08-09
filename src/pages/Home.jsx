import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { marked } from "marked";

const Home = () => {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all stored nutrition plans from local storage
    const storedPlans =
      JSON.parse(localStorage.getItem("nutritionPlans")) || [];
    setPlans(storedPlans);
  }, []);

  const handleClick = (index) => {
    navigate(`/plan/${index}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-12">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Saved Nutrition Plans
      </h1>
      {plans.length === 0 ? (
        <p className="text-gray-700">No nutrition plans saved yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((planData, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className="bg-white p-4 rounded shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-blue-600">
                Plan #{index + 1}
              </h2>
              <p className="text-sm text-gray-500">
                Created on: {planData.timestamp}
              </p>
              <div
                className="text-gray-700 mt-2 prose"
                dangerouslySetInnerHTML={{
                  __html: marked(
                    planData.plan.split("\n").slice(0, 5).join("\n")
                  ),
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

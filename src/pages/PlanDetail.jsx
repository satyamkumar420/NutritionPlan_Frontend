import { useParams, useNavigate } from "react-router-dom";
import { marked } from "marked";

const PlanDetail = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const plans = JSON.parse(localStorage.getItem("nutritionPlans")) || [];
  const plan = plans[index];

  const handleDelete = () => {
    const updatedPlans = plans.filter((_, i) => i !== parseInt(index));
    localStorage.setItem("nutritionPlans", JSON.stringify(updatedPlans));
    navigate("/");
  };

  if (!plan) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-900">
        <p className="text-red-500 font-bold text-2xl">Plan not found!</p>
        <button
          onClick={() => navigate("/")}
          className="ml-4 text-blue-500 underline"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-900">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
          Nutrition Plan #{parseInt(index) + 1}
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Created on: {plan.timestamp}
        </p>
        <div
          className="prose max-w-full"
          dangerouslySetInnerHTML={{ __html: marked(plan.plan) }}
        />
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => navigate("/")}
            className=" w-full sm:w-60 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Back to Home
          </button>
          <button
            onClick={handleDelete}
            className="w-full sm:w-60  px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanDetail;

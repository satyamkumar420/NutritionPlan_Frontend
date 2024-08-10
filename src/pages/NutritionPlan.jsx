import { useState } from "react";
import axios from "axios";
import { marked } from "marked";

const API_URL =
  "https://nutritionplan-backend.onrender.com/generate-nutrition-plan";

const NutritionPlan = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
    medicalInfo: "",
    vegetarian: false,
    activityLevel: "",
    goal: "",
    dietaryRestrictions: "",
    preferredMeals: "",
  });

  const [nutritionPlan, setNutritionPlan] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNutritionPlan("");

    try {
      const res = await axios.post(API_URL, formData);
      const generatedPlan = res.data.text;
      setNutritionPlan(generatedPlan);

      // Save the generated plan to local storage with timestamp
      const timestamp = new Date().toLocaleString();
      const storedPlans =
        JSON.parse(localStorage.getItem("nutritionPlans")) || [];
      storedPlans.push({ plan: generatedPlan, timestamp });
      localStorage.setItem("nutritionPlans", JSON.stringify(storedPlans));
    } catch (error) {
      console.error("Error generating nutrition plan:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 text-gray-900">
      {/* Form Section */}
      <div className="lg:w-1/3 bg-white p-6 shadow-md lg:h-screen lg:sticky lg:top-0 overflow-auto">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">
          Nutrition Plan Generator with AI 🍽️🥗
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              Weight (kg)
            </label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              Height (cm)
            </label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              Medical Information
            </label>
            <textarea
              name="medicalInfo"
              value={formData.medicalInfo}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 max-h-52 min-h-16"
            ></textarea>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="vegetarian"
              checked={formData.vegetarian}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-gray-700 font-semibold">Vegetarian</label>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              Activity Level
            </label>
            <select
              name="activityLevel"
              value={formData.activityLevel}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select activity level</option>
              <option value="sedentary">Sedentary</option>
              <option value="light">Lightly active</option>
              <option value="moderate">Moderately active</option>
              <option value="active">Active</option>
              <option value="very-active">Very active</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Goal</label>
            <select
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select goal</option>
              <option value="weight-loss">Weight Loss</option>
              <option value="weight-gain">Weight Gain</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              Dietary Restrictions
            </label>
            <input
              type="text"
              name="dietaryRestrictions"
              value={formData.dietaryRestrictions}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              Preferred Meals
            </label>
            <input
              type="text"
              name="preferredMeals"
              value={formData.preferredMeals}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 rounded ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold`}
            disabled={loading}
          >
            {loading ? "Generating Plan..." : "Generate Nutrition Plan"}
          </button>
        </form>
      </div>

      {/* Display Section */}
      <div className="lg:w-2/3 p-6 lg:p-12 overflow-y-auto h-screen">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Your Nutrition Plan
        </h2>
        <div className="bg-white p-6 rounded shadow-md">
          {loading && (
            <p className="text-blue-500 font-semibold">
              Generating your personalized nutrition plan... 🕒
            </p>
          )}

          {!loading && nutritionPlan && (
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: marked(nutritionPlan) }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NutritionPlan;

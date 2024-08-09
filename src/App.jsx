import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

const NutritionPlan = lazy(() => import("./pages/NutritionPlan"));
const Home = lazy(() => import("./pages/Home"));
const PlanDetail = lazy(() => import("./pages/PlanDetail"));

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/create-plan" element={<NutritionPlan />} />
            <Route path="/" element={<Home />} />
            <Route path="/plan/:index" element={<PlanDetail />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;

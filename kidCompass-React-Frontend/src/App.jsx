import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignUpPage";
import BrowsePage from "./components/BrowsePage";
import KidDetailPage from "./components/KidDetailPage";
import Header from "./components/Header";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import FeedbackForm from "./components/FeedbackForm";
import Events from "./components/Events";

function App() {
  const [userName, setUserName] = useState(""); //Null  for empty string
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  return (
    <BrowserRouter>
      {" "}
      <Header setFeedbackOpen={setFeedbackOpen} />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/login"
          element={<LoginPage setUserName={setUserName} />}
        />
        <Route
          path="/signup"
          element={<SignupPage setUserName={setUserName} />}
        />
        <Route path="/browse" element={<BrowsePage userName={userName} />} />
        <Route path="/kid/:id" element={<KidDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <FeedbackForm open={feedbackOpen} setOpen={setFeedbackOpen} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

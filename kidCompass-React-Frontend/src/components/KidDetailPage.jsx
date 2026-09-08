// Displays full details for a selected kid using (id)

import { useParams, useNavigate } from "react-router-dom";
import kidsData from "../KidsData.json";
import "../App.css";
import Button from "./Button";
import { useState } from "react";
import KidDetail from "./KidDetail";

function KidDetailPage() {
  const { id } = useParams(); // Get the kid ID from the URL
  const navigate = useNavigate();
  const [requested, setRequested] = useState(false);

  const kid = kidsData.find((k) => k.id === Number(id)); // Find the matching kid from JSON data

  if (!kid) {
    return (
      <main className="app">
        <Button
          text="⬅ Back"
          className="back-btn"
          onClick={() => navigate(-1)} // Navigate back to previous page
        />
        <p>Kid not found.</p>
      </main>
    );
  }

  return (
    <main className="app">
      <Button text="⬅ Back" className="back-btn" onClick={() => navigate(-1)} />

      <KidDetail kid={kid} requested={requested} setRequested={setRequested} />
    </main>
  );
}

export default KidDetailPage;

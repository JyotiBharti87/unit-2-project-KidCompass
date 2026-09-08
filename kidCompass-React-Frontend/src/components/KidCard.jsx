// Displays a summary card for each kid profile
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function KidCard({ kid }) {
  const navigate = useNavigate(); // Navigate to detail page when user clicks "View Details"

  return (
    <div className="card">
      <span className="kid-badge">{kid.age} years old</span>

      <img
        src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${kid.name}`}
        alt={kid.name}
      />

      <h3>{kid.name}</h3>
      <p>City: {kid.city}</p>
      <p>Zip Code: {kid.zipCode}</p>

      <Button text="View Details" onClick={() => navigate(`/kid/${kid.id}`)} />
    </div>
  );
}

export default KidCard;

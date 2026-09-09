

// Displays a summary card for each kid profile
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function KidCard({ kid }) {
  const navigate = useNavigate(); // Navigate to detail page when user clicks "View Details"

  return (
    <div className="card">

        {/*This will display kid Age from the backend*/}
      <span className="kid-badge">{kid.kidAge} years old</span>

        {/*External APi to create an Avatar for Kid*/}
      <img
        src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${kid.kidName}`}
        alt={kid.kidName}
      />

        {/*Show Kid Info*/}
      <h3>{kid.kidName}</h3>
      <p>City: {kid.city}</p>
      <p>Zip Code: {kid.zipCode}</p>

      <Button text="View Details" onClick={() => navigate(`/kid/${kid.id}`)} />
    </div>
  );
}

export default KidCard;

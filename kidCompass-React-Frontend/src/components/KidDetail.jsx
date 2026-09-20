import Button from "./Button";

//display kid Detail
function KidDetail({ kid, requested, setRequested }) {
  if (!kid) {
    return null;
  }

  return (
    <div className="detail-box">
      <img
        src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${kid.kidName}`}
        alt={kid.kidName}
        className="detail-image"
      />
      <div className="detail-header">
        <h1>{kid.kidName}</h1>
        <Button
          text={requested ? "Sent" : "Connect"}
          onClick={() => setRequested(true)}
          disabled={requested}
          className="connect-btn"
        />
      </div>

      <p>
        <strong>About:</strong>
        {kid.kidBio}
      </p>

      <table className="kid-table">
        <tbody>
          <tr>
            <th>Age</th>
            <td>{kid.kidAge}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{kid.kidGender || "Not specified"}</td>
          </tr>
          <tr>
            <th>City</th>
            <td>{kid.city}</td>
          </tr>
          <tr>
            <th>Zip Code</th>
            <td>{kid.zipCode || "Not Provided"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default KidDetail;

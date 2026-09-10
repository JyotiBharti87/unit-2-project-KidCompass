import Button from "./Button";
//display kid Detail
function KidDetail({ kid, requested, setRequested }) {
  if (!kid) {
    return null;
  }

  return (
    <div className="detail-box">
      <img
        src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${kid.name}`}
        alt={kid.name}
        className="detail-image"
      />
      <div className="detail-header">
        <h1>{kid.name}</h1>
        <Button
          text={requested ? "Sent" : "Connect"}
          onClick={() => setRequested(true)}
          disabled={requested}
          className="connect-btn"
        />
      </div>

      <p>
        <strong>About:</strong>
        {kid.about}
      </p>

      <table className="kid-table">
        <tbody>
          <tr>
            <th>Age</th>
            <td>{kid.age}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{kid.gender}</td>
          </tr>
          <tr>
            <th>City</th>
            <td>{kid.city}</td>
          </tr>
          <tr>
            <th>Zip Code</th>
            <td>{kid.zipCode}</td>
          </tr>
        </tbody>
      </table>

      <strong>Hobbies:</strong>
      <ul>
        {kid.hobbies &&
          kid.hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}
      </ul>
    </div>
  );
}

export default KidDetail;

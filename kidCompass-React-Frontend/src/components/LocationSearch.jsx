// Input field to search kids by city or zip code
function LocationSearch({ locationTerm, setLocationTerm }) {
  return (
    <div>
      <label htmlFor="locationSearch" className="label">
        Search by city or zip code:{" "}
      </label>
      <input
        id="locationSearch"
        type="text"
        value={locationTerm}
        onChange={(event) => setLocationTerm(event.target.value)}
        placeholder="Enter Ballwin or 63011"
      />
    </div>
  );
}

export default LocationSearch;

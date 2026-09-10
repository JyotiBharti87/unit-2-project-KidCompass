// Dropdown to filter kids by age range
function FilterBar({ selectedAge, setSelectedAge }) {
  return (
    <div>
      <label htmlFor="ageFilter" className="label">
        Filter by age:
      </label>
      <select
        id="ageFilter"
        value={selectedAge}
        onChange={(event) => setSelectedAge(event.target.value)}
      >
        <option value="All">All</option>
        <option value="2-5">2-5</option>
        <option value="6-9">6-9</option>
        <option value="10-14">10-14</option>
      </select>
    </div>
  );
}

export default FilterBar;

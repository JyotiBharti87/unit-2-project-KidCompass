// Main page that handles search, filtering, and displaying kid profiles

import { useState } from "react";
import kidsData from "../KidsData.json";
import LocationSearch from "./LocationSearch";
import FilterBar from "./FilterBar";
import KidList from "./KidList";
import "../App.css";

function BrowsePage({ userName }) {
  //State for search input
  const [locationTerm, setLocationTerm] = useState("");
  //State to store selected age filter
  const [selectedAge, setSelectedAge] = useState("All");

  //filter kids by Location and age
  const filteredKids = kidsData.filter((kid) => {
    const matchesLocation =
      kid.city.toLowerCase().includes(locationTerm.toLowerCase()) ||
      kid.zipCode.includes(locationTerm);

    let matchesAge = true;

    if (selectedAge === "2-5") {
      matchesAge = kid.age >= 2 && kid.age <= 5;
    } else if (selectedAge === "6-9") {
      matchesAge = kid.age >= 6 && kid.age <= 9;
    } else if (selectedAge === "10-14") {
      matchesAge = kid.age >= 10 && kid.age <= 14;
    }

    return matchesLocation && matchesAge;
  });

  return (
    <main className="app">
      {userName && <div className="user-welcome">Welcome, {userName} 👋 </div>}
      <h1 className="label">Browse Kids</h1>

      <p className="label">
        Search kids by city or zip code and filter by age.
      </p>

      <div className="controls">
        <LocationSearch
          locationTerm={locationTerm}
          setLocationTerm={setLocationTerm}
        />

        <FilterBar selectedAge={selectedAge} setSelectedAge={setSelectedAge} />
      </div>

      <KidList kids={filteredKids} />
    </main>
  );
}

export default BrowsePage;

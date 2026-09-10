// Main page that handles search, filtering, and displaying kid profiles

import { useEffect, useState } from "react";
import LocationSearch from "./LocationSearch";
import FilterBar from "./FilterBar";
import KidList from "./KidList";
import "../App.css";

function BrowsePage({ userName }) {

    //state to store the list of kids
    const [kids,setKids] = useState([]);

  //State for search input
  const [locationTerm, setLocationTerm] = useState("");

  //State to store selected age filter
  const [selectedAge, setSelectedAge] = useState("All");

  //Get data from springBootApi
    useEffect(() => {
        fetch("http://localhost:8080/api/parents")
            .then((response) => response.json())
            .then((data) => setKids(data));
    }, []);

  //filter kids by Location and age
  const filteredKids = kids.filter((kid) => {
    const matchesLocation =
      kid.city.toLowerCase().includes(locationTerm.toLowerCase()) ||
      kid.zipCode.toString().includes(locationTerm);

    let matchesAge = true;

    if (selectedAge === "2-5") {
      matchesAge = kid.kidAge >= 2 && kid.kidAge <= 5;
    } else if (selectedAge === "6-9") {
      matchesAge = kid.kidAge >= 6 && kid.kidAge <= 9;
    } else if (selectedAge === "10-14") {
      matchesAge = kid.kidAge >= 10 && kid.kidAge <= 14;
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

        <FilterBar
            selectedAge={selectedAge}
                   setSelectedAge={setSelectedAge} />
      </div>

      <KidList kids={filteredKids} />
    </main>
  );
}

export default BrowsePage;

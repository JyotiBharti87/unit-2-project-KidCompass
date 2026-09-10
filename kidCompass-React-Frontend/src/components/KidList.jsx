// Renders a list of kid cards
import KidCard from "./KidCard";

// Show message if no kids match filters
function KidList({ kids }) {
  if (kids.length === 0) {
    return <p>No kids match your filters.😕 Try another filter.</p>;
  }

  return (
    <div className="card-grid">
      {kids.map((kid) => (
        <KidCard key={kid.id} kid={kid} />
      ))}
    </div>
  );
}

export default KidList;

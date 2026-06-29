import { useState } from "react";
import { rooms } from "../data/rooms";
import "../styles/Rooms.css";
import RoomCard from "../components/RoomCard";

function Rooms() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("Sve");

  const filteredRooms = rooms.filter((room) => {
    const matchesSearch =
      room.name.toLowerCase().includes(search.toLowerCase());

    const matchesType =
      type === "Sve" || room.type === type;

    return matchesSearch && matchesType;
  });

  return (
    <div>
  
      <h2 className="rooms-title">
        Naše sobe
      </h2>
  
      <div className="filters">
  
        <input
          type="text"
          placeholder="Pretraži sobu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
  
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Sve">Sve</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
        </select>
  
      </div>
  
      <div className="rooms-container">
  
        {filteredRooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
          />
        ))}
  
      </div>
  
    </div>
  );
}

export default Rooms;
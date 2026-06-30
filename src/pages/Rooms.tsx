import { useState } from "react";
import RoomCard from "../components/RoomCard";
import "../styles/Rooms.css";
import { RoomService } from "../services/RoomService";

const roomService = new RoomService();

const rooms = roomService.getAllRooms();

function Rooms() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("Sve");
  const [sort, setSort] = useState("default");

  const [currentPage, setCurrentPage] = useState(1);

  const roomsPerPage = 3;

  const filteredRooms = rooms
    .filter((room) => {
      const matchesSearch = room.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesType =
        type === "Sve" || room.type === type;

      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      if (sort === "priceAsc") {
        return a.price - b.price;
      }

      if (sort === "priceDesc") {
        return b.price - a.price;
      }

      return 0;
    });

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;

  const currentRooms = filteredRooms.slice(
    indexOfFirstRoom,
    indexOfLastRoom
  );

  const totalPages = Math.ceil(
    filteredRooms.length / roomsPerPage
  );

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
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />

        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="Sve">Sve</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">
            Sortiranje
          </option>

          <option value="priceAsc">
            Cena rastuće
          </option>

          <option value="priceDesc">
            Cena opadajuće
          </option>
        </select>

      </div>

      <div className="rooms-container">

        {currentRooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
          />
        ))}

      </div>

      <div className="pagination">

        {Array.from(
          { length: totalPages },
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}

      </div>

    </div>
  );
}

export default Rooms;
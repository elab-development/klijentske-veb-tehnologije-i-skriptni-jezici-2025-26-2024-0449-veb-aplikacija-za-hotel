import { rooms } from "../data/rooms";
import RoomCard from "../components/RoomCard";

function Rooms() {
  return (
    <div>
      <h2>Sobe</h2>

      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          room={room}
        />
      ))}
    </div>
  );
}

export default Rooms;
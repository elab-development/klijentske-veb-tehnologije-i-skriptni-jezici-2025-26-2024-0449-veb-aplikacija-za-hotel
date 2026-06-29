import type { Room } from "../models/Room";
import { Link } from "react-router-dom";
import "../styles/RoomCard.css";

interface Props {
  room: Room;
}

function RoomCard({ room }: Props) {
  return (
    <div className="room-card">

  <img
    src={room.image}
    alt={room.name}
  />

  <div className="room-info">

    <h3>{room.name}</h3>

    <p className="room-type">
      {room.type}
    </p>

    <p className="room-price">
      {room.price} € / noć
    </p>

    <p
      className={
        room.available
          ? "available"
          : "not-available"
      }
    >
      {room.available
        ? "Dostupna"
        : "Nije dostupna"}
    </p>

    <Link
      className="details-btn"
      to={`/rooms/${room.id}`}
    >
      Pogledaj detalje
    </Link>

  </div>

</div>
  );
}

export default RoomCard;
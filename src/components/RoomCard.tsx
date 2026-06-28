import type { Room } from "../models/Room";
import { Link } from "react-router-dom";

interface Props {
  room: Room;
}

function RoomCard({ room }: Props) {
  return (
    <div>
      <h3>{room.name}</h3>
      <p>Tip: {room.type}</p>
      <p>Cena: {room.price} €</p>
      <p>
        {room.available
          ? "Dostupna"
          : "Nije dostupna"}
      </p>
      <Link to={`/rooms/${room.id}`}>
        Pogledaj detalje
      </Link>
    </div>
  );
}

export default RoomCard;
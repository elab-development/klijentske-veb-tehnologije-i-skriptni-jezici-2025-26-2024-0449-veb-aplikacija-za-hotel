import type { Room } from "../models/Room";

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
    </div>
  );
}

export default RoomCard;
import { useParams } from "react-router-dom";
import { rooms } from "../data/rooms";

function RoomDetails() {
  const { id } = useParams();

  const room = rooms.find(
    (r) => r.id === Number(id)
  );

  if (!room) {
    return <h2>Soba nije pronađena.</h2>;
  }

  return (
    <div>
      <h2>{room.name}</h2>
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

export default RoomDetails;
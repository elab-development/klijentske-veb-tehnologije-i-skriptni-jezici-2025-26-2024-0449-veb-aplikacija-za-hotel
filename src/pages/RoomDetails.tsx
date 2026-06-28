import { useContext } from "react";
import { ReservationContext } from "../context/ReservationContext";
import { useParams } from "react-router-dom";
import { rooms } from "../data/rooms";

function RoomDetails() {
  const { id } = useParams();
  const reservationContext =
  useContext(ReservationContext);

    if (!reservationContext) {
        return <h2>Greška.</h2>;
    }

    const { addReservation } = reservationContext;   

  const room = rooms.find(
    (r) => r.id === Number(id)
  );

  if (!room) {
    return <h2>Soba nije pronađena.</h2>;
  }
  const reserveRoom = () => {
    addReservation({
      id: Date.now(),
      guestName: "Gost",
      roomId: room.id,
      checkIn: "2026-07-01",
      checkOut: "2026-07-05",
    });
  
    alert("Rezervacija uspešno dodata!");
  };

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
      <button onClick={reserveRoom}>
         Rezerviši sobu
      </button>
    </div>
  );
}

export default RoomDetails;
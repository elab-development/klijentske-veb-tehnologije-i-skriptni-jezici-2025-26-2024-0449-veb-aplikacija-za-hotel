import { useContext } from "react";
import { ReservationContext } from "../context/ReservationContext";

function Reservations() {
  const reservationContext =
    useContext(ReservationContext);

  if (!reservationContext) {
    return <h2>Greška.</h2>;
  }
  const {
    reservations,
    removeReservation,
  } = reservationContext;

  return (
    <div>
      <h2>Rezervacije</h2>

      {reservations.length === 0 && (
        <p>Nema rezervacija.</p>
      )}

      {reservations.map((reservation) => (
        <div key={reservation.id}>
          <p>
            Gost:
            {reservation.guestName}
          </p>

          <p>
            Soba:
            {reservation.roomId}
          </p>

          <p>
            Od:
            {reservation.checkIn}
          </p>

          <p>
            Do:
            {reservation.checkOut}
          </p>

          <hr />
          <button onClick={() => removeReservation(reservation.id)}>Otkaži rezervaciju</button>
        </div>
      ))}
    </div>
  );
}

export default Reservations;
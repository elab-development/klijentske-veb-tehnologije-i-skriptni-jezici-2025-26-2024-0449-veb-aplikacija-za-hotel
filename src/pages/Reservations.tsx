import { useContext } from "react";
import "../styles/Reservations.css";
import { rooms } from "../data/rooms";
import { ReservationContext } from "../context/ReservationContext";

function Reservations() {
  const reservationContext = useContext(ReservationContext);

  if (!reservationContext) {
    return <h2>Greška.</h2>;
  }

  const { reservations, removeReservation } = reservationContext;

  return (
    <div className="reservations-page">

      <h2 className="reservations-title">
        Moje rezervacije
      </h2>

      {reservations.length === 0 && (
        <p className="empty">
          Trenutno nemate nijednu rezervaciju.
        </p>
      )}

      {reservations.map((reservation) => {

        const room = rooms.find(
          (r) => r.id === reservation.roomId
        );

        return (
          <div
            className="reservation-card"
            key={reservation.id}
          >

            <p>
              <strong>Gost:</strong> {reservation.guestName}
            </p>

            <p>
              <strong>Soba:</strong>{" "}
              {room ? room.name : "Nepoznata soba"}
            </p>

            <p>
              <strong>Dolazak:</strong> {reservation.checkIn}
            </p>

            <p>
              <strong>Odlazak:</strong> {reservation.checkOut}
            </p>

            <button
              className="cancel-btn"
              onClick={() =>
                removeReservation(reservation.id)
              }
            >
              Otkaži rezervaciju
            </button>

          </div>
        );
      })}

    </div>
  );
}

export default Reservations;
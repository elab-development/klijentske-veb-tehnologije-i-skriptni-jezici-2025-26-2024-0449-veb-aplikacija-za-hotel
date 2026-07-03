import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReservationContext } from "../context/ReservationContext";
import { rooms } from "../data/rooms";
import "../styles/RoomDetails.css";

function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

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
    <div className="details-container">

      <div className="details-image">
        <img
          src={room.image}
          alt={room.name}
        />
      </div>

      <div className="details-content">

        <h2>{room.name}</h2>

        <p className="details-price">
          {room.price} € / noć
        </p>

        <p className="details-info">
          <strong>Tip sobe:</strong> {room.type}
        </p>

        <p className="details-info">
          <strong>Status:</strong>{" "}
          {room.available
            ? "Dostupna"
            : "Nije dostupna"}
        </p>

        <p className="details-description">
          Ova moderno uređena hotelska soba pruža
          udoban smeštaj sa besplatnim Wi-Fi internetom,
          klima uređajem, televizorom, mini barom,
          sefom i sopstvenim kupatilom. Idealna je za
          poslovna putovanja i odmor.
        </p>

        <button
          className="reserve-button"
          onClick={reserveRoom}
        >
          Rezerviši odmah
        </button>

        <button
          className="reserve-button"
          onClick={() => navigate("/rooms")}
          style={{ marginLeft: "15px" }}
        >
          Nazad na sobe
        </button>

      </div>

    </div>
  );
}

export default RoomDetails;
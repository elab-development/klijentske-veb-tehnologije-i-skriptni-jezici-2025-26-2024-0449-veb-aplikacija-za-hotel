import type { Reservation } from "../models/Reservation";

export class ReservationService {

  getReservations(): Reservation[] {

    const data = localStorage.getItem("reservations");

    return data ? JSON.parse(data) : [];

  }

  addReservation(reservation: Reservation) {

    const reservations = this.getReservations();

    reservations.push(reservation);

    localStorage.setItem(
      "reservations",
      JSON.stringify(reservations)
    );

  }

  removeReservation(id: number) {

    const reservations = this.getReservations().filter(
      (r) => r.id !== id
    );

    localStorage.setItem(
      "reservations",
      JSON.stringify(reservations)
    );

  }

  clearReservations() {

    localStorage.removeItem("reservations");

  }

}
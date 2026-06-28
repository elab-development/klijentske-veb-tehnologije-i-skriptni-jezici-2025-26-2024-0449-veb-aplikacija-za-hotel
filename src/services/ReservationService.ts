import type { Reservation } from "../models/Reservation";

export class ReservationService {
  private reservations: Reservation[] = [];

  getReservations() {
    return this.reservations;
  }

  addReservation(reservation: Reservation) {
    this.reservations.push(reservation);
  }

  removeReservation(id: number) {
    this.reservations =
      this.reservations.filter(
        (r) => r.id !== id
      );
  }
}
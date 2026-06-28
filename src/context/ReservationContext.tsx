import {
    createContext,
    useState,
  } from "react";
  import type { Reservation } from "../models/Reservation";
  import type { ReactNode } from "react";
  
  interface ReservationContextType {
    reservations: Reservation[];
    addReservation: (
      reservation: Reservation
    ) => void;
    removeReservation: (
      id: number
    ) => void;
  }
  
  export const ReservationContext =
    createContext<
      ReservationContextType | undefined
    >(undefined);
  
  interface Props {
    children: ReactNode;
  }
  
  export function ReservationProvider({
    children,
  }: Props) {
    const [reservations, setReservations] =
      useState<Reservation[]>([]);
  
    const addReservation = (
      reservation: Reservation
    ) => {
      setReservations((prev) => [
        ...prev,
        reservation,
      ]);
    };
  
    const removeReservation = (
      id: number
    ) => {
      setReservations((prev) =>
        prev.filter((r) => r.id !== id)
      );
    };
  
    return (
      <ReservationContext.Provider
        value={{
          reservations,
          addReservation,
          removeReservation,
        }}
      >
        {children}
      </ReservationContext.Provider>
    );
  }
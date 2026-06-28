import type { Room } from "../models/Room";
export const rooms: Room[] = [
  {
    id: 1,
    name: "Luxury Suite",
    type: "Suite",
    price: 120,
    image: "",
    available: true,
  },
  {
    id: 2,
    name: "Double Room",
    type: "Double",
    price: 80,
    image: "",
    available: true,
  },
  {
    id: 3,
    name: "Single Room",
    type: "Single",
    price: 50,
    image: "",
    available: false,
  },
];
import soba1 from "../assets/rooms/soba1.jpeg";
import soba2 from "../assets/rooms/soba2.jpeg";
import soba3 from "../assets/rooms/soba3.jpeg";
import type { Room } from "../models/Room";
export const rooms: Room[] = [
  {
    id: 1,
    name: "Luxury Suite",
    type: "Suite",
    price: 120,
    image: soba1,
    available: true,
  },
  {
    id: 2,
    name: "Double Room",
    type: "Double",
    price: 80,
    image: soba2,
    available: true,
  },
  {
    id: 3,
    name: "Single Room",
    type: "Single",
    price: 50,
    image: soba3,
    available: false,
  },
];
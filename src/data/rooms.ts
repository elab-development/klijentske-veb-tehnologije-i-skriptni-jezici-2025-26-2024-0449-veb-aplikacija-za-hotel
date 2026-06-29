import soba1 from "../assets/rooms/soba1.jpeg";
import soba2 from "../assets/rooms/soba2.jpeg";
import soba3 from "../assets/rooms/soba3.jpeg";
import soba4 from "../assets/rooms/soba4.jpeg";
import soba5 from "../assets/rooms/soba5.jpeg";
import soba6 from "../assets/rooms/soba6.jpeg";
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
  {
    id: 4,
    name: "Executive Room",
    type: "Double",
    price: 95,
    available: true,
    image: soba4
},
{
    id: 5,
    name: "Family Suite",
    type: "Suite",
    price: 180,
    available: true,
    image: soba5
},
{
    id: 6,
    name: "Deluxe Room",
    type: "Double",
    price: 140,
    available: false,
    image: soba6
},
];
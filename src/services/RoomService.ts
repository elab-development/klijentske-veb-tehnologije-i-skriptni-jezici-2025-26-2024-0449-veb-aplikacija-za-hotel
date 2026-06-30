import { rooms } from "../data/rooms";

export class RoomService {

  getAllRooms() {
    return rooms;
  }

  getRoomById(id: number) {
    return rooms.find(room => room.id === id);
  }

  getAvailableRooms() {
    return rooms.filter(room => room.available);
  }

}
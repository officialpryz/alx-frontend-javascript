import Classroom from './0-classroom';

export default function initializeRooms() {
    return[
        new ClassRoom(19),
        new Classroom(20),
        new Classroom(34),
    ];
}
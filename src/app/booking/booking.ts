export interface Booking {
    id: number;
    confirmationNumber: number;
    flightId: string;
    passengerId: string;
    passengerCount: number;
    purchasers: [];
    flights: [];
}

export interface BookingDTO {
    confirmationNumber: number;
    flightId: string;
    passengerId: string;
}

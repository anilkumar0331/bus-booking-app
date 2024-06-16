export interface Bus {
    _id: string;
    from: string;
    to: string;
    busType: string;
    departure: string;
    arrival: string;
    fare: number;
    totalSeats: number;
    available: number;
    reservedSeats: [];
  }
  
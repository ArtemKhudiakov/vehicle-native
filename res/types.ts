export interface Car {
    id: number;
    name: string;
    category: string;
    coordinates: Coordinates;
    contactNumber: string;
}

export interface Coordinates {
    latitude: number;
    longitude: number;
}
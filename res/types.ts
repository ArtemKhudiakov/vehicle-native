export interface Car {
    id: number;
    name: string;
    category: CategoryType;
    coordinates: Coordinates;
    contactNumber: string;
}

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export type CategoryType = 'Грузовой' | 'Пассажирский' | 'Спецтранспорт';
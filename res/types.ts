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

export type Language = 'en' | 'ru';

export type LanguageText = {
    [key in Language]: {
        category: string;
        driverName: string;
        contactNumber: string;
        call: string;
        write: string;
        chooseCategory: string;
        list: string;
        map: string;
        apply: string;
        reset: string;
        pinTitle: string;
        pinDescription: string;
        language: string;
        toggleLanguage: string;
        vehicleList: string;
        settings: string;
        title: string;
        Cargo: string;
        Passenger: string;
        Special: string;

    };
};
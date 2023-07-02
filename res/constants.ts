import {CategoryType, LanguageText} from "./types";

export const message: string = "Добрый день, подскажите пожалуйста, " +
    "какой номер заказа у вас сейчас в работе?"

export const categoryColor: Record<CategoryType, string> = {
    'Грузовой': 'red',
    'Пассажирский': 'blue',
    'Спецтранспорт': 'green',
};

export const translationMap: Record<CategoryType, string> = {
    'Грузовой': 'Cargo',
    'Пассажирский': 'Passenger',
    'Спецтранспорт': 'Special',
};

export const languageText: LanguageText = {
    en: {
        category: 'Category:',
        driverName: 'Driver name:',
        contactNumber: 'Driver contact number:',
        call: 'Call',
        write: 'Write',
        chooseCategory: 'Choose category:',
        list: 'List',
        map: 'Map',
        apply: 'Apply',
        reset: 'Reset',
        pinTitle: 'Vehicle',
        pinDescription: 'Driver name: ',
        language: 'Language:',
        toggleLanguage: 'Toggle language',
        vehicleList: 'Vehicle List',
        settings: 'Settings',
        title: 'Vehicle',
        Cargo: 'Cargo',
        Passenger: 'Passenger',
        Special: 'Special'
    },
    ru: {
        category: 'Категория ТС:',
        driverName: 'Имя водителя:',
        contactNumber: 'Контактный номер водителя:',
        call: 'Позвонить',
        write: 'Написать',
        chooseCategory: 'Выбор категории:',
        list: 'Список',
        map: 'Карта',
        apply: 'Применить',
        reset: 'Сбросить',
        pinTitle: 'ТС',
        pinDescription: 'Имя водителя: ',
        language: 'Язык:',
        toggleLanguage: 'Переключить язык',
        vehicleList: 'Список ТС',
        settings: 'Настройки',
        title: 'ТС',
        Cargo: 'Грузовой',
        Passenger: 'Пассажирский',
        Special: 'Спецтранспорт'

    },
};
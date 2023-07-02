import {Car, Language, LanguageText} from "./types";
import {categoryColor, languageText} from "./constants";

const getLanguageText = (key: keyof LanguageText[Language], language: Language): string => {
    return languageText[language][key];
};

export default getLanguageText;

const getMarkerColor = (vehicle: Car): string => {
    return categoryColor[vehicle.category] ?? 'black';
}

export {getMarkerColor};
import React, {createContext, useState} from 'react';

type Language = 'en' | 'ru';

interface LanguageProviderContextProps {
    language: Language;
    setLanguage: (lang: Language) => void;
}

type ChildrenProps = {
    children: string | JSX.Element | JSX.Element[]
}

export const LanguageProviderContext = createContext<LanguageProviderContextProps>({
    language: 'en',
    setLanguage: () => {
    },
});

export const LanguageProvider: React.FC<ChildrenProps> = ({children}) => {
    const [language, setLanguage] = useState<Language>('en');

    const contextValue: LanguageProviderContextProps = {
        language,
        setLanguage,
    };

    return (
        <LanguageProviderContext.Provider value={contextValue}>
            {children}
        </LanguageProviderContext.Provider>
    );
};
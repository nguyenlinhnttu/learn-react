import { createContext, useState } from 'react';

const AppContext = createContext({ theme: 'dark', toggleTheme: () => { } });

function AppProvider({ children }) {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        console.log('Toggling theme... ' + theme);
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    // Truyên nhiều tham số vao đây đe share cho các component con
    const sharedData = { theme: theme, toggleTheme: toggleTheme };

    return (
        <AppContext.Provider value={sharedData}>
            {children}
        </AppContext.Provider>
    );
}
export { AppContext, AppProvider };
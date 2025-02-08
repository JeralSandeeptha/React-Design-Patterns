import { createContext, ReactNode } from "react";

type ThemeProviderProps = {
    children: ReactNode,
}

interface ThemeContextTypes {
    theme: string
}

export const ThemeContext = createContext<ThemeContextTypes | undefined>(undefined);

const ThemeProvider = (props: ThemeProviderProps) => {

    const theme = 'light';

    return (
        <ThemeContext.Provider value={{ theme }}> 
            { props.children }
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
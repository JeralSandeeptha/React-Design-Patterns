import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

type Props = {
    children?: React.ReactNode
};

const ButtonFactoryTwo = (type: string) => {

    return (props: Props) => {
        const themeContext = useContext(ThemeContext); 

        if(!themeContext) {
            throw new Error("ThemeContext must be used within a ThemeProvider");
        }

        const { theme } = themeContext;

        const styles = {
            primary: {
                backgroundColor: theme === 'light' ? 'blue' : 'white',
                color: theme === 'light' ? 'white' : 'blue',
            },
            success: {
                backgroundColor: theme === 'light' ? 'green' : 'green',
                color: theme === 'light' ? 'white' : 'black',
            },
            danger: {
                backgroundColor: theme === 'light' ? 'red' : 'red',
                color: theme === 'light' ? 'white' : 'black',
            },
        };

        return <button style={{ ...styles[type], padding: '10px 20px', borderRadius: '0.25rem', cursor: 'pointer', outline: 'none', border: 'none' }}>{props.children}</button>;
    }
}

export const PrimaryButtonWithTheme = ButtonFactoryTwo('primary');
export const SuccessButtonWithTheme = ButtonFactoryTwo('success');
export const DangerButtonWithTheme = ButtonFactoryTwo('danger');

export default ButtonFactoryTwo;
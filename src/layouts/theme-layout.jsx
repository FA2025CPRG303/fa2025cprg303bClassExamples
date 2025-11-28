
import { ThemeContextProvider } from "../context/theme-context";

export default function ThemeLayout({children}){

    return(
        <ThemeContextProvider>
            {children}
        </ThemeContextProvider>
    );
}
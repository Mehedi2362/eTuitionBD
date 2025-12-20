import { useTheme } from "@/hooks/useTheme";
import { MoonIcon, SunIcon } from "lucide-react";

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div>
            <h1>Header</h1>
            <button onClick={toggleTheme}>
                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
        </div>
    )
}

export default Header
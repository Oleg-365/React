import { useContext } from "react";
import UserContext from "../Contexts/UserContext";

function Header() {
    const { userName } = useContext(UserContext);
    return (
        <div>имя {userName}</div>
    );
}

export default Header;
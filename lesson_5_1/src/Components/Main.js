import { useContext } from "react";
import UserContext from "../Contexts/UserContext";
import withLoadingIndicator from "./withLoadingIndicator";

function Main({data}) {
    const { setUserName } = useContext(UserContext);
    return (
        <main className="">
            <p>{data}</p>
            <button onClick={() => setUserName(prompt('Введите имя'))}>Сменить имя</button>
        </main>
    );
}

const MainWithLoading = withLoadingIndicator(Main)

export default MainWithLoading;
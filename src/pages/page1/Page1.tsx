import {Link as LinkMUI } from "@mui/material";
import { Link } from "react-router-dom";
import MeuHeader from "../../components/MeuHeader";

const Page1: React.FC = () => {
    return (
        <>
            <MeuHeader titulo="Página 2" />
            <Link to="/app">
                <LinkMUI>Ir para App</LinkMUI>
            </Link>
        </>
    )
}

export default Page1;
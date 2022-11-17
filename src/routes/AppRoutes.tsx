import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import MeuHeader from "../components/MeuHeader";
import Page1 from "../pages/page1/Page1";
import Page2 from "../pages/page2/Page2";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/app" element={<App />} />
                <Route path="/app/page1" element={<Page1 />} />
                <Route path="/app/page2" element={<Page2 />} />
                
                <Route path="/app/header" element={<MeuHeader titulo="Rotas" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
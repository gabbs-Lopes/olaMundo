import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SobreMim from "./pages/SobreMim";
import Menu from './componentes/Menu'
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="sobremim" element={<SobreMim />}/>
        </Route>

        {/* 
        
        Na rota "/", a estrutura a ser renderizada é:

        <PaginaPadrao>
          <Home />
        </PaginaPadrao>

        Na rota "/sobremim", a estrutura a ser renderizada é:

        <PaginaPadrao>
          <SobreMim />
        </PaginaPadrao>

        */}
        
        <Route path="*" element={<div>ERRO: 404, Página não encontrada</div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;

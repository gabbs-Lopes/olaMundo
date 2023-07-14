import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SobreMim from "./pages/SobreMim";
import Menu from './componentes/Menu'
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "pages/Post";
import NotFound from "pages/NotFound";
import ScrollToTop from "componentes/ScroolToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="sobremim" element={<SobreMim />}/>
        </Route>

        <Route path="posts/:id/*" element={<Post />}/>

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
        
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;

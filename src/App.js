import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/index";
import CadastroProduto from "./pages/cadastroProduto/index";
import ListarProdutos from "./pages/listarProdutos/index";
import EditProduto from "./pages/editarProduto/index";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/CadastroProduto" element={<CadastroProduto/>}/>
          <Route path="/ListarProdutos" element={<ListarProdutos/>}/>
          <Route path="/EditProduto/:id" element={<EditProduto/>}/>
          <Route path="/Home" element={<Home/>}/>
        </Routes>
    </Router>
  );
}

export default App;

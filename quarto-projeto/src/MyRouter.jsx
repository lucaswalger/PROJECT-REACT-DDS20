import { createBrowserRouter } from "react-router-dom";

// Paginas importadas
import App from "./App";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Cadastro from "./Pages/Cadastro";
import Sobre from "./Pages/Sobre";
import PaginaErro from "./Pages/PaginaErro";
import RotasProtegidas from "./Pages/RotasProtegidas";
import ResetarSenha from "./Pages/ResetarSenha";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RotasProtegidas />,
    errorElement: <PaginaErro />,
    children: [
     { path: "/", element: <Login /> },
     { path: "login", element: <Login /> },
     {
    path: "resetar",
    element: <ResetarSenha />
    }
    ],
  },  
  
    {
    path: "/",
    element: <RotasProtegidas />,
    errorElement: <PaginaErro />,
    children: [
    
    ],
  },  
  
  {
    path: "/",
    element: <RotasProtegidas />,
    errorElement: <PaginaErro />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/cadastro", element: <Cadastro /> },
      { path: "/sobre", element: <Sobre /> },
    ],
  },
]);

export default router;

// src/App.tsx

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


// Componentes

import Bienvenida from "./components/pages/Bienvenida";
import Puestos from "./components/pages/Puestos";
import Oferentes from "./components/pages/Oferentes";

// Componente protector de rutas
// descomentar cuando la feature de login este implementada y
// envolver cada ruta con el protector
/*
<Route path="/oferentesListos/:idPuesto" element={
        
            <Oferentes />
          
        } />*/

/*        
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
*/

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Bienvenida />} />

        <Route path="/puestos" element={<Puestos />} />

        <Route path="/oferentesListos/:idPuesto" element={<Oferentes />} />

        

        {/* Ruta por defecto redirige al dashboard si está autenticado o al login si no */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
};

export default App;

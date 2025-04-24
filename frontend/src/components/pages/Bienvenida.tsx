import React from "react";

import Layout from "../layout/Layout";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";


const Bienvenida: React.FC = () => {
   const { Usuario } = useSelector((state: RootState) => state.login);

  return (
    <Layout>
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Bienvenido, {Usuario?.Nombre || "User Default"}
        </h1>
        <p className="text-gray-600">
          Sistema de Administración de Personal 
        </p>
        <div className="mt-6 p-6 bg-blue-100 rounded-lg border border-blue-100">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">
            Acerca de Servicios Médicos SA
          </h2>
          <p className="text-gray-700">
            Somos una empresa líder en el campo de los servicios médicos, comprometida
            con la atención de calidad y el bienestar de nuestros pacientes. Con
            una pasión por la excelencia y un equipo de profesionales altamente
            capacitados, nos enorgullece brindar servicios médicos integrales y
            personalizados para satisfacer las necesidades de nuestra comunidad.
          </p>
          <p className="text-gray-700">
            En Servicios Médicos SA, creemos que todos merecen tener acceso a la atención médica
            de calidad. Nuestra misión es proporcionar servicios médicos
            excepcionales, promover la salud y el bienestar, y marcar una
            diferencia positiva en la vida de nuestros pacientes.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Bienvenida;

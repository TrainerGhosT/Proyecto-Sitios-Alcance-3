import React from "react";
import Layout from "../layout/Layout";

const Bienvenida: React.FC = () => {
 // const { user } = useSelector((state: RootState) => state.auth);

  return (
    <Layout>
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Bienvenido.
        </h1>
      
      </div>
    </Layout>
  );
};

export default Bienvenida;

import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-center p-10">
      <h1 className="text-4xl font-bold text-blue-500 dark:text-blue-300">
        🚀 Catálogo de Componentes Lit + React
      </h1>
      <ul className="mt-10 space-y-4">
        <li>
          <Link
            to="/lit-button"
            className="text-lg text-blue-600 hover:underline"
          >
            ➡️ Botón Lit
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

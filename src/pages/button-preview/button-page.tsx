import { useEffect, useRef } from "react";
import "../../components/button/button";
import { Link } from "react-router-dom";
import { ButtonVM } from "./../../components/button/button-model";

const ButtonPreview = () => {
  const litRef = useRef(null);

  useEffect(() => {
    if (litRef.current) {
      const button: ButtonVM = litRef.current;
      button.handleClick = () => {
        alert("¡click!");
      };
    }
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-center p-10">
      <h2 className="text-2xl font-bold text-blue-500 dark:text-blue-300">
        🚀 Página del Botón Lit
      </h2>
      <lit-button ref={litRef}>¡Haz clic en mí!</lit-button>

      <div className="mt-6">
        <Link to="/" className="text-blue-600 hover:underline">
          ⬅️ Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default ButtonPreview;

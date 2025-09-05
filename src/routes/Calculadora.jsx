import { useState } from "react";

function Calculadora() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setDisplay(eval(display).toString()); // Calcula a expressão
      } catch {
        setDisplay("Erro");
      }
    } else if (value === "C") {
      setDisplay(""); // Limpa a tela
    } else {
      setDisplay(display + value); //Adiciona o valor no display
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-900">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-80">
        {/* Display */}
        <div className="w-full h-16 bg-blue-200 rounded-lg mb-4 flex items-center justify-end px-6 text-3xl font-bold text-blue-800">
          {display || "0"}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-4">
          {/* Linha 1 */}
          {[7, 8, 9, "/"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="bg-blue-300 p-5 rounded-xl text-2xl font-semibold text-blue-800 hover:bg-blue-400 transition duration-300 transform hover:scale-105"
            >
              {btn}
            </button>
          ))}

          {/* Linha 2 */}
          {[4, 5, 6, "*"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="bg-blue-300 p-5 rounded-xl text-2xl font-semibold text-blue-800 hover:bg-blue-400 transition duration-300 transform hover:scale-105"
            >
              {btn}
            </button>
          ))}

          {/* Linha 3 */}
          {[1, 2, 3, "-"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="bg-blue-300 p-5 rounded-xl text-2xl font-semibold text-blue-800 hover:bg-blue-400 transition duration-300 transform hover:scale-105"
            >
              {btn}
            </button>
          ))}

          {/* Linha 4 */}
          {[0, ".", "=", "+"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="bg-blue-300 p-5 rounded-xl text-2xl font-semibold text-blue-800 hover:bg-blue-400 transition duration-300 transform hover:scale-105"
            >
              {btn}
            </button>
          ))}

          {/* Clear Button */}
          <button
            onClick={() => handleClick("C")}
            className="col-span-2 bg-blue-600 p-5 rounded-xl text-2xl font-semibold text-white hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;

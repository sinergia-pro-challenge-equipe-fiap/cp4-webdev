import { useState } from "react";

function Calculadora() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operacao, setOperacao] = useState("");
  const [resultado, setResultado] = useState(null);

  function calcular() {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (operacao === "soma") {
      setResultado(n1 + n2);
    } else if (operacao === "subtracao") {
      setResultado(n1 - n2);
    } else if (operacao === "multiplicacao") {
      setResultado(n1 * n2);
    } else if (operacao === "divisao") {
      if (n2 === 0) {
        setResultado("Erro: divisão por zero!");
      } else {
        setResultado(n1 / n2);
      }
    } else {
      setResultado("Escolha uma operação válida!");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 to-gray-900">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-96 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Calculadora</h2>

        <input
          type="number"
          placeholder="Número 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <input
          type="number"
          placeholder="Número 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <select
          onChange={(e) => setOperacao(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-purple-400 outline-none"
        >
          <option value="">Selecione a operação</option>
          <option value="soma">Soma</option>
          <option value="subtracao">Subtração</option>
          <option value="multiplicacao">Multiplicação</option>
          <option value="divisao">Divisão</option>
        </select>

        <button
          onClick={calcular}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Calcular
        </button>

        {resultado !== null && (
          <h3 className="mt-6 text-xl font-semibold text-gray-700">
            Resultado:{" "}
            <span className="text-purple-600 font-bold">{resultado}</span>
          </h3>
        )}
      </div>
    </div>
  );
}

export default Calculadora;

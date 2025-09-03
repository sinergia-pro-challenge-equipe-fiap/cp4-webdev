import { useNavigate } from "react-router-dom"
import Imagem from '../assets/imagem-calculadora.png'

const Home = () => {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate("/calculadora")
  }

  return (
   <section className="bg-gray-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-8">
    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mb-8 mr-16">
      <p className="text-lg text-gray-400">Qualquer operação</p>
      <h4 className="text-4xl md:text-6xl font-bold sm:text-5xl">Calculadora<br/> Aritmética</h4>
      <p className="text-lg text-gray-400 mt-4">Simples, rápida e eficiente</p>
      <button 
        onClick={handleStart}
        className="mt-8 px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-800 transition-colors duration-300"
      >
        Começar
      </button>
    </div>
    <div className="flex-1 flex items-center justify-center relative">
      <img src={Imagem} className="w-full max-w-sm relative z-10"/>
      <div className="absolute inset-0 bg-blue-300 opacity-30 blur-3xl rounded-full z-0"></div>
    </div>
   </section>
  )
}

export default Home

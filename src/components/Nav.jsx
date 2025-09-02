import {Link} from 'react-router-dom'
import Logo from "../assets/imagem-calculadora.png"

const Nav = () => {
  return (
    <header className="bg-gray-600 text-white p-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
             <img src={Logo} alt="logo" className="h-10 w-auto6" /> 
            <ul className="flex space-x-4">
                <li className="list-none">
                    <Link to="/" className="hover:text-blue-200 transition-colors duration 300">Home</Link>
                </li>

                <li>
                    <Link to="/calculadora" className="hover:text-blue-200 transition-colors duration 300">Calculadora</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav

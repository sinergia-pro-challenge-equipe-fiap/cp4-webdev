import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Calculadora from './routes/Calculadora'
import Error from './routes/Error'
import Home from './routes/Home'
import Footer from './components/Footer'
import Nav from './components/Nav'

function App() {
  

  return (
    <BrowserRouter>
    <Nav/>
    <main>
      <Routes>
        {/* Rota para lidar com as urls não encontradas */}
        <Route path="*" element={<Error/>}/>

        {/* Rota para chamar a página home */}
        <Route path="/" element={<Home/>}/>

         {/* Rota para chamar a página Calculadora */}
        <Route path="/calculadora" element={<Calculadora/>}/>
      </Routes>
    </main>
    <Footer/>
     
    </BrowserRouter>
  )
}

export default App

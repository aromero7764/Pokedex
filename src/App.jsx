import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Loader from './components/Loader/Loader'
import MainInput from './components/MainInput'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Pokedex from './components/Pokedex'
import CharacterDetail from './components/PokemonDetail/CharacterDetail'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
  

      <HashRouter>
        <Routes> 
          <Route path='/' element={<MainInput />} />
          <Route element={<ProtectedRoutes />}>

              <Route path='/pokedex' element={<Pokedex />} />
              <Route path='/pokedex/:id' element={<CharacterDetail />} />
              
          </Route>

        </Routes>
      </HashRouter>

    </div>
  )
}

export default App

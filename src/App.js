import Header from './components/Header'
import LogoConpec from './components/LogoConpec'
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Etapa4 from './components/Etapa4'
import Etapa5 from './components/Etapa5'
import Etapa6 from './components/Etapa6'
import Etapa7 from './components/Etapa7'
import Etapa8 from './components/Etapa8'
import Etapa9 from './components/Etapa9'
import './css/Etapa1.css'
import './css/Etapa2.css'
import './css/Etapa3.css'
import './css/Etapa4.css'
import './css/Etapa5.css'
import './css/Etapa6.css'
import './css/Etapa7.css'
import './css/Etapa8.css'
import './css/Etapa9.css'

function App() {
  const style = {
    backgroundColor: '#5242c6',
  }
  
  return (
    <div className = "mainDiv" style={style}>
      <Header />
      <LogoConpec />
      <hr className='linhaBranca1'></hr>
      <Etapa1 />
      <Etapa2 />
      <Etapa3 />
      <hr className='linhaBranca2'></hr>
      <Etapa4 />
      <Etapa5 />
      <Etapa6 />
      <hr className='linhaBranca3'></hr>
      <Etapa7 />
      <Etapa8 />
      <Etapa9 />
    </div>
  )
}

export default App;

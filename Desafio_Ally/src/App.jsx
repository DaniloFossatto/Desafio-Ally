
import Dados from './components/Dados'
import Destinos from './components/Destinos'
import './App.css'




function App() {



 return( <div>
        <form  action="GET" className="Wrap" >
          <div className="container"><Dados/>
                                    <Destinos/></div>
        
        <button type="submit" id="btn">Enviar</button></form></div>
        )
  }

export default App

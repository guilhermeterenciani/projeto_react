import './App.css'
import {Topo} from './Topo.jsx'
import {Noticia} from './Noticia.jsx'
function App() {

  return (
    <div className="App">
      <h1>SCT Notícias</h1>
      <Topo/>
      <main>
        <Noticia/>
      </main>
    </div>
  )
}

export default App

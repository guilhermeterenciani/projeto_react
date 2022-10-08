import './App.css'
import {Topo} from './Topo.jsx'
import {Noticia} from './Noticia.jsx'
function App() {

  return (
    <div className="App">
      <h1>SCT Notícias</h1>
      <Topo/>
      <main>
        <Noticia titulo="Título 1"/>
        <Noticia titulo="Título 2"/>
        <Noticia titulo="Título 3"/>
        <Noticia titulo="Título 4"/>
      </main>
    </div>
  )
}

export default App

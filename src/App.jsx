import './App.css'
import {Topo} from './Topo.jsx'
import {Noticia} from './Noticia.jsx'
import { useEffect, useState } from 'react';
import { listarNoticias } from './server';
function App() {
  const [noticias, setNoticias] = useState([]);

  useEffect(function(){
    listarNoticias().then(function(noticias){
      setNoticias(noticias);
    })
  },[])
  return (
    <div className="App">
      <h1>SCT Notícias</h1>
      <Topo/>
      <main>
        {noticias.map(noticia=><Noticia noticia={noticia}/>)}
      </main>
    </div>
  )
}

export default App

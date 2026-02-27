import '../src/index.css';

import "../src/Css/AppDiv.css"
import "../src/Css/Conteudo.css"

import Header from "../src/components/Header.tsx"
import ConteudoPrincipal from "../src/components/Conteudoprincipal.tsx"

function App() {
  return (
    <div className="App">

              <div className="conteudo">

                    <Header />


                  <ConteudoPrincipal />


              </div>






    </div>
  );
}

export default App;

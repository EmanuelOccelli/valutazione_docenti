
import './App.css';

import React, {useState} from 'react'
let mail
let pass

const App = () => {
  const [miamail, setmiamail] = useState("")

  const [psw, setpsw] = useState("")

  const leggimail = (param) => {
    mail=param.target.value
  }
  const leggipsw = (param) => {
    pass=param.target.value
  }
  const visualizza = () =>{
    console.log("Benvenuto" +" "+ mail)
  }
  return (
    <div class="container bordo centra">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-12 bordo centra">Valutazione Docenti</div>
            <div class="col-6 bordo centra">
              Nome utente:
            </div>
            <div class="col-6 bordo centra">
              <input type="text" placeholder="Inserisci Nome utente" onChange={leggimail}></input>
            </div>
            <div class="col-6 bordo centra">
              Password:
            </div>
            <div class="col-6 bordo centra">
              <input type="password" placeholder="Inserisci password" onChange={leggipsw}></input>
            </div>
            <div class="col-12 bordo centra">
              <input type="button" onClick={visualizza} value="INVIA"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
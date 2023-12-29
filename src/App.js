
import './App.css';

import React, {useState,useRef} from 'react'
let mail=""
let pass

const App = () => {
  const [miaMail,setMiamail] = useState("")
  const leggimail = (param) => {
    mail=param.target.value
    setMiamail(param.target.value)
  }
  const leggipsw = (param) => {
    pass=param.target.value
  }
  const [ris, setris] = useState("")
  const visualizza =()=>{
    setris(miaMail)
  }
  return (
    <div className="container margcont  centra">
      <div className="row bordo">
        <div className="col-12">
          <div className="row">
            <div className="col-12  centra testo">Valutazione Docenti</div>
            <div className="col-6 margine centra">
              Nome utente:
            </div>
            <div className="col-6 margine centra">
              <input type="text" placeholder="Inserisci Nome utente" onChange={leggimail}></input>
            </div>
            <div className="col-6 margine centra">
              Password:
            </div>
            <div className="col-6 margine centra">
              <input type="password" placeholder="Inserisci password" onChange={leggipsw}></input>
            </div>
            <div className="col-12 margine centra">
              <input type="button" onClick={visualizza} value="INVIA"></input>
            </div>
          </div>
        </div>
        <div className="col-12 bordo centra">{ris}</div>
      </div>
    </div>
  )
}

export default App
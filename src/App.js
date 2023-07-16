import { useState } from "react";
import Banner from "./componentes/Banner";
import Form from "./componentes/Formulario";
import Time from "./componentes/Time";
import "./index.css";
import Rodape from "./componentes/Rodape";

function App() {
  const times = [
    {
      nome:"Programação",
      corPrimaria:"#57C278" ,
      corSecundaria: "#D9F7E9",
    },
    {
      nome:"Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome:"Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome:"Deveops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome:"UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome:"Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome:"Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

const [colaboradores, setColaboradores] = useState([])

const aoNovoColaboradorAdicionado = (colaborador) => {
  //debugger
  setColaboradores([...colaboradores, colaborador])
}

  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Form times={times.map(time => time.nome)} aoNovoColaboradorAdicionado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
        {times.map(time => <Time 
          nome={time.nome} 
          key={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}
        <Rodape />
      </header>
    </div>
  );
}

export default App;

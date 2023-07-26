import { useState } from "react";
import Button from "../Botao";
import DropDown from "../ListaSuspensa";
import Campo from "../Campo";

export const Form = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    props.aoNovoColaboradorAdicionado({
      nome,
      cargo,
      imagem,
      time,
    });
    /*Resetando os campos do formulário*/
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");

  };

  return (
    <section className="flex justify-center gap-8 mt-16 mb-16 flex-wrap container mx-auto ">
      <form
        onSubmit={onSave}
        className="w-4/5 bg-neutral rounded-2xl py-9 px-16 shadow-xl flex-1"
      >
        <h2 className="text-3xl">
          Preencha os dados para criar o card do colaborador
        </h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterar={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterar={(valor) => setCargo(valor)}
        />
        <Campo
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterar={(valor) => setImagem(valor)}
        />
        <DropDown
          obrigatorio={true}
          label="Time"
          items={props.times}
          valor={time}
          aoAlterar={(valor) => setTime(valor)}
        />
        <Button text="Criar card" />
      </form>

      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          props.cadastrarTime({ nome: nomeTime, cor: corTime });
          /*Resetando os campos do formulário*/
          setNomeTime("");
          setCorTime("#FFF");
        }}
        className="w-4/5 bg-neutral rounded-2xl py-9 px-16 shadow-xl flex-1"
      >
        <h2 className="text-3xl">Preencha os dados para criar um novo time</h2>
        <Campo
          obrigatorio
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterar={(valor) => setNomeTime(valor)}
        />
        <Campo
          type="color"
          obrigatorio
          label="Cor"
          placeholder="Digite a cor do time"
          valor={corTime}
          aoAlterar={(valor) => setCorTime(valor)}
        />
        <Button text="Criar time" />
      </form>
    </section>
  );
};

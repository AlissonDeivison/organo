import { useState } from "react"
import Button from "../Botao"
import DropDown from "../ListaSuspensa"
import CampoTexto from "../CampoTexto"

export const Form = (props) => {

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");



    const onSave = (event) => {
        event.preventDefault();
        props.aoNovoColaboradorAdicionado({
            nome,
            cargo,
            imagem,
            time
        })
        /*Resetando os campos do formulário*/
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');

    }

    return (
        <section className="flex justify-center mt-20 mb-20 ml-0 mr-0">
            <form onSubmit={onSave} className="w-4/5 bg-neutral rounded-2xl py-9 px-16 shadow-xl">
                <h2 className="text-3xl">Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor = {nome}
                    aoAlterar = {valor => setNome(valor)}
                />
                <CampoTexto  
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor = {cargo}
                    aoAlterar = {valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor = {imagem}
                    aoAlterar = {valor => setImagem(valor)}
                    />
                <DropDown  
                    obrigatorio={true} 
                    label="Time" 
                    items={props.times}
                    valor = {time}
                    aoAlterar = {valor => setTime(valor)}
                />
                <Button text="Criar card" />
            </form>
        </section>
    )
}


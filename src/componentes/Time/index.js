import Colaborador from "../Colaborador";
//props.colaboradores.length > 0 && renderização condicional
//Podemos usar operador ternário também props.colaboradores.length > 0 && ? codigo : ''
const Time = (props) => {

    
    return(
        (props.colaboradores.length > 0) && <section className="text-center p-8" style={{ backgroundColor: props.corSecundaria }}>
            <h3 className="inline-block border-b-4 pb-2 font-bold text-4xl" style={{ borderColor : props.corPrimaria }}>{props.nome}</h3>
            <div className="flex mt-8 flex-wrap justify-around">
            {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corPrimaria={props.corPrimaria} />)}
            </div>
        </section>
    )

}

export default Time;
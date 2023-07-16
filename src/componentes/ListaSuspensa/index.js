const ListaSuspensa = (props) => {

    return (
        <div>
            <label className="font-bold block mb-2 text-lg">{props.label}</label>
            <select onChange={evento => props.aoAlterar(evento.target.value)} required={props.obrigatorio} value = {props.valor} className="bg-white shadow-xl w-full text-base p-6 box-border">
                <option value=""></option>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>    
    )
}

export default ListaSuspensa;
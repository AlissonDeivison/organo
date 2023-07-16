export const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...` //Fazemos isso para interpolar strings

    function aoDigitar(evento) {
       props.aoAlterar(evento.target.value)
    }

    return (
        <div className="mt-6 mb-6">
            <label className="font-bold block mb-2 text-lg">
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={placeholderModificado} className="bg-white shadow-xl w-full text-base p-6 box-border" />
        </div>
    )

}

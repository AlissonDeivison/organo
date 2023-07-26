export const Campo = ({type = 'text', label, placeholder, valor, aoAlterar, obrigatorio = false}) => {

    const placeholderModificado = `${placeholder}...` //Fazemos isso para interpolar strings

    function aoDigitar(evento) {
       aoAlterar(evento.target.value)
    }
    
    return (
        <div className="mt-6 mb-6">
            <label className="font-bold block mb-2 text-lg">{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={aoDigitar} 
                required={obrigatorio} 
                placeholder={placeholderModificado} 
                className={`bg-white shadow-xl w-full text-base p-4 box-border ${type === "color" ? 'p-0 px-6 h-14':''}`}   
            />
        </div>
    )

}

const Button = (props) =>{

    return(

        <button className="mt-8 bg-primary box-border rounded-lg border-0 p-4 text-xl font-bold text-white hover:text-secondary">
            {props.text}
         </button>

    )
}

export default Button;
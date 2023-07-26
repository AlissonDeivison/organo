import "./Colaborador.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

    function favoritar (){
        aoFavoritar(colaborador.id)
    }

    const propsFavorito = {
        size:25,
        onClick:favoritar
    }

    return (
        <div className="colaborador relative">
        <AiFillCloseCircle
            size={25}
            className="absolute top-4 left-64 ml-4"
            onClick={() => aoDeletar(colaborador.id)}
        />
        <div className="cabecalho mt-8" style={{ backgroundColor: corDeFundo }}>
            <img
            src={colaborador.imagem}
            alt={colaborador.nome}
            className="mx-auto"
            />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="mt-6">
            {colaborador.favorito ? (
                <AiFillHeart  {... propsFavorito} color="#ff0000"/> //Passando objeto como propriedade
            ) : (
                <AiOutlineHeart {... propsFavorito} />
            )}
            </div>
        </div>
        </div>
  );
};

export default Colaborador;
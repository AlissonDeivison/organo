import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

//props.colaboradores.length > 0 && renderização condicional
//Podemos usar operador ternário também props.colaboradores.length > 0 && ? codigo : ''


const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="text-center p-8 relative"
        style={{
          backgroundImage: "url(/imagens/fundo.png)",
          backgroundColor: hexToRgba(time.cor, "0.6"),
        }}
      >
        <input
          type="color"
          className="absolute top-4 right-12 rounded"
          value={time.cor}
          onChange={(evento) => mudarCor(evento.target.value, time.id)}
        />
        <h3
          className="inline-block border-b-4 pb-2 font-bold text-4xl"
          style={{ borderColor: time.cor }}
        >
          {time.nome}
        </h3>
        <div className="flex mt-8 flex-wrap justify-around">
          {colaboradores.map((colaborador, indice) => {
            return (
              <Colaborador
                key={indice}
                colaborador={colaborador}
                corDeFundo={time.cor}
                aoDeletar={aoDeletar}
                aoFavoritar={aoFavoritar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
